import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return <section   className="mt-2 bg-green-50 rounded-lg p-10">
        <div className="flex justify-between items-center rounded-md">
            <div className="ml-52 -mt-10">
                {/* <Image src={"/assets/banner_text.png"} alt="" width={600} height={600} /> */}
                <h1 className="text-6xl text-green-800 font-bold">Your Grocery delivery at <br /> wrap speed</h1>
                <p className="mt-5 text-gray-500">Get your groceries delivered in a flash with lighting fast delivery service. <br /> Say goodbye to long grocery lines and hello to more time for the things you love</p>
                {/* <button className="mt-4 rounded-md bg-orange-600 px-5 py-2 text-white">Shop Now</button> */}
                <div className="flex items-center mt-5">
                    <Image src={"/assets/android.png"} alt="android" width={120} height={120} />
                    <Image className="ml-3" src={"/assets/ios.png"} alt="ios" width={120} height={120} />
                </div>
            </div>
            <Image src={"/assets/lead.png"} alt="app" width={700} height={700}   />
        </div>
    </section>
}

export default HeroSection