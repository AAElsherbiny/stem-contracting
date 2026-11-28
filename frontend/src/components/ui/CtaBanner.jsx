import Button from "./Button";

export default function CtaBanner() {
  return (
    <section className="wrap section-y">
      <div className="border border-line bg-cream-100 px-6 py-14 text-center lg:py-[72px]">
        <h2 className="title-xl">Have a project in mind?</h2>
        <p className="text-body mx-auto mt-4 max-w-[560px] text-muted">
          Share the scope and timeline and our team will reply with next steps.
        </p>
        <Button to="/quote" className="mt-4">Request a quote</Button>
      </div>
    </section>
  );
}
