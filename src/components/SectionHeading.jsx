export default function SectionHeading({ eyebrow, title, subtitle, className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-lilac/30 bg-lilac/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-lilac">
          <span className="w-1.5 h-1.5 rounded-full bg-lilac animate-pulse" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 text-pretty">{subtitle}</p>
      )}
    </div>
  );
}
