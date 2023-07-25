import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import AdultsDropDown from "../components/AdultsDropdown";
import KidsDropDown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import ScrollToTop from '../components/ScrollToTop'

import { RoomContext } from "../context/RoomContext";

import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop/>
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        <div className="absolute w-full h-full bg-black/50" />
        <h1 className="text-white z-20 text-center text-3xl lg:text-6xl font-primary capitalize tracking-[1px] lg:tracking-[2px]">
          {name} details
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%]">
            <h2 className="h2 ">{name}</h2>
            <p className="mb-8">{description}</p>
            <img src={imageLg} alt="image" className="mb-8" />
            <div className="mt-12">
              <h3 className="h3 capitalize mb-3">Room facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas eius nisi, animi deleniti incidunt, ullam fugit
                accusamus libero tempore earum itaque recusandae. Molestias,
                dignissimos delectus nam fuga inventore explicabo consequatur?
              </p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((item, index) => {
                  const { name, icon } = item;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-x-3 flex-1"
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="w-full h-full lg:w-[40%] mb-12 lg:pl-4">
            <div className="py-8 px-4 bg-accent/20">
              <div className="flex flex-col gap-y-4 mb-4">
                <h3 className="h3">Your reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropDown />
                </div>
                <div className="h-[60px]">
                  <KidsDropDown />
                </div>
                <button className="btn-lg btn-primary btn w-full">
                  book now for ${price}
                </button>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="h3">Hotel rules</h3>
              <p className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis. Dolorum, rerum.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex gap-x-2 items-center">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex gap-x-2 items-center">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex gap-x-2 items-center capitalize">
                  <FaCheck className="text-accent" />
                  No pets
                </li>
                <li className="flex gap-x-2 items-center capitalize">
                  <FaCheck className="text-accent" />
                  No smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
