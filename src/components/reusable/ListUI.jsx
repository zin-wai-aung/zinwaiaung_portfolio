import React from 'react'
import { BsXDiamondFill } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


const ListUI = ({listDetail,isTimeline}) => {
  return (
    <li className="flex items-start space-x-2">
      <span
        className={`mt-2`}
      >
        {isTimeline ? <BsXDiamondFill className=" text-Darksecondary-muted text-[.7rem]" /> : <IoCheckmarkDoneSharp className=" text-primary" />}
      </span>
      <p>{listDetail}</p>
    </li>
  );
}

export default ListUI