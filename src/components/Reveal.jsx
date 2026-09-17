import useInView from "@/lib/useInView";

const offsets = {
  up: "translate-y-8",
  left: "-translate-x-10",
  right: "translate-x-10",
  scale: "scale-95",
};

export default function Reveal({ children, from = "up", delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${offsets[from]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
