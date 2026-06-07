import { ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Chip {
  icon: ReactNode;
  label: string;
}

export interface HowStepProps {
  stepNumber: string;
  title: string;
  description: string;
  chips?: Chip[];
  visual: ReactNode;
  reverse?: boolean;
}

export const HowStepComponent = ({
  stepNumber,
  title,
  description,
  chips = [],
  visual,
  reverse = false,
}: HowStepProps) => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);

  const deviceTiltClass = reverse
    ? "[transform:rotateY(-18deg)_rotateX(6deg)]"
    : "[transform:rotateY(18deg)_rotateX(6deg)]";

  const shadowClass = reverse
    ? "shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,38px_48px_80px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,0,0,0.4)]"
    : "shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,-38px_48px_80px_-30px_rgba(0,0,0,0.85),0_0_0_1px_rgba(0,0,0,0.4)]";

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-16 border-t border-white/[0.09]">

      {/* Visual */}
      <div
        className={`flex justify-center [perspective:1600px] ${reverse ? "md:order-2" : "md:order-1"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`
            w-full max-w-[330px] aspect-[1/1] rounded-xl relative
            [transform-style:preserve-3d]
            transition-transform duration-500 [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)]
            ${hovered ? "[transform:rotateY(0deg)_rotateX(2deg)]" : deviceTiltClass}
          `}
        >
          {/* Screen */}
          <div
            className={`absolute inset-0 rounded-[22px] overflow-hidden flex flex-col ${shadowClass} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-blue-950/15`}>
            {/* Content */}
            <div className="w-full h-full p-4 flex items-center justify-center">
              {visual}
            </div>
          </div>
          {/* Gradient border — sibling outside overflow-hidden so corners render correctly */}
          <div className="how-step-border absolute inset-0 rounded-[22px] pointer-events-none z-10" />
        </div>
      </div>


      {/* Copy */}
      <div className={`w-full max-w-[460px] ${reverse ? "md:order-1 md:ml-auto" : "md:order-2"}`}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[15px] font-bold tracking-[0.04em] text-primary tabular-nums">
            {t('pages.how.step')} {stepNumber}
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-primary via-[#93c5fd7f] to-transparent" />
        </div>

        <h2 className="text-[clamp(28px,3.4vw,40px)] font-semibold mb-4 leading-[1.08] tracking-[-0.025em]">
          {title}
        </h2>

        <p className="text-lg leading-relaxed text-[#9aa1a9]">
          {description}
        </p>

        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {chips.map((chip, i) => (
              <span
                key={"cardchip-" + chip.label + "-" + i}
                className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-[10px] text-[#9aa1a9] border border-white/[0.09] bg-[#101013]"
              >
                <span className="text-primary w-[15px] h-[15px] flex items-center justify-center shrink-0">
                  {chip.icon}
                </span>
                {chip.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
