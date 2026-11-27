import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Home/HomePage";
import PlaceholderPage from "./pages/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<PlaceholderPage title="Services" />} />
        <Route path="/projects" element={<PlaceholderPage title="Projects" />} />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
        <Route path="/admin" element={<PlaceholderPage title="Admin" />} />
        <Route path="/quote" element={<PlaceholderPage title="Request a quote" />} />
        <Route path="*" element={<PlaceholderPage title="Page not found" notFound />} />
      </Route>
    </Routes>
  );
}
