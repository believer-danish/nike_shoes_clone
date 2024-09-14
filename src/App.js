import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import { useState } from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  CustomerReviews,
  Subscribe,
  Footer,
  SpecialOffer,
} from "./sections/index.js";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main
      className={`relative font-palanquin text-lg dark:bg-black dark:text-white ${
        darkMode && "dark"
      }`}
    >
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <section id="home" className="padding-b wide:padding-r xl:padding-1">
        <Hero />
      </section>
      <section id="products" className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10f">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue dark:bg-black">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      -
      <section className="bg-black padding-x padding-t pb-8/">
        <Footer />
      </section>
    </main>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
