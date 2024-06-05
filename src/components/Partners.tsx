import Image from "next/image";
import React from "react";

const Partners = () => {
    return <section className="flex items-center justify-around p-5 bg-white mt-10  rounded-lg">
        <div>
            <h1 className="text-5xl leading-tight text-green-800 font-bold">Stay Home & Get All <br /> Your Essentials From Market.</h1>
            <div className="flex items-center mt-5">
                    <Image src={"/assets/android.png"} alt="android" width={120} height={120} />
                    <Image className="ml-3" src={"/assets/ios.png"} alt="ios" width={120} height={120} />
                </div>
        </div>
        <div>
            <Image src={"/assets/delivery_boy.png"} style={{ mixBlendMode: "multiply" }} alt="" width={500} height={500} />
        </div>
    </section>
}

export default Partners



// const Partners = () => {
//     return <section   className="flex items-center justify-around p-5 bg-white mt-10  rounded-lg">
//         <h1 className="text-5xl leading-tight text-green-800 font-bold">Stay Home & Get All <br/> Your Essentials From Market.</h1>
//          <div>
//             <Image src={"/assets/delivery_boy.png"} style={{mixBlendMode:"multiply"}} alt="" width={500} height={500} />
//         </div>
//     </section>
// }
