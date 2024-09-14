import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { statistics, shoes } from "../constants/index.js";
import rightArrow from "./../assets/icons/arrow-right.svg";
import bigShoe1 from "../assets/images/big-shoe1.png";
import { useState } from "react";

const Hero = () => {
  const [shoe, setShoe] = useState(bigShoe1);
  return (
    <section className="  min-h-screen flex flex-col lg:flex-row items-center justify-center  max-container">
      {/* Left section */}
      <div className="  pl-16 font-montserrat flex  flex-col justify-center  pt-36 ">
        <p className="text-coral-red text-xl py-4">Our Summer Collection</p>

        <h1 className="text-4xl md:text-[70px] xl:text-8xl font-bold font-palanquin leading-normal">
          <span className=" inline-block lg:absolute lg:bg-white  dark:lg:bg-black">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>

        <p className="text-slate-gray text-xl w-9/12 py-10 ">
          Discover stylish Nike arrivals, quality,comfort and innovation for
          your active life
        </p>

        <Button label="Shop Now" image={rightArrow} />

        <div className="flex gap-6 flex-wrap   font-palanquin py-6 ">
          {statistics.map((stat, indx) => (
            <div key={stat.label}>
              <h1 className=" text-4xl font-bold">{stat.value}</h1>
              <span className="text-slate-gray"> {stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-hero w-full py-4 lg:min-h-screen flex flex-col items-center justify-center ">
        <img src={shoe} alt="Shoe" className="mt-16" />

        <div className=" flex  gap-4 md:mt-16 mt-8">
          {shoes.map((ele, index) => (
            <ShoeCard
              key={index}
              thumbnail={ele.thumbnail}
              bigShoe={ele.bigShoe}
              currShoe={shoe}
              setShoe={setShoe}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
