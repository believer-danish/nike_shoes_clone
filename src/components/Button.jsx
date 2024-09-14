const Button = ({ label, image, color, borderColor, bgColor }) => {
  console.log(bgColor);
  return (
    <button
      className={`${bgColor ? bgColor : "bg-coral-red"} rounded-full
    p-4 text-xl flex gap-4 w-max ${color ? color : "text-white"} 
    border-2 border-solid ${borderColor?borderColor:""}`}
    >
      {label}
      {image && <img src={image} alt="button-image" />}
    </button>
  );
};

export default Button;
