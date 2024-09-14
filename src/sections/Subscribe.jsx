import Button from "../components/Button.jsx";

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-center flex-col items-center">
      <h1 className="text-4xl my-8">
        Sign Up For <span className="text-coral-red">Updates</span>& Newsletter
      </h1>

      <div className="border border-solid border-gray-500 dark:bg-white rounded-full overflow-hidden flex max-w-xl ">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="outline-none w-full px-8 text-xl dark:text-black"
        />
        <div className="w-max">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
