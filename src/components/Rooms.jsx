import React, { useContext } from "react";

import { SpinnerDotted } from "spinners-react";

import { RoomContext } from "../context/RoomContext";

import Room from "../components/Room";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <section id="rooms" className="py-24">
      {loading && (
        <div className="h-screen w-full fixed top-0 bottom-0 bg-black/80 z-50 flex items-center justify-center">
          <SpinnerDotted color="white" />
        </div>
      )}
      <div className="container mx-auto lg:px-0">
        <div className="text-center">
          <div className="font-tertiary uppercase text-xs lg:text-[15px] tracking-[3px] lg:tracking-[6px]">Hotel & Spa Adina</div>
          <h2 className="font-primary text-3xl lg:text-[45px] mb-4">Room & Suites</h2>
        </div>

        <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
