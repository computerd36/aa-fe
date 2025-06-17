import { Skeleton } from "@heroui/skeleton";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export interface AverageDaysPerYearComponentProps {
    value: number;
    metric: "level" | "flowrate";
}

export const AverageDaysPerYearComponent = ({
    value,
    metric,
}: AverageDaysPerYearComponentProps) => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    const [levelData, setLevelData] = useState<number[]>([]);
    const [flowrateData, setFlowrateData] = useState<number[]>([]);

    useEffect(() => {
        async function loadCsv(path: string): Promise<number[]> {
            const txt = await fetch(path).then((r) =>
                r.ok ? r.text() : Promise.reject(r.statusText)
            );
            return txt
                .trim()
                .split("\n")
                .slice(2) // drop sep=; + header
                .map((line) => parseFloat(line.split(";")[3]));
        }

        Promise.all([
            loadCsv("/data/DatosHistoricos_level.csv"),
            loadCsv("/data/DatosHistoricos_flowrate.csv"),
        ])
            .then(([levels, flows]) => {
                setLevelData(levels);
                setFlowrateData(flows);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error loading CSVs:", err);
            });
    }, []);

    const count =
        metric === "level"
            ? Math.ceil(levelData.filter((v) => v >= value).length / 7)
            : metric === "flowrate"
                ? Math.ceil(flowrateData.filter((v) => v >= value).length / 7)
                : null;

    if (count == null) {
        return <div className="text-red-500">Error: Metric not found</div>;
    }

    const getColor = (value: number) => {
        if (value <= 5) return "text-green-500";
        if (value <= 20) return "text-yellow-500"
        return "text-red-500";
    };

    return (
        <span className="text-pretty text-center mx-auto">
            <Skeleton
                isLoaded={!loading}
                className="rounded-lg"
            >
                <Trans
                    i18nKey="components.setup.step3.hint"
                    components={{ alertAmount: <span className={`font-bold ${getColor(count)} text-nowrap`}>{count} {count === 1 ? t('components.setup.step3.day') : t('components.setup.step3.days')} {t('components.setup.step3.aYear')}</span> }}
                />
            </Skeleton>
        </span>

    );
};
