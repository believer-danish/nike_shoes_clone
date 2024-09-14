import Offer from "../assets/images/offer.svg";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
const SpecialOffer = () => {
  return (
    <section className="max-container flex flex-col lg:flex-row gap-8">
      {/* left section  */}
      <div className="w-full">
        <img src={Offer} alt="offer image" className="h-full " />
      </div>

      {/* Right Section */}
      <div className="w-full">
        <h1 className="text-4xl my-8">
          <span className="text-coral-red"> Special</span> Offers
        </h1>

        <p className="text-slate-gray py-4">
          Embark on a shopping journery that redifines your experience with
          unbeatable deals.From premium selectin to incredible savings we offer
          unparalleled value that set us apart.
        </p>
        <p className="text-slate-gray pb-8">
          Navigate the realm of possibilities designed to fulfill your unique
          desires surpassing the loftiest expectations.Your journery with us is
          nothing short of exceptional.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#products">
            <Button label="Shop Now" image={arrowRight} />
          </a>
          <a href="#about-us">
            <Button
              label="Learn More"
              color={"text-slate-gray"}
              borderColor={"border-slate-gray"}
              bgColor={"bg-white"}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
