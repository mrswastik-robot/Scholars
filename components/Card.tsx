
import React from "react";
import Form from "../Pages/form";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className="mb-8 ml-36 ">
        <h1 className="bold-40 lg:bold-64">Events</h1>
      </div>

      <section className="lg:flexCenter flex-row gap-8  ">
        {/* CARD 1 */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700 hover:hover:scale-110">
          <Link href="/Pages/form">
            <img
              className="p-8 rounded-t-lg"
              src="/card1.png"
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link href="/form">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Welcome to Scholars! Click here to register in this
                event/hackathon
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 h-8 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3">
                50+ joined
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/form"
                className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purbg-purple-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2 */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700 hover:hover:scale-110">
          <Link href="/form">
            <img
              className="p-8 rounded-t-lg"
              src="/card2.png"
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link href="/form">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Welcome to Scholars! Click here to register in this
                event/hackathon
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3">
                50+ joined
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/form"
                className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purbg-purple-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 3 */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700 hover:hover:scale-110">
          <Link href="/form">
            <img
              className="p-8 rounded-t-lg"
              src="/card3.png"
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link href="/form">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Welcome to Scholars! Click here to register in this
                event/hackathon
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3">
                50+ joined
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/form"
                className="text-white font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purbg-purple-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 4 */}

        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700 hover:hover:scale-110">
          <Link href="/form">
            <img
              className="p-8 rounded-t-lg"
              src="/card4.png"
              alt="product image"
            />
          </Link>
          <div className="px-5 pb-5">
            <Link href="/form">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Welcome to Scholars! Click here to register in this
                event/hackathon
              </h5>
            </Link>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ml-3">
                50+ joined
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/form"
                className="text-white bg-purple-600 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purbg-purple-500"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

