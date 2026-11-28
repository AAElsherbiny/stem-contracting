import { useState } from "react";
import { categories, categoryVariant } from "../../data/siteData";
import { addProject, getAddedProjects, getSliderPhotos, readFiles, saveSliderPhotos } from "../../data/projectsStore";
import PageHeader from "../../components/ui/PageHeader";
import Field, { FileField } from "../../components/ui/Field";
import Button from "../../components/ui/Button";

const note = "text-[13px] leading-[22px] text-muted";

export default function AdminPage() {
  const [list, setList] = useState(getAddedProjects);
  const [status, setStatus] = useState("");
  const [sliderStatus, setSliderStatus] = useState("");
  const [sliderCount, setSliderCount] = useState(() => getSliderPhotos().length);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const photos = await readFiles(f.getAll("photos").filter((x) => x.size), 6);
    const type = f.get("type");
    const project = {
      id: `u${Date.now()}`,
      variant: categoryVariant[type] ?? "building",
      category: type,
      title: f.get("name").trim(),
      place: f.get("location").trim(),
      text: f.get("scope").trim(),
      overview: f.get("overview").trim() || undefined,
      client: f.get("client").trim() || undefined,
      duration: f.get("duration").trim() || undefined,
      highlights: f.get("highlights").split(",").map((h) => h.trim()).filter(Boolean),
      photos,
    };
    if (addProject(project)) {
      setList(getAddedProjects());
      setStatus("Project published. It now appears on the Projects page and the home slider.");
      form.reset();
    } else {
      setStatus("Could not save: browser storage is full or blocked. Try fewer or smaller photos.");
    }
  }

  async function onSlider(e) {
    e.preventDefault();
    const files = [...e.currentTarget.elements.slider.files];
    if (!files.length) return setSliderStatus("Choose at least one photo first.");
    const ok = saveSliderPhotos(await readFiles(files, 3));
    setSliderCount(getSliderPhotos().length);
    setSliderStatus(ok ? "Slider photos saved." : "Could not save: the photos are too large for browser storage.");
  }

  return (
    <>
      <PageHeader title="Admin: add a project">
        Add new projects here. They appear on the Projects page and the home slider.
      </PageHeader>

      <section className="wrap grid gap-12 py-12 lg:grid-cols-2 lg:gap-[72px] lg:py-[104px]">
        <form onSubmit={onSubmit} className="space-y-6 self-start rounded-2xl bg-white p-8 shadow-card">
          <h2 className="title-md">New project</h2>
          <Field label="Project name" name="name" required />
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Type" as="select" name="type">
              {categories.slice(1).map((c) => <option key={c}>{c}</option>)}
            </Field>
            <Field label="Duration" name="duration" placeholder="e.g. 8 months" />
            <Field label="Client" name="client" />
            <Field label="Location" name="location" />
          </div>
          <Field label="Scope of work" as="textarea" name="scope" required />
          <Field label="Overview (optional)" as="textarea" name="overview" className="[&_textarea]:min-h-[130px]" />
          <Field label="Highlights (optional, comma separated)" name="highlights" placeholder="312 units, 4,500 m² retail" />
          <FileField label="Photos (optional, several allowed)" name="photos" multiple />
          <Button type="submit" className="w-full">Publish project</Button>
          {status && <p role="status" className="text-[15px] leading-[26px] font-bold text-gold-700">{status}</p>}
        </form>

        <div>
          <h2 className="title-md">Your projects</h2>
          <p className={`${note} mt-2`}>Saved in this browser only. A real backend and login are needed before this is used live.</p>
          <div className="mt-4 rounded border border-line">
            {list.length ? (
              <ul>
                {list.map((p) => (
                  <li key={p.id} className="border-b border-line p-4 last:border-0">
                    <p className="text-body font-bold">{p.title}</p>
                    <p className={note}>{p.category}{p.place && ` · ${p.place}`}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-body p-4 text-muted">No projects added yet. Your first one will appear here.</p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-cream-50">
        <div className="mx-auto max-w-[772px] px-6 py-12 lg:py-[103px]">
          <h2 className="title-md">Home slider photos</h2>
          <p className="text-body mt-4 text-muted">
            Upload up to 3 photos for the home page slider. Without photos the slider shows the line drawings.
          </p>
          <form onSubmit={onSlider} className="mt-6 rounded-2xl bg-white p-8 shadow-card">
            <FileField label="Photos (landscape works best)" name="slider" multiple />
            <div className="mt-6 flex flex-wrap gap-4">
              <Button type="submit">Save slider photos</Button>
              <Button variant="outline" onClick={() => { saveSliderPhotos([]); setSliderCount(0); setSliderStatus("Slider now shows the line drawings."); }}>
                Use line drawings
              </Button>
            </div>
            <p role="status" className={`${note} mt-4`}>{sliderStatus || `${sliderCount} slider photo(s) saved.`}</p>
          </form>
        </div>
      </section>
    </>
  );
}
