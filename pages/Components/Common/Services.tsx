import BusTracking from '../Svgs/BusTracking';
import ComfortableSeats from '../Svgs/ComfortableSeats';
import ProfessionalDrivers from '../Svgs/ProfessionalDrivers';
import SafetyAlways from '../Svgs/SafetyAlways';
import SmartBooking from '../Svgs/SmartBooking';
import SmartRouting from '../Svgs/SmartRouting';

const Services = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className=" text-5xl mb-5 text-[#0F1A37] font-semibold">
          The{' '}
          <span className="underline decoration-underlinecolor">Old Way</span>
        </h1>
        <div className="grid grid-cols-1 grid-rows-4 mt-10 align-middle md:grid-cols-2 md:grid-rows-2 justify-items-center md:px-20 gap-y-12 ">
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="mb-6 text-2xl font-bold text-black lg:text-4xl">
              1. Time consuming
            </h2>
            <p className="text-xl font-thin lg:text-2xl">
              The struggle for a seat and long wait time at bus stops is a
              hassle.
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="mb-6 text-2xl font-bold text-black lg:text-4xl">
              2. Poor Safety
            </h2>
            <p className="text-xl font-thin lg:text-2xl">
              Old and rusty buses that do not guarantee safe rides. and
              uncomfortable seats that put stress on your back.
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="mb-6 text-2xl font-bold text-black lg:text-4xl">
              3. No Tracking
            </h2>
            <p className="text-xl font-thin lg:text-2xl">
              Not knowing the location of the bus means so much uncertainty and
              no reliability.
            </p>
          </div>
          <div className="flex flex-col w-[80%] lg:w-[60%] ">
            <h2 className="mb-6 text-2xl font-bold text-black lg:text-4xl">
              4. Unprofessional Drivers
            </h2>
            <p className="text-xl font-thin lg:text-2xl">
              Rude drivers who do ot have the wellbeing of riders at heart.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-32">
        <h1 className=" text-4xl md:text-5xl mb-5 text-[#0F1A37] font-semibold">
          The{' '}
          <span className="underline decoration-underlinecolor">
            Trober Way
          </span>
        </h1>
        <div className="p-5 md:m-10 gap-x-2 md:gap-0">
          <div className="grid items-start grid-cols-1 gap-5 mb-5 grid-row-6 md:grid-row-3 md:grid-cols-3 justify-evenly">
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <SmartBooking />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Smart Booking
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Save a seat seamlessly at the click of a few buttons . No hassle
                at all.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <BusTracking />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Bus Tracking
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Track in real time the location of the bus for timely pickups.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <ComfortableSeats />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Comfortable Seats
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Relax and enjoy your bus ride on a comfortable seat that
                cushions your back.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <ProfessionalDrivers />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Professional Drivers
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Rate our drivers. They maintain a high level of respect and
                politeness.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <SmartRouting />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Smart Routing
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                Reduce travel time with routes that are optimized with data.
              </p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
              <div className="flex items-center justify-center ">
                <SafetyAlways />
              </div>
              <h1 className="flex items-center justify-start col-span-2 text-lg font-bold">
                Safety Always
              </h1>
              <p className="col-span-2 col-start-2 justify-self-start ">
                We work with our partners to ensure safety for our riders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
