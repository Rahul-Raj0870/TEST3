import React, { useState } from "react";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp } from "react-icons/io5";



const Sidebar = () => {
  const [show, setShow] = useState(false);

  

  return (
    <>
      <nav style={{ display: "flex" }}
      className={show ? "show sidebar" : "sidebar"}>
        <div className="links">
          <TiHome />
          <FaUserDoctor  />
          <MdAddModerator  />
          <IoPersonAddSharp  />
          <AiFillMessage  />
          <RiLogoutBoxFill />
        </div>
      </nav>
      <div
        className="wrapper"
        
      >
        <GiHamburgerMenu className="hamburger" />
      </div>
    </>
  );
};

export default Sidebar;
