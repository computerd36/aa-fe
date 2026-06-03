import { useState } from "react";

export interface Chip {
  icon: React.ReactNode;
  label: string;
}

export interface HowStepProps {
  stepNumber: string;
  title: string;
  description: string;
  chips?: Chip[];
  screenTag?: string;
  visual: React.ReactNode;
  reverse?: boolean;
}

export const HowStepComponent = ({
  stepNumber,
  title,
  description,
  chips = [],
  screenTag,
  visual,
  reverse = false,
}: HowStepProps) => {
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
            w-full max-w-[440px] aspect-[4/3] rounded-[22px] relative
            [transform-style:preserve-3d]
            transition-transform duration-500 [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)]
            ${hovered ? "[transform:rotateY(0deg)_rotateX(2deg)]" : deviceTiltClass}
          `}
        >
          {/* Glow */}
          <div className="absolute left-[10%] right-[10%] -bottom-[30px] h-[60px] blur-[14px] [transform:translateZ(-40px)] -z-10 [background:radial-gradient(ellipse_at_center,rgba(6,147,227,0.32),transparent_70%)]" />

          {/* Screen */}
          <div
            className={`absolute inset-0 rounded-[22px] border border-white/10 overflow-hidden flex flex-col ${shadowClass} [background:repeating-linear-gradient(135deg,rgba(255,255,255,0.045)_0_2px,transparent_2px_13px),linear-gradient(160deg,#16171c,#0e0f13)]`}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07]">
              <span className="w-[10px] h-[10px] rounded-full bg-white/[0.16] block" />
              <span className="w-[10px] h-[10px] rounded-full bg-white/[0.16] block" />
              <span className="w-[10px] h-[10px] rounded-full bg-white/[0.16] block" />
              {screenTag && (
                <span className="ml-auto font-mono text-[11px] tracking-[0.04em] text-[#6b7178]">
                  {screenTag}
                </span>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 grid place-items-center p-4 text-center">
              {visual}
            </div>
          </div>
        </div>
      </div>

      {/* Copy */}
      <div className={`w-full max-w-[460px] ${reverse ? "md:order-1 md:ml-auto" : "md:order-2"}`}>
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[15px] font-bold tracking-[0.04em] text-primary tabular-nums">
            STEP {stepNumber}
          </span>
          <span className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-primary to-transparent" />
        </div>

        <h2 className="text-[clamp(28px,3.4vw,40px)] font-bold mb-4 leading-[1.08] tracking-[-0.025em]">
          {title}
        </h2>

        <p className="text-lg leading-relaxed text-[#9aa1a9]">
          {description}
        </p>

        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {chips.map((chip, i) => (
              <span
                key={i}
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
