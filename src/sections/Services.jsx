import { services as customerServices } from "../constants/index";

const Services = () => {
  return (
    <section className="flex flex-wrap gap-8 justify-center items-center ">
      {customerServices.map((ele, indx) => {
        return (
          <div key={indx} className=" w-full lg:max-w-80 p-8 shadow-2xl dark:shadow-[2px_2px_4px_0px_gray]">
            <img
              src={ele.imgURL}
              alt="service image"
              className="bg-coral-red rounded-full p-3"
            />
            <h2 className="font-bold text-xl py-4">{ele.label}</h2>
            <p className="text-slate-gray">{ele.subtext}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Services;
