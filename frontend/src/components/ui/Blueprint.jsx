// Line-drawing illustrations in the Figma palette (the design uses vector drawings, no photos).
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
      <path d="M145 70h14M175 70h14M205 70h14M145 100h14M175 100h14M205 100h14M145 130h14M175 130h14M205 130h14M145 160h14M175 160h14M205 160h14M145 190h14M175 190h14M205 190h14" stroke="#d2a84c" />
      <rect x="90" y="140" width="40" height="100" fill="#fff" />
      <rect x="240" y="160" width="50" height="80" fill="#fff" />
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
      <path d="M200 40l-45 200M200 40l45 200M175 110h50M165 160h70M155 205h90M200 40v-15" />
      <path d="M100 75h200" stroke="#d2a84c" strokeWidth="3" />
      <rect x="60" y="200" width="50" height="40" fill="#fff" />
      <rect x="290" y="190" width="50" height="50" fill="#fff" />
    </>
  ),
  crane: (
    <>
      <rect x="90" y="120" width="120" height="120" fill="#fff" />
      <path d="M105 140h90M105 170h90M105 200h90M135 130v100M165 130v100" />
      <path d="M250 240V50M280 240V50M250 80l30 30M250 120l30 30M250 160l30 30M250 200l30 30" />
      <path d="M110 50h230M110 50v50" stroke="#d2a84c" strokeWidth="3" />
      <rect x="100" y="100" width="20" height="14" fill="#fff" />
    </>
  ),
  interior: (
    <>
      <rect x="80" y="70" width="240" height="170" fill="#fff" />
      <path d="M80 200h240M120 200v-50h70v50M230 100h60v50h-60zM260 100v50" />
      <path d="M140 150h30" stroke="#d2a84c" strokeWidth="3" />
    </>
  ),
  solar: (
    <>
      <circle cx="320" cy="70" r="22" fill="#fff" stroke="#d2a84c" strokeWidth="3" />
      <path d="M70 230l30-70h80l-30 70zM160 230l30-70h80l-30 70zM250 230l30-70h80l-30 70z" fill="#fff" />
      <path d="M85 195h80M175 195h80M265 195h80" />
    </>
  ),
};

const skyline = [96, 159, 99, 162, 102, 165, 105, 168]; // x-offset-free bar heights from the Figma skyline

export default function Blueprint({ variant = "building", label = "Sample drawing", photo, className = "" }) {
  if (photo) {
    return <img src={photo} alt={label} className={`block object-cover ${className}`} />;
  }
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMax slice"
      role="img"
      aria-label={`${label}: ${variant}`}
      className={`block bg-linear-to-b from-draw-100 to-draw-200 ${className}`}
    >
      <g fill="none" stroke="#cfc4a5" strokeWidth="2">
        {skyline.map((h, i) => (
          <rect key={i} x={-20 + i * 55} y={240 - h * 0.6} width="46" height={h * 0.6} />
        ))}
      </g>
      <g fill="none" stroke="#1e1e21" strokeWidth="2.5">{shapes[variant] ?? shapes.building}</g>
      <path d="M0 240h400" stroke="#d2a84c" strokeWidth="6" />
      <path d="M0 252h400" stroke="#cfc4a5" strokeWidth="2" />
    </svg>
  );
}
