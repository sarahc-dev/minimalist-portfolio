import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/GlobalHeader";
import Footer from "./components/GlobalFooter";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio">
          <Route index element={<Portfolio />} />
          <Route path=":project" element={<Project />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
