import Button from "../components/ui/Button";

// Every nav link lands somewhere useful, never a blank screen (HCI: error prevention & recovery).
export default function PlaceholderPage({ title, notFound = false }) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-[1280px] flex-col items-start justify-center gap-4 px-5 py-16 md:px-10">
      <p className="text-xs font-bold tracking-[0.16em] text-gold-700 uppercase">
        {notFound ? "404" : "Coming soon"}
      </p>
      <h1 className="font-display text-5xl font-semibold">{title}</h1>
      <p className="max-w-md text-stone-600">
        {notFound
          ? "We couldn’t find that page. Check the address or head back home."
          : "This page is not built yet. You can return to the home page in the meantime."}
      </p>
      <Button to="/">Back to home</Button>
    </section>
  );
}
