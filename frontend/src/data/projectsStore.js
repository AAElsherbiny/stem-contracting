import { projects } from "./siteData";

// Projects and slider photos added on the Admin page live in this browser only (see Admin copy).
const PROJECTS_KEY = "stem.projects";
const SLIDER_KEY = "stem.slider";

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  } catch {
    return [];
  }
};
const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false; // quota exceeded or storage blocked
  }
};

export const getAddedProjects = () => read(PROJECTS_KEY);
export const getAllProjects = () => [...getAddedProjects(), ...projects];
export const addProject = (p) => write(PROJECTS_KEY, [p, ...getAddedProjects()]);
export const getSliderPhotos = () => read(SLIDER_KEY);
export const saveSliderPhotos = (photos) => write(SLIDER_KEY, photos);

export const readFiles = (files, max) =>
  Promise.all(
    files.slice(0, max).map(
      (f) => new Promise((resolve) => {
        const r = new FileReader();
        r.onload = () => resolve(r.result);
        r.readAsDataURL(f);
      })
    )
  );
