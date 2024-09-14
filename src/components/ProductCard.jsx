import { star } from "../assets/icons";
import starIcon from "../assets/icons/star.svg";

const ProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className=" mt-8 cursor-pointer hover:scale-110 transition linear delay-100  shadow-xl  dark:shadow-[2px_2px_4px_0px_gray] pb-6">
      <div className="bg-card  grid place-items-center  ">
        <img src={imgURL} alt={name} className="aspect-square " />
      </div>

      <div className="mt-4 pl-8">
        <p className="flex gap-2">
          <img src={starIcon} alt="" />({rating})
        </p>
        <h2 className="font-bold text-xl my-4">{name}</h2>
        <p className="text-coral-red">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
