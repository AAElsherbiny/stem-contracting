// Section title with an optional right-aligned aside (text or link).
export default function SectionHead({ title, children }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
      <h2 className="title-xl">{title}</h2>
      {children}
    </div>
  );
}
