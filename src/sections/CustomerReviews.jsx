import { reviews } from "../constants/index";
import starIcon from "../assets/icons/star.svg";
const CustomerReviews = () => {
  return (
    <section className="max-container ">
      {/* Upper */}

      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          What Our <span className="text-coral-red">Customer</span> Say?
        </h1>
        <p className="text-slate-gray lg:w-5/12 mx-auto mt-4 mb-14 text-xl">
          Hear geneuine stories from our customer about their exceptional
          experiences with us.
        </p>
      </div>

      {/* Lower */}

      <div className="flex max-sm:flex-wrap gap-8 items-center justify-center ">
        {reviews.map((review) => {
          return (
            <div className="shadow-xl w-full max-w-96 p-4 ">
              <img
                src={review.imgURL}
                alt="customer image"
                className="rounded-full w-full max-w-28 m-auto"
              />
              <p className="my-4 text-slate-gray">{review.feedback}</p>
              <p className="flex gap-2 my-4">
                <img src={starIcon} alt="customer rating" /> ({review.rating})
              </p>
              <p className="font-bold text-xl">{review.customerName}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
