import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconEmpty } from "@heroicons/react/24/outline";
import Jennie from "../images/image-jennie.jpg";
import Thomas from "../images/image-thomas.jpg";
import Emily from "../images/image-emily.jpg";

const Testimonials = () => {
  return (
    <div className="w-full flex items-center flex-col py-4 gap-8 bg-[hsl(210,36%,96%)] text-[hsl(217,19%,35%)]">
      <h1 className="font-Fraunces font-bold text-center text-2xl uppercase text-neutral-darkGrayishBlue tracking-widest">
        Client Testimonials
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full  sm:gap-4 lg:gap-8">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Emily} alt="" />
          </div>
          <div className=" text-neutral-veryDarkGrayishBlue text-center">
            "Absolutely love the quality of the products! Fast shipping and
            great customer service."
          </div>
          <div className="p-2 flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIconEmpty className="w-5 h-5" />
          </div>
          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Emily R.</p>
            <p className="text-neutral-darkGrayishBlue font-bold ">Customer</p>
          </div>
        </div>

        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full p-4 sm:gap-4 lg:gap-8">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Thomas} alt="" />
          </div>

          <div className=" text-neutral-veryDarkGrayishBlue text-center">
            "Selling on Nexus Nook has been amazing! The platform is easy to
            use, and customer support is top-notch."
          </div>
          <div className="p-2 flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Thomas S.</p>
            <p className="text-neutral-darkGrayishBlue font-bold ">Seller</p>
          </div>
        </div>

        {/* Grid Item */}
        <div className="flex flex-col items-center justify-center w-full p-4 sm:gap-4 lg:gap-8">
          <div className="overflow-hidden rounded-full w-16">
            <img className="w-16 object-cover" src={Jennie} alt="" />
          </div>

          <div className=" text-neutral-veryDarkGrayishBlue text-center">
            "Nexus Nook never disappoints! The deals are unbeatable, and the
            checkout process is smooth."
          </div>
          <div className="p-2 flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <StarIcon className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="text-center">
            <p className="font-Fraunces font-bold text-lg">Jennie F.</p>
            <p className="text-neutral-darkGrayishBlue font-bold ">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
