import React, { useContext } from "react";

import { RoomContext } from "../context/RoomContext";

import Room from '../components/Room'

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms);
  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0">
        <div>
          {rooms.map((room) => {
            console.log(room);
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
