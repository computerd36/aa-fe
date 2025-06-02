import { useEffect, useState } from "react";

export interface AverageDaysPerYearComponentProps {
    value: number;
    metric: "level" | "flowrate";
}

export const AverageDaysPerYearComponent = ({
    value,
    metric,
}: AverageDaysPerYearComponentProps) => {
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
            })
            .catch((err) => {
                console.error("Error loading CSVs:", err);
            });
    }, []);

    const count =
        metric === "level"
            ? levelData.filter((v) => v >= value).length
            : metric === "flowrate"
                ? flowrateData.filter((v) => v >= value).length
                : null;

    if (count == null) {
        return <div className="text-red-500">Error: Metric not found</div>;
    }

    const getColor = (value: number) => {
        if (value <= 5) return "text-red-500"; // 0-5 times a year = red
        if (value <= 20) return "text-yellow-500" // 4-12 times a year = yellow
        return "text-green-500"; // 13+ times a year = green    
    };

    return <span className={`font-bold mx-1 text-xl ${getColor(count)}`}>{count}</span>;
};
