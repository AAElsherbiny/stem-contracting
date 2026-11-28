// Cream title band used at the top of every inner page.
export default function PageHeader({ title, children }) {
  return (
    <div className="border-b border-line bg-cream-50">
      <div className="wrap py-12 lg:py-[72px]">
        <h1 className="title-page">{title}</h1>
        {children && <p className="text-lead mt-4 max-w-[640px] text-muted">{children}</p>}
      </div>
    </div>
  );
}
