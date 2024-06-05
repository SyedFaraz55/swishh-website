import Image from "next/image";
import React from "react";

const Header = () => {
    return <div className="flex justify-between items-center bg-white p-4 rounded-md">
        <Image src={"/assets/logo.png"} alt="logo" width={100} height={100} />

        <nav className="flex text-center items-center">
            <div className="flex items-center">
            <Image src={"/assets/bolt-svgrepo-com.svg"} width={20} height={20} alt="" />
            <p className="ml-2 mr-3">Order now and get it in 15 mint! </p>
            </div>
        </nav>
    </div>
}

export default Header