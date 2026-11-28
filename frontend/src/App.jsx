import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ServicesPage from "./pages/Services/ServicesPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetail/ProjectDetailPage";
import ContactPage from "./pages/Contact/ContactPage";
import AdminPage from "./pages/Admin/AdminPage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/quote" element={<PlaceholderPage title="Request a quote" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" notFound />} />
      </Route>
    </Routes>
  );
}
