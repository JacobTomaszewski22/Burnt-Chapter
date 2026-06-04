import "./App.css";
import Header from "./components/header";
import NewReleases from "./components/new-releases";
import About from "./components/about";
import ImgCarousel from "./components/img-carousel";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Tickets from "./components/tickets";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <NewReleases />

      <section className="relative isolate w-full overflow-hidden">
        <img
          id="about-bg"
          src="/images/about-bg.webp"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
        />

        <div className="relative z-10 flex flex-col items-center gap-10 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:justify-center lg:gap-20">
          <ImgCarousel />
          <div className="flex w-full min-w-0 flex-col lg:max-w-3xl">
            <About />
            <Contact />
          </div>
        </div>
      </section>

      <Tickets />
      <Footer />
    </div>
  );
}

export default App;
