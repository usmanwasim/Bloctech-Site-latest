const LILAC = "#c3a7f4";
const IRIS = "#8977f1";
const GREEN = "#34d399";
const LINE = "#2a2a44";
const INK = "#e7e8f5";
const MUTED = "#8b8ba8";

const inputs = [
  { label: "TOKEN", y: 130 },
  { label: "PRESALE", y: 196 },
  { label: "STAKING", y: 262 },
  { label: "NFT", y: 328 },
];

const outputs = [
  { label: "CONTRACT DEPLOYED", y: 150, color: GREEN },
  { label: "AUDIT PASSED", y: 232, color: LILAC },
  { label: "MAINNET LIVE", y: 314, color: GREEN },
];

const inPath = (y) => `M214 ${y} C 268 ${y}, 288 229, 322 229`;
const outPath = (y) => `M410 229 C 444 229, 452 ${y}, 480 ${y}`;

const delay = (ms) => ({ animationDelay: `${ms}ms` });
const len = (v, ms = 0) => ({ "--len": v, ...(ms ? delay(ms) : {}) });

// Corner brackets — the "instrument panel" cue.
function Brackets() {
  const d = [
    "M28 60 L28 28 L60 28",
    "M672 28 L672 60 M640 28 L672 28",
    "M28 420 L28 452 L60 452",
    "M640 452 L672 452 L672 420",
  ];
  return (
    <g stroke={LILAC} strokeOpacity="0.35" strokeWidth="1.5" fill="none">
      {d.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </g>
  );
}

export default function PipelineVisual() {
  return (
    <svg
      viewBox="0 0 700 480"
      className="w-full h-auto"
      role="img"
      aria-label="Diagram of the BlocTech delivery pipeline: token, presale, staking and NFT work flowing through one build engine to a deployed, audited, live product."
    >
      <defs>
        <radialGradient id="coreGlow">
          <stop offset="0%" stopColor={IRIS} stopOpacity="0.55" />
          <stop offset="100%" stopColor={IRIS} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="scanFade" x1="0" x2="1">
          <stop offset="0%" stopColor={LILAC} stopOpacity="0" />
          <stop offset="50%" stopColor={LILAC} stopOpacity="0.16" />
          <stop offset="100%" stopColor={LILAC} stopOpacity="0" />
        </linearGradient>
        <pattern id="hud-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke={LINE} strokeWidth="1" strokeOpacity="0.55" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="700" height="480" rx="20" fill="#0b0a18" />
      <rect x="0" y="0" width="700" height="480" rx="20" fill="url(#hud-grid)" opacity="0.5" />
      <circle cx="366" cy="229" r="140" fill="url(#coreGlow)" />
      <Brackets />

      {/* status bar */}
      <g>
        <circle cx="54" cy="74" r="4" fill={GREEN} className="anim-led" />
        <text x="68" y="79" fill={INK} fontSize="15" letterSpacing="2.4" fontFamily="ui-monospace, monospace">
          PIPELINE ONLINE
        </text>
        <text x="646" y="79" fill={MUTED} fontSize="14" letterSpacing="2" textAnchor="end" fontFamily="ui-monospace, monospace">
          MULTICHAIN
        </text>
        <path d="M44 96 L656 96" stroke={LINE} strokeWidth="1" />
      </g>

      {/* scan sweep */}
      <g className="anim-scan">
        <rect x="0" y="100" width="70" height="300" fill="url(#scanFade)" />
      </g>

      {/* inputs */}
      {inputs.map((n, i) => (
        <g key={n.label}>
          <rect
            x="44"
            y={n.y - 21}
            width="170"
            height="42"
            rx="21"
            fill="#15132a"
            stroke={LINE}
            className="anim-pop"
            style={delay(200 + i * 120)}
          />
          <circle cx="70" cy={n.y} r="5" fill={LILAC} className="anim-pulse" style={delay(i * 300)} />
          <text x="88" y={n.y + 5} fill={INK} fontSize="15" letterSpacing="1.6" fontFamily="ui-monospace, monospace">
            {n.label}
          </text>
        </g>
      ))}

      {/* input connectors */}
      {inputs.map((n, i) => (
        <g key={`in-${n.label}`}>
          <path d={inPath(n.y)} fill="none" stroke={LILAC} strokeOpacity="0.3" strokeWidth="1.5" />
          <path d={inPath(n.y)} fill="none" stroke={LILAC} strokeOpacity="0.8" strokeWidth="1.5" className="anim-flow" style={delay(i * 180)} />
          <circle r="3.4" fill={LILAC} className="anim-travel" style={{ offsetPath: `path('${inPath(n.y)}')`, animationDelay: `${i * 420}ms` }} />
        </g>
      ))}

      {/* core */}
      <g>
        <circle cx="366" cy="229" r="58" fill="none" stroke={LILAC} strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 10" className="animate-spin-slow" style={{ transformOrigin: "366px 229px" }} />
        <circle cx="366" cy="229" r="44" fill="#120f26" stroke={IRIS} strokeWidth="2" />
        <g transform="translate(366 229)">
          <path
            d="M-20 -12 L0 -23 L20 -12 L20 12 L0 23 L-20 12 Z"
            fill="none"
            stroke={LILAC}
            strokeWidth="2"
            strokeLinejoin="round"
            className="anim-draw"
            style={len(150, 400)}
          />
          <path d="M-6 -9 L10 0 L-6 9 Z" fill={LILAC} className="anim-pop" style={delay(1000)} />
        </g>
        <text x="366" y="312" fill={MUTED} fontSize="13" letterSpacing="2.2" textAnchor="middle" fontFamily="ui-monospace, monospace">
          BUILD ENGINE
        </text>
      </g>

      {/* output connectors */}
      {outputs.map((n, i) => (
        <g key={`out-${n.label}`}>
          <path d={outPath(n.y)} fill="none" stroke={n.color} strokeOpacity="0.25" strokeWidth="1.5" />
          <path d={outPath(n.y)} fill="none" stroke={n.color} strokeOpacity="0.7" strokeWidth="1.5" className="anim-flow" style={delay(i * 220)} />
          <circle r="3.4" fill={n.color} className="anim-travel" style={{ offsetPath: `path('${outPath(n.y)}')`, animationDelay: `${600 + i * 500}ms` }} />
        </g>
      ))}

      {/* outputs */}
      {outputs.map((n, i) => (
        <g key={n.label} className="anim-pop" style={delay(900 + i * 160)}>
          <rect x="480" y={n.y - 26} width="176" height="52" rx="10" fill="#15132a" stroke={LINE} />
          <rect x="480" y={n.y - 26} width="4" height="52" rx="2" fill={n.color} />
          <text x="500" y={n.y - 4} fill={INK} fontSize="13.5" letterSpacing="1.4" fontFamily="ui-monospace, monospace">
            {n.label}
          </text>
          <rect x="500" y={n.y + 6} width="86" height="5" rx="2.5" fill={LINE} />
          <rect x="500" y={n.y + 6} width="54" height="5" rx="2.5" fill={n.color} opacity="0.8" />
        </g>
      ))}

      {/* footer strip */}
      <g>
        <text x="44" y="412" fill={MUTED} fontSize="13" letterSpacing="2.2" fontFamily="ui-monospace, monospace">
          DELIVERY CHECKS
        </text>
        {Array.from({ length: 20 }).map((_, i) => (
          <rect
            key={i}
            x={232 + i * 21}
            y="400"
            width="13"
            height="13"
            rx="3"
            fill={i < 14 ? LILAC : LINE}
            opacity={i < 14 ? 0.9 : 0.6}
            className="anim-pop"
            style={delay(1100 + i * 45)}
          />
        ))}
      </g>
    </svg>
  );
}
