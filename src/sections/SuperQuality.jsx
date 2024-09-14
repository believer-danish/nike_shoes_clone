import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.svg";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex flex-col md:flex-row  items-center gap-6"
    >
      {/* left section */}
      <div className="w-full">
        <h1 className="text-4xl my-8">
          We Provide <span className="text-coral-red"> Super Quality</span>{" "}
          Shoes
        </h1>

        <p className="text-slate-gray py-4">
          Ensuring premium quality comfort and style, our meticulously crafted
          footwear is designed to elevate your experience, providing you with
          unmatched quality,innovation and a touch of elegance.
        </p>
        <p className="text-slate-gray pb-8">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <Button label="View Details" />
      </div>

      {/* Right section */}

      <div className="w-full grid place-items-center">
        <img src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
