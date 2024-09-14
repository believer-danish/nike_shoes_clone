const ShoeCard = ({ thumbnail, bigShoe, currShoe,setShoe }) => {
  
    const clickHandler = () => {
        setShoe(bigShoe);

  };
  
  return (
    <div
      onClick={clickHandler}
      className={`w-20 md:w-52 aspect-square grid place-items-center bg-card rounded-tl-[50px] border-2 border-solid
         ${currShoe === bigShoe ? "border-coral-red" : ""} cursor-pointer`}
    >
      <img src={thumbnail} alt="Shoe" />
    </div>
  );
};

export default ShoeCard;
