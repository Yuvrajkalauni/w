import { ProjectItem } from '../data/portfolioData';

interface ProjectSchematicProps {
  type: ProjectItem['schematicType'];
  compact?: boolean;
}

export function ProjectSchematic({ type, compact = false }: ProjectSchematicProps) {
  const heightClass = compact ? 'h-44' : 'h-52';

  return (
    <div
      className={`relative w-full ${heightClass} bg-zinc-50 border-b border-zinc-200 overflow-hidden flex items-center justify-center p-5 select-none`}
      aria-hidden="true"
    >
      {/* Subtle architectural dot grid */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: 'radial-gradient(#D4D4D8 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {type === 'campusconnect' && (
        <svg viewBox="0 0 360 150" className="relative z-10 w-full h-full max-w-[340px]" fill="none">
          {/* Client Node */}
          <rect x="16" y="42" width="84" height="66" rx="8" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.5" />
          <text x="58" y="69" textAnchor="middle" fill="#09090B" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            React UI
          </text>
          <text x="58" y="88" textAnchor="middle" fill="#71717A" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            SPA Client
          </text>

          {/* Arrow 1 */}
          <line x1="100" y1="75" x2="134" y2="75" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="136" cy="75" r="3" fill="#2563EB" />

          {/* Node.js Auth & API */}
          <rect x="138" y="34" width="90" height="82" rx="8" fill="#FFFFFF" stroke="#2563EB" strokeWidth="1.5" />
          <text x="183" y="62" textAnchor="middle" fill="#09090B" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Node.js API
          </text>
          <text x="183" y="80" textAnchor="middle" fill="#2563EB" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Auth + Routes
          </text>
          <text x="183" y="98" textAnchor="middle" fill="#71717A" fontSize="9" fontFamily="JetBrains Mono, monospace">
            HTTP / JSON
          </text>

          {/* Arrow 2 */}
          <line x1="228" y1="75" x2="262" y2="75" stroke="#52525B" strokeWidth="1.5" />
          <circle cx="264" cy="75" r="3" fill="#09090B" />

          {/* PostgreSQL */}
          <rect x="266" y="42" width="78" height="66" rx="8" fill="#09090B" />
          <text x="305" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            PostgreSQL
          </text>
          <text x="305" y="88" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Users & Data
          </text>
        </svg>
      )}

      {type === 'netmonitor' && (
        <svg viewBox="0 0 360 150" className="relative z-10 w-full h-full max-w-[340px]" fill="none">
          {/* Central Python Prober */}
          <rect x="20" y="45" width="94" height="60" rx="8" fill="#09090B" />
          <text x="67" y="71" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Python Probe
          </text>
          <text x="67" y="89" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            ICMP + Socket
          </text>

          {/* Probe Lines */}
          <path d="M114 75 C148 75, 148 32, 184 32" stroke="#2563EB" strokeWidth="1.5" />
          <path d="M114 75 L184 75" stroke="#2563EB" strokeWidth="1.5" />
          <path d="M114 75 C148 75, 148 118, 184 118" stroke="#A1A1AA" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Target Hosts */}
          <rect x="184" y="16" width="156" height="32" rx="6" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.25" />
          <text x="196" y="36" fill="#09090B" fontSize="10" fontWeight="500" fontFamily="JetBrains Mono, monospace">
            10.0.4.12 · Gateway
          </text>
          <text x="328" y="36" textAnchor="end" fill="#2563EB" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace">
            11ms
          </text>

          <rect x="184" y="59" width="156" height="32" rx="6" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.25" />
          <text x="196" y="79" fill="#09090B" fontSize="10" fontWeight="500" fontFamily="JetBrains Mono, monospace">
            10.0.4.48 · DNS Node
          </text>
          <text x="328" y="79" textAnchor="end" fill="#2563EB" fontSize="10" fontWeight="600" fontFamily="JetBrains Mono, monospace">
            18ms
          </text>

          <rect x="184" y="102" width="156" height="32" rx="6" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.25" />
          <text x="196" y="122" fill="#52525B" fontSize="10" fontWeight="500" fontFamily="JetBrains Mono, monospace">
            10.0.4.90 · Timeout
          </text>
          <text x="328" y="122" textAnchor="end" fill="#71717A" fontSize="10" fontWeight="500" fontFamily="JetBrains Mono, monospace">
            Retry
          </text>
        </svg>
      )}

      {type === 'inventory' && (
        <svg viewBox="0 0 360 150" className="relative z-10 w-full h-full max-w-[340px]" fill="none">
          {/* Frame */}
          <rect x="18" y="16" width="324" height="118" rx="8" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.5" />
          <line x1="18" y1="42" x2="342" y2="42" stroke="#E4E4E7" strokeWidth="1" />
          <text x="32" y="33" fill="#09090B" fontSize="10.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Inventory Processing Throughput
          </text>
          <text x="328" y="33" textAnchor="end" fill="#2563EB" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
            +25% Speed
          </text>

          {/* Baseline vs Optimized Bars */}
          <text x="32" y="68" fill="#71717A" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Baseline
          </text>
          <rect x="104" y="57" width="160" height="14" rx="3" fill="#E4E4E7" />

          <text x="32" y="96" fill="#09090B" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
            Optimized
          </text>
          <rect x="104" y="85" width="210" height="14" rx="3" fill="#2563EB" />

          <text x="32" y="121" fill="#71717A" fontSize="9" fontFamily="JetBrains Mono, monospace">
            REST API Tests · Root-Cause Fixes · Agile Git
          </text>
        </svg>
      )}

      {type === 'expense' && (
        <svg viewBox="0 0 360 150" className="relative z-10 w-full h-full max-w-[340px]" fill="none">
          {/* Ledger Table */}
          <rect x="22" y="18" width="200" height="114" rx="8" fill="#FFFFFF" stroke="#D4D4D8" strokeWidth="1.5" />
          <line x1="22" y1="44" x2="222" y2="44" stroke="#E4E4E7" strokeWidth="1" />
          <text x="34" y="35" fill="#09090B" fontSize="10.5" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Monthly Ledger (SQL)
          </text>

          <rect x="34" y="55" width="176" height="18" rx="3" fill="#F4F4F5" />
          <text x="42" y="67" fill="#09090B" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Utilities · Validated
          </text>

          <rect x="34" y="80" width="176" height="18" rx="3" fill="#F4F4F5" />
          <text x="42" y="92" fill="#09090B" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Transit · Validated
          </text>

          <rect x="34" y="105" width="176" height="18" rx="3" fill="#EFF6FF" />
          <text x="42" y="117" fill="#2563EB" fontSize="9.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
            Summary Query Ready
          </text>

          {/* Java Validation Module */}
          <line x1="222" y1="75" x2="248" y2="75" stroke="#2563EB" strokeWidth="1.5" />
          <rect x="248" y="42" width="90" height="66" rx="8" fill="#09090B" />
          <text x="293" y="69" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Plus Jakarta Sans, sans-serif">
            Java Core
          </text>
          <text x="293" y="88" textAnchor="middle" fill="#A1A1AA" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
            Input Guard
          </text>
        </svg>
      )}
    </div>
  );
}
