import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaBox, FaClipboardList, FaDollarSign, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <Fragment>
      <section className="banner">
        <div className="bg-blue-primary grid lg:grid-cols-2">
          <div className="px-16 lg:py-48 py-16 flex items-center justify-end">
            <div className="flex flex-col items-start justify-center xl:w-3/4 w-full">
              <h1 className="heading text-white font-semibold text-6xl my-4">
                Qpharmacy
              </h1>
              <h3 className="heading text-white font-medium text-4xl my-4">
                Marketing and management support to help your independent
                pharmacy thrive
              </h3>
              <h5 className="text-white text-xl my-4">
                Set your pharmacy up for success with Qpharmacy’s
                behind-the-scenes support
              </h5>
            </div>
          </div>
          <div className="bg-[url(../public/img/inventory-two-druggists-lab-coat.jpg)] bg-cover bg-center bg-no-repeat lg:block hidden"></div>
          <div className="lg:hidden block container mx-auto">
            <img
              className="w-full rounded-xl mx-2 mb-6"
              src="/img/inventory-two-druggists-lab-coat.jpg"
              alt="Pharmacy Needs"
            />
          </div>
        </div>
      </section>
      <section className="py-32 container mx-auto">
        <h2 className="text-5xl heading text-center font-semibold text-blue-primary my-3">
          Meet Qpharmacy
        </h2>
        <h4 className="text-3xl text-center text-blue-primary my-3">
          Marketing and management support for small to medium independent
          pharmacies
        </h4>
        <div className="my-12 w-full lg:w-1/2 lg:mx-auto mx-4">
          <img
            className="rounded-xl w-full"
            src="/img/pexels-fauxels-3184292.jpg"
            alt="Marketing Discussion"
          />
        </div>
        <h5 className="text-xl text-center my-3">
          You take care of the scripts and leave the marketing to us
        </h5>
      </section>
      <section className="py-32 bg-slate-100">
        <h2 className="heading text-5xl text-blue-primary font-semibold text-center my-16">
          How We Help Small To Medium Pharmacies
        </h2>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div className="p-12 rounded-xl bg-white flex flex-col items-start shadow-md hover:shadow-xl transition-all">
              <FaUsers className="text-blue-secondary text-6xl mb-2" />
              <h3 className="text-2xl text-blue-secondary">Marketing</h3>
              <p className="text-blue-light mt-8">
                Stay top of mind for your customers by getting the help you need
                on branding, website building, promotional swag and social
                media.
              </p>
            </div>
            <div className="p-12 rounded-xl bg-white flex flex-col items-start shadow-md hover:shadow-xl transition-all">
              <FaClipboardList className="text-blue-secondary text-6xl mb-2" />
              <h3 className="text-2xl text-blue-secondary">Management</h3>
              <p className="text-blue-light mt-8">
                We help you manage inventory so that you can fill scripts on
                time, every time. We also help you lower costs by minimizing
                overstock.
              </p>
            </div>
            <div className="p-12 rounded-xl bg-white flex flex-col items-start shadow-md hover:shadow-xl transition-all">
              <FaDollarSign className="text-blue-secondary text-6xl mb-2" />
              <h3 className="text-2xl text-blue-secondary">Purchasing</h3>
              <p className="text-blue-light mt-8">
                Access better buying power by joining our network of small to
                medium size pharmacies.
              </p>
            </div>
            <div className="p-12 rounded-xl bg-white flex flex-col items-start shadow-md hover:shadow-xl transition-all">
              <FaBox className="text-blue-secondary text-6xl mb-2" />
              <h3 className="text-2xl text-blue-secondary">Delivery</h3>
              <p className="text-blue-light mt-8">
                We make delivering scripts to your customers easy and
                affordable, helping you stay competitive in your area.
              </p>
            </div>
          </div>
          <h3 className="text-4xl font-medium text-center text-blue-primary mt-24 mb-16">
            We provide pharmacy owners with peace of mind
          </h3>
          <div className="bg-white shadow-md hover:shadow-xl transition-all border-2 border-blue-primary rounded-xl p-8 lg:max-w-4xl max-w-lg mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">Branding</h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Social media support
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Website building and management
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Print collateral
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Promotional swag
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Streamline operations
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Inventory tracking
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all w-fit">
                <BsCheck2Circle className="text-blue-secondary text-2xl mt-0.5" />
                <h5 className="text-blue-secondary ml-2 text-lg w-fit">
                  Discounted inventory purchasing
                </h5>
              </div>
              <div className="flex items-start justify-start hover:-translate-y-1 transition-all">
                <BsCheck2Circle className="text-blue-secondary text-2xl mr-2 mt-0.5" />
                <h5 className="text-blue-secondary text-lg">
                  Prescription delivery
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
