import Button from "../../../components/ui/Button";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-10">
      <div className="rounded-md border border-cream-100 bg-cream-100/70 px-6 py-14 text-center">
        <h2 className="font-display text-4xl font-semibold">Have a project in mind?</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-stone-600">
          Share the scope and timeline and our team will reply with next steps.
        </p>
        <Button to="/quote" className="mt-7">Request a quote</Button>
      </div>
    </section>
  );
}
