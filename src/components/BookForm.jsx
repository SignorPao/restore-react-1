import React, { useContext } from "react";

import CheckIn from "./CheckIn";
import CheckOut from "./CheckOut";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";

import { RoomContext } from "../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col gap-y-4 lg:gap-y-0 h-full w-full lg:flex-row">
        <div className="flex-1 border-r">
          <CheckIn />
        </div>
        <div className="flex-1 border-r">
          <CheckOut />
        </div>
        <div className="flex-1 border-r">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border-r">
          <KidsDropdown />
        </div>

        <button
          type="submit"
          className="btn btn-primary flex-1"
          onClick={(e) => handleClick(e)}
        >
          Check now
        </button>
      </div>
    </form>
  );
};

export default BookForm;
