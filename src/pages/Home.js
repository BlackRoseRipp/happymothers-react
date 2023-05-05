import { Fragment } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { FaBox, FaClipboardList, FaDollarSign, FaUsers } from "react-icons/fa";

const Home = () => {
  return (
    <Fragment>
      <section className="banner">
        <div className="bg-green grid lg:grid-cols-2">
          <div className="px-16 lg:py-32 py-16 flex items-center justify-start">
            <div className="flex flex-col items-start justify-center xl:w-5/6 w-full">
              <h1 className="heading text-white font-semibold text-5xl my-4">
                Postnatal Care Begins Here
              </h1>
              <h3 className="heading text-white font-medium text-4xl my-4">
                Feeling rested, rejuvenated and re-energized at our facility
              </h3>
              <a
                href="#"
                className="btn-primary text-white bg-transparent border-2 border-amber hover:bg-amber font-medium text-xl mt-8"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="bg-cover bg-center bg-no-repeat lg:block hidden"></div>
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
        <div className="grid lg:grid-cols-2 gap-8">
          <div></div>
          <div className="flex flex-col lg:items-start items-center justify-center">
            <div className="border-amber border w-16 my-4"></div>
            <h2 className="heading text-5xl font-semibold text-green mb-4">
              About Us
            </h2>
            <p className="max-w-md text-lg font-medium mb-4">
              The Shalvah is a modern hotel dedicated to offering relaxation and
              refuge. Our staff and facilities are centered on meeting your
              needs by providing you with amenities fit for the most demanding
              guest. Our goal is to make you feel like you are part of our
              family. Enjoy and relax in the comfort of our home away from your
              home.
            </p>
            <a
              href="#contact"
              className="btn-primary border-2 border-green text-green hover:text-white hover:bg-amber hover:border-amber mt-4 font-medium text-lg"
            >
              Find Out More
            </a>
          </div>
        </div>
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
