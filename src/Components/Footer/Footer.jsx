import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import Instagram from "../../Assets/Icons/instagram.png";
import Whatsapp from "../../Assets/Icons/whatsapp.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center mt-4 text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left w-[100%]">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get Connected Our Social Networks:</span>
        </div>

        <div className="flex justify-center">
          <Link
            href="https://wa.me/917034472627"
            className="mr-6 text-neutral-600 dark:text-neutral-200 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
          >
            <Image src={Whatsapp} alt="whatsapp" width={30} height={30} />
          </Link>
          <Link
            href="https://www.instagram.com/anshxpress/?igshid=NGExMmI2YTkyZg%3D%3D"
            className="mr-6 text-neutral-600 dark:text-neutral-200 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
          >
            <Image src={Instagram} alt="facebook" width={30} height={30} />
          </Link>
          <Link
            href="https://www.instagram.com/atheedh17/?igshid=NTc4MTIwNjQ2YQ%3D%3D"
            className="mr-6 text-neutral-600 dark:text-neutral-200 color-b bg-white p-2 md:p-3 text-center rounded-md duration-300 transform  shadow-sm hover:-translate-y-1.5 border-t border-slate-100 hover:bg-red-10 hover:text-red-500"
          >
            <Image src={Instagram} alt="instagram" width={30} height={30} />
          </Link>
        </div>
      </div>

      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            <Link
              href="https://goo.gl/maps/mhhLyML9pJLkbh7z9"
              className="mb-4 flex items-center justify-center gap-4  color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
            >
              <FaMapMarkerAlt className="text-[1.9rem]" />
              Kempapura Main Rd, Hebbal Kempapura, Bengaluru, Karnataka 560024
            </Link>
            <Link
              href="mail:vintagecardealers.com"
              className="mb-4 flex items-center justify-center md:justify-start gap-4 color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
            >
              <FaRegEnvelope className="text-[1.9rem]" />
              vintagecardealers@gmail.com
            </Link>
            <Link
              href="https://wa.me/+919335895614"
              className="mb-4 flex items-center justify-center md:justify-start gap-4 color-b  rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
            >
              <FaWhatsappSquare className="text-[1.9rem]" />
              +919335895614
            </Link>
            <Link
              href="tel:+917034472627"
              className="mb-4 flex items-center justify-center md:justify-start gap-4 color-b rounded-md duration-300 transform hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500"
            >
              <FaPhoneAlt className="text-[1.9rem]" />
              +917034472627
            </Link>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Importent Links
            </h6>
            <li className="mb-4 color-b  rounded-md duration-300 transform   hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="/contact"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Contact
              </Link>
            </li>
            <li className="mb-4 color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <a
                href="/about"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                About
              </a>
            </li>
            <li className="mb-4 color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="/products"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Products
              </Link>
            </li>
            <li className="color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="/services"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Service
              </Link>
            </li>
          </div>

          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Latest Cars
            </h6>
            <li className="mb-4 color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Mercedes-Maybach S-Class
              </Link>
            </li>
            <li className="mb-4 color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Tata Punch
              </Link>
            </li>
            <li className="mb-4 color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Nissan Magnite
              </Link>
            </li>
            <li className="color-b  rounded-md duration-300 transform  hover:-translate-y-1.5  hover:bg-red-10 hover:text-red-500">
              <Link
                href="#!"
                className="text-neutral-600 dark:text-neutral-200 hover:text-red-500"
              >
                Kia Sonet
              </Link>
            </li>
          </div>
        </div>
      </div>

      <div className="h-[20rem]">
        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          Our Location
        </h6>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Kempapura Main Rd, Hebbal Kempapura, Bengaluru, Karnataka 560024&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-600 border-t-2 border-[hsla(216,8%,88%,.15)] py-2 mt-10">
        <div className="px-2  sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
          <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4 xxs:grid-cols-1 py-1">
            <div className="sm:text-start   xxs:text-center">
              <ul className=" list-none sm:flex xs:block sm:float-left  xxs:text-center ">
                <li className="mb-1 after:inline-flex after:ml-1 after:mr-1 text-white">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-red-10 text-white text-base font-normal duration-300 hover:text-red-500 "
                  >
                    Privacy Policy |
                  </Link>
                </li>
                <li className="mb-1 after:inline-flex after:mr-1 text-white">
                  <Link
                    href="/legal"
                    className="hover:text-red-10 text-white text-base font-normal duration-300 hover:text-red-500"
                  >
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:text-right  xxs:text-center">
              <ul className="list-none sm:flex xxs:block sm:float-right xxs:text-center">
                <li className="mb-1 after:inline-flex  after:mr-1  text-white ">
                  <Link
                    href="/term-&-condition"
                    className="hover:text-red-10 text-white text-base font-normal  duration-300 hover:text-red-500"
                  >
                    Terms & Conditins |
                  </Link>
                </li>
                <li className="mb-1 after:inline-flex after:mr-1 text-white">
                  <Link
                    href="/services"
                    className="hover:text-red-10 text-white text-base font-normal duration-300 hover:text-red-500"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <Link
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          href="/"
        >
          Vintage Car Dealers
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
