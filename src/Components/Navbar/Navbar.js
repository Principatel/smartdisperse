"use-client";
import React from "react";
import Image from "next/image";
import logoimg from "../../Assets/logo.png";
import navStyle from "../Navbar/navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <div className={navStyle.mainnavbardiv}>
        <div className={navStyle.logodivnavbar}>
          <Image className={navStyle.logonavbar} src={logoimg} alt="" />
        </div>
        <div className={navStyle.connectbuttondivnavbar}>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}