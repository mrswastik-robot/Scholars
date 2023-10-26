
import React from "react";
import Form from "../Pages/form";
import Link from "next/link";

type Event = {
    event_name: string;
    id: string;
    event_image: string;
    // Add other event details as needed
  };
  
  type Props = {
    event: Event; // Define the prop type for the event
    // Add other event details as needed
  };
  

const Card = (props: Props) => {

    const { event } = props; // Destructure the event object from props

  return (
    <>
      <div className="mb-8 ml-36" id="cards" data-aos="fade-up">
        <h1 className="bold-40 lg:bold-64" data-aos="fade-up">Events</h1>
      </div>


      <section className="lg:flexCenter flex-row gap-8 mt-9 " data-aos="fade-right">
        {/* CARD 1 */}

      <Link href={`/event/${event.id}`}>
        <div  className="hover:scale-110 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-700" >
          <div>
            <img
              className=" rounded-t-lg"
              // src="/card1.png"
              src={event.event_image}
              alt="product image"
            />
          </div>
          <div className="px-5 py-5">
            
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {event.event_name}
              </h5>
            <div className="flex items-center mt-2.5 mb-5">
              <span className="bg-blue-100 text-purbg-purple-500 text-xs font-semibold mr-2 px-2.5 py-2 h-8 rounded dark:bg-blue-200 dark:text-purbg-purple-500 ">
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
        </Link>
        
      </section>
    </>
  );
};

export default Card;

