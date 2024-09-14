import { footerLinks, socialMedia } from "../constants";
import logo from "../assets/images/footer-logo.svg";
const Footer = () => {
  return (
    <section className="max-container text-white">
      <div>
        <img src={logo} alt="logo" width={130} />
        <p className="mt-4 mb-8 lg:w-6/12">
          Get shoes ready for the new team at your nearest Nike store.Find your
          perfect size in store.Get Reward
        </p>

        <div className="flex gap-4">
          {socialMedia.map((ele) => (
            <img
              src={ele.src}
              alt={ele.alt}
              width={55}
              height={55}
              className="bg-white p-4 rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-16">
        {footerLinks.map((ele) => {
          return (
            <div>
              <h1 className="text-xl font-bold my-8">{ele.title}</h1>
              <div>
                {ele.links.map((e) => (
                  <a href={e.link}>
                    <h2 className="py-2 border-b border-solid hover:border-white border-transparent">
                      {e.name}
                    </h2>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-center  p-8 ">©Copyright All Right Reserved.</p>
    </section>
  );
};

export default Footer;
