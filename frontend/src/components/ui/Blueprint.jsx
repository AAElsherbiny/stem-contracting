// Simple line-drawing placeholder illustrations (no image files needed).
const shapes = {
  building: (
    <>
      <rect x="120" y="70" width="120" height="170" fill="#fff" />
      <path d="M135 95h90M135 120h90M135 145h90M135 170h90M135 195h90M150 85v140M180 85v140M210 85v140" />
      <rect x="250" y="130" width="40" height="110" fill="#fff" />
    </>
  ),
  tower: (
    <>
      <rect x="130" y="50" width="110" height="190" fill="#fff" />
      <path d="M130 50l110 190M240 50L130 240M130 100h110M130 150h110M130 200h110" />
      <rect x="90" y="140" width="40" height="100" fill="#fff" />
    </>
  ),
  school: (
    <>
      <rect x="70" y="110" width="260" height="130" fill="#fff" />
      <path d="M60 110h280M95 135h35v30H95zM150 135h35v30h-35zM215 135h35v30h-35zM270 135h35v30h-35zM180 240v-45h40v45" />
    </>
  ),
  pylon: (
    <>
      <path d="M200 40l-45 200M200 40l45 200M175 110h50M165 160h70M155 205h90M200 40v-15M120 80h160" />
      <rect x="60" y="200" width="50" height="40" fill="#fff" />
      <rect x="290" y="190" width="50" height="50" fill="#fff" />
    </>
  ),
};

export default function Blueprint({ variant = "building", label = "Sample drawing", className = "" }) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={`${label}: ${variant}`}
      className={`block w-full bg-cream-100 ${className}`}
    >
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#e4d9bd" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#grid)" />
      <g fill="none" stroke="#1c1c1c" strokeWidth="2.5">{shapes[variant]}</g>
      <path d="M0 240h400" stroke="#d4a843" strokeWidth="6" />
    </svg>
  );
}
