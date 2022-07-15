import { useContext } from "react";
import { createPortal } from "react-dom";
import MobileMenuModal from "./components/MobileMenuModal";
import { context } from "./context/ContextProvider";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Biography from "./components/Biography";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Blog from "./components/Blog";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  const { isShowing } = useContext(context);
  return (
    <>
      <Navigation />
      <Hero />
      <Biography />

      <div className="container mx-auto md:p-2 md:max-w-7xl">
        {isShowing &&
          createPortal(
            <MobileMenuModal />,
            document.querySelector("#root-modal")
          )}
      </div>
      <Work />
      <Services />
      <Projects />
      <Blog />
      <ContactMe />
     <Footer/>
    </>
  );
}
export default App;
