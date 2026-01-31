export const HeroIllustrationMobile = () => {
  return (
    <svg
      width="360"
      height="260"
      viewBox="0 0 360 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Student → Verified */}
      <line x1="90" y1="90" x2="180" y2="140" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="270" y1="90" x2="180" y2="140" stroke="#CBD5E1" strokeWidth="2" />
      <line x1="180" y1="190" x2="180" y2="140" stroke="#CBD5E1" strokeWidth="2" />

      {/* STUDENT */}
      <circle cx="90" cy="90" r="24" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
      <circle cx="90" cy="84" r="5" fill="#2563EB" />
      <rect x="83" y="94" width="14" height="10" rx="5" fill="#2563EB" />
      <text x="90" y="130" fontSize="11" fill="#0F172A" textAnchor="middle">
        Student
      </text>

      {/* ALUMNI */}
      <circle cx="270" cy="90" r="24" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <rect x="258" y="78" width="24" height="18" rx="4" fill="#F59E0B" />
      <text x="270" y="130" fontSize="11" fill="#0F172A" textAnchor="middle">
        Alumni
      </text>

      {/* VERIFIED CARD */}
      <rect
        x="110"
        y="130"
        width="140"
        height="70"
        rx="14"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <circle cx="130" cy="152" r="5" fill="#0F172A" />
      <line x1="145" y1="150" x2="220" y2="150" stroke="#0F172A" strokeWidth="2" />
      <line x1="130" y1="166" x2="215" y2="166" stroke="#94A3B8" strokeWidth="2" />
      <text x="180" y="186" fontSize="11" fill="#0F172A" textAnchor="middle">
        Alumni • CSE ’19
      </text>

      {/* SHIELD */}
      <path
        d="M180 205 L200 215 V235 C200 250 180 260 180 260 C180 260 160 250 160 235 V215 Z"
        fill="#DCFCE7"
        stroke="#22C55E"
        strokeWidth="2"
      />
      <path d="M172 235 L178 241 L190 227" stroke="#22C55E" strokeWidth="3" />
    </svg>
  );
};
