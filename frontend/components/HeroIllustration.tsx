export const HeroIllustration = () => {
  return (
    <svg
      width="640"
      height="460"
      viewBox="0 0 560 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ================= CONNECTION LINES ================= */}

      {/* Student → Verified */}
      <line
        x1="140"
        y1="120"
        x2="280"
        y2="180"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* Alumni → Verified */}
      <line
        x1="420"
        y1="120"
        x2="280"
        y2="180"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* Verified → Shield */}
      <line
        x1="280"
        y1="260"
        x2="280"
        y2="180"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* Verified → Network Alumni (subtle, dashed) */}
      <line
        x1="320"
        y1="260"
        x2="440"
        y2="250"
        stroke="#CBD5E1"
        strokeWidth="2"
        strokeDasharray="4 4"
      />

      {/* ================= STUDENT NODE ================= */}

      <circle cx="140" cy="120" r="36" fill="#DBEAFE" />
      <circle cx="140" cy="120" r="36" stroke="#2563EB" strokeWidth="2" />
      <circle cx="140" cy="112" r="8" fill="#2563EB" />
      <rect x="130" y="124" width="20" height="14" rx="6" fill="#2563EB" />
      <text x="108" y="175" fontSize="12" fill="#0F172A">
        Student
      </text>

      {/* ================= ALUMNI NODE ================= */}

      <circle cx="420" cy="120" r="36" fill="#FEF3C7" />
      <circle cx="420" cy="120" r="36" stroke="#F59E0B" strokeWidth="2" />
      <rect x="400" y="100" width="40" height="28" rx="6" fill="#F59E0B" />
      <text x="392" y="175" fontSize="12" fill="#0F172A">
        Alumni
      </text>

      {/* ================= CENTRAL VERIFIED PROFILE ================= */}

      <rect
        x="220"
        y="150"
        width="120"
        height="80"
        rx="16"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2"
      />
      <circle cx="240" cy="175" r="6" fill="#0F172A" />
      <line x1="255" y1="172" x2="325" y2="172" stroke="#0F172A" strokeWidth="2" />
      <line x1="240" y1="190" x2="310" y2="190" stroke="#94A3B8" strokeWidth="2" />
      <text x="240" y="215" fontSize="11" fill="#0F172A">
        Alumni • CSE ’19
      </text>

      {/* ================= VERIFICATION SHIELD ================= */}

      <path
        d="M280 250 L305 262 V292 C305 318 280 334 280 334 C280 334 255 318 255 292 V262 Z"
        fill="#DCFCE7"
        stroke="#22C55E"
        strokeWidth="2"
      />
      <path
        d="M270 292 L278 300 L292 284"
        stroke="#22C55E"
        strokeWidth="3"
      />

      {/* ================= NETWORK ALUMNI CARD ================= */}

      <rect
        x="380"
        y="250"
        width="120"
        height="70"
        rx="14"
        fill="#F8FAFC"
        stroke="#CBD5E1"
        strokeWidth="2"
      />
      <text x="400" y="290" fontSize="11" fill="#64748B">
        Alumni • CE ’16
      </text>

      {/* ================= INSTITUTION NODE ================= */}

      <circle cx="280" cy="80" r="28" fill="#E0E7FF" />
      <circle cx="280" cy="80" r="28" stroke="#6366F1" strokeWidth="2" />
      <path
        d="M265 88 L280 76 L295 88"
        stroke="#6366F1"
        strokeWidth="2"
      />
      <rect x="268" y="88" width="24" height="10" rx="4" fill="#6366F1" />
      <text x="252" y="120" fontSize="11" fill="#0F172A">
        Institution
      </text>
    </svg>
  );
};
