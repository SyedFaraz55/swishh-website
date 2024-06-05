import Image from "next/image";
import React from "react";

const About = () => {
    return <section style={{background:"#FFFDF4"}}  className="flex items-center justify-around p-10 bg-white  rounded-lg">
         <div>
            <Image src={"/assets/basket.png"} style={{mixBlendMode:"multiply"}} alt="" width={600} height={600} />
        </div>
       <div>
        <h1 className="text-5xl leading-tight text-green-800 font-bold">We Always Provide <br />You The Best In Town</h1>
        {/* <Image alt="" src={"/assets/aboutText.png"} width={500} height={500} /> */}
        <ul className="mt-2 ml-2">
            <li className="text-gray-500 text-lg"><span className="text-green-800 font-medium">500+</span> Products</li>
            <li className="text-gray-500 text-lg"><span className="text-green-800 font-medium">1k+</span> Regular Customers</li>
            <li className="text-gray-500 text-lg"><span className="text-green-800 font-medium">50+</span> Young Riders</li>
        </ul>
        <button className="bg-green-800 text-white px-6 py-3 mt-4 rounded-md">Partner with Us</button>
        </div> 
       
    </section>
}

export default About