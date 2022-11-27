import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const Advertise = () => {
    const [bookingData, setBookingData] = useState({});

    const { data: advertised = [] } = useQuery({
        queryKey: ['advertise'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/advertise`,
            );
            const data = res.json();
            return data;
        },
    });

    const handleAdsData = (e) => {
        setBookingData(e);
    };
    console.log(advertised);

    return (
        <div>
            <div className="py-7 text-center font-bold text-4xl uppercase">
                <p>second hand product category</p>
                <hr className="mt-1 border-2" />
            </div>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                {advertised?.map((advertise) => (
                    <>
                        <img
                            className="h-56 w-56 aspect-video rounded-sm object-cover object-center bg-gray-500"
                            src={advertise.productImage}
                            alt=""
                        />
                        <div className="pr-3 leading-8">
                            <h1 className="text-2xl font-semibold">
                                {advertise.category}
                            </h1>
                            <h1 className="font-bold">
                                {advertise.productName}
                            </h1>
                            <h1 className="font-semibold">
                                Price: {advertise.price}{' '}
                            </h1>
                            <h1 className="font-semibold">
                                {advertise.location}
                            </h1>
                            <h1 className="font-semibold">{advertise.name}</h1>
                            <h1 className="font-semibold">{advertise.email}</h1>
                            <div>
                                <label
                                    htmlFor="booking-modal"
                                    onClick={handleAdsData(advertise)}
                                    className="btn btn-outline btn-sm">
                                    Book Now
                                </label>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default Advertise;

// // const { default: Advertise } = require("./Pages/Dashboard/Home/Advertise/Advertise");

// category,
// date,
// email,
// location,
// name,
// phone,
// photo,
// price,
// productImage,
// productName,
// purchase,
// purchaseYear,
// quality,
// textarea,
// time,
// useTime

//     const {
//         category,
//         date,
//         email,
//         location,
//         name,
//         phone,
//         photo,
//         price,
//         productImage,
//         productName,
//         purchase,
//         purchaseYear,
//         quality,
//         textarea,
//         time,
//         useTime,
// } = products;

// <div className="mx-auto">
//                 <div className="w-[300px]">
//                     <div class="group relative block bg-black">
//                         <img
//                             alt="Developer"
//                             src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//                             class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
//                         />

//                         <div class="relative p-8 flex justify-center ">
//                             <div class="mt-64">
//                                 <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                                     <p className="text-3xl absolute ml-8 text-white bottom-36 font-bold">
//                                         APPLE
//                                     </p>
//                                     <Link
//                                         class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
//                                         to="">
//                                         <span class="block rounded-full bg-[#002B53] px-8 py-3 text-white text-sm font-medium hover:bg-transparent">
//                                             Shop Now
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mx-auto">
//                 <div className="w-[300px]">
//                     <div class="group relative block bg-black">
//                         <img
//                             alt="Developer"
//                             src="https://i5.walmartimages.com/asr/2a4f564f-7c70-482a-889d-88401a87c20d_1.96b7b278c66081026840c72ed19b7797.jpeg"
//                             class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
//                         />

//                         <div class="relative p-8 flex justify-center ">
//                             <div class="mt-64">
//                                 <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                                     <p className="text-3xl absolute ml-12 text-white bottom-36 font-bold">
//                                         HP
//                                     </p>
//                                     <Link
//                                         class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
//                                         to="">
//                                         <span class="block rounded-full bg-[#002B53] px-8 py-3 text-white text-sm font-medium hover:bg-transparent">
//                                             Shop Now
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mx-auto">
//                 <div className="w-[300px]">
//                     <div class="group relative block bg-black">
//                         <img
//                             alt="Developer"
//                             src="https://cf.shopee.ph/file/3157429345d61db33bae9a963de14926"
//                             class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
//                         />

//                         <div class="relative p-8 flex justify-center ">
//                             <div class="mt-64">
//                                 <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
//                                     <p className="text-3xl absolute ml-10 text-white bottom-36 font-bold">
//                                         DELL
//                                     </p>
//                                     <Link
//                                         class="inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
//                                         to="">
//                                         <span class="block rounded-full bg-[#002B53] px-8 py-3 text-white text-sm font-medium hover:bg-transparent">
//                                             Shop Now
//                                         </span>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

// [
//     {
//         "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//         "category": "Apple"
//     },
//     {
//         "image": "https://i5.walmartimages.com/asr/2a4f564f-7c70-482a-889d-88401a87c20d_1.96b7b278c66081026840c72ed19b7797.jpeg",
//         "category": "HP"
//     },
//     {
//         "image": "https://cf.shopee.ph/file/3157429345d61db33bae9a963de14926",
//         "category": "Dell"
//     },
// ]

// category
// :
// "HP"
// date
// :
// "25/10/2022"
// email
// :
// "elonmusk@gmail.com"
// location
// :
// "Jamalpur"
// name
// :
// "Elon Musk"
// phone
// :
// "01742363045"
// photo
// :
// "https://i.ibb.co/wpb3ryy/player-7.png"
// price
// :
// "62000"
// productImage
// :
// "https://i.ibb.co/ky4Pvbv/hp-2.png"
// productName
// :
// "HP Pavilion"
// purchase
// :
// "83000"
// purchaseYear
// :
// "2020-01-15"
// quality
// :
// "Good"
// textarea
// :
// "HP Pavilion 15-eh1890AU powered by AMD Ryzen 5 5500U (up to 4.0 GHz max boost clock, 8 MB L3 cache, 6 cores, 12 threads) and AMD Radeon Graphics. This Laptop comes with 8 GB DDR4-3200 MHz RAM, 512 GB PCIe NVMe M.2 SSD. This Pavilion laptop designed with 39.6 cm (15.6\") diagonal, FHD (1920 x 1080), IPS, micro-edge, BrightView, 250 nits, 45% NTSC. This Laptop comes with silver color with"
// time
// :
// "4:0"
// useTime
// :
// "2 years"
// _id
// :
// "638092d11963ce60c8028e07"

// // Advertise

// {/* <div className="">
//                 <div className="">
//                     <div className="lg:max-w-[1440px] relative inset-0 md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-12 md:px-6 px-4 lg:py-12 md:py-12 py-5">
//                         <div className="relative">
//                             <img
//                                 src="https://www.freewebheaders.com/wp-content/gallery/computer/note-book-blue-shadow-header.jpg"
//                                 alt=""
//                                 className="w-full object-cover lg:h-[330px] lg:block md:hidden hidden"
//                             />
//                             <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
//                             <img
//                                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sofa.png"
//                                 alt=""
//                                 className="lg:hidden md:block hidden"
//                             />
//                             <img
//                                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%20159.png"
//                                 alt=""
//                                 className="lg:hidden md:hidden block"
//                             />
//                             <div className="absolute mx-auto top-16 left-28 lg:px-7 px-4 py-4">
//                                 <p className="lg:text-4xl md:text-2xl text-2xl font-semibold leading-9 text-white">
//                                     Certified <br /> <span className="text-[yellow]">REFURBISHED LAPTOPS</span> <br /> With Warranty
//                                 </p>
//                                 <p className="text-base cursor-pointer font-bold leading-none text-gray-800 bg-white px-2 py-2 max-w-[142px] mt-3 text-center">
//                                     SHOP NOW
//                                 </p>
//                                 <div className="flex gap-3 pt-4">
//                                     <svg
//                                         className="text-white hover:text-gray-300 cursor-pointer"
//                                         width={20}
//                                         height={20}
//                                         viewBox="0 0 20 20"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             fillRule="evenodd"
//                                             clipRule="evenodd"
//                                             d="M18.75 10.0532C18.75 5.22119 14.832 1.30322 10 1.30322C5.16797 1.30322 1.25 5.22119 1.25 10.0532C1.25 14.4204 4.44922 18.0403 8.63281 18.6974V12.5833H6.41055V10.0532H8.63281V8.12549C8.63281 5.93291 9.93945 4.7208 11.9379 4.7208C12.8953 4.7208 13.8969 4.89189 13.8969 4.89189V7.04541H12.793C11.7066 7.04541 11.3668 7.71963 11.3668 8.4126V10.0532H13.7934L13.4059 12.5833H11.3672V18.6981C15.5508 18.0415 18.75 14.4216 18.75 10.0532Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                     <svg
//                                         className="text-white hover:text-gray-300 cursor-pointer"
//                                         width={20}
//                                         height={20}
//                                         viewBox="0 0 20 20"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             d="M19.375 4.27735C18.6717 4.58296 17.9275 4.7843 17.166 4.87501C17.9663 4.4064 18.5681 3.66195 18.8586 2.78126C18.102 3.22368 17.2756 3.5341 16.4148 3.69923C16.0524 3.31935 15.6165 3.01716 15.1336 2.811C14.6507 2.60484 14.1309 2.49904 13.6059 2.50001C11.4801 2.50001 9.75977 4.19532 9.75977 6.28516C9.75826 6.57585 9.79157 6.86568 9.85898 7.14844C8.33464 7.07698 6.842 6.68813 5.47656 6.00675C4.11111 5.32537 2.90292 4.36648 1.9293 3.19141C1.58772 3.76724 1.40708 4.42424 1.40625 5.09376C1.40625 6.40626 2.09102 7.56641 3.125 8.2461C2.51239 8.23156 1.91234 8.06942 1.37578 7.77344V7.82032C1.37578 9.65626 2.70391 11.1836 4.46172 11.5313C4.13117 11.6194 3.79053 11.664 3.44844 11.6641C3.20569 11.6645 2.9635 11.6409 2.72539 11.5938C3.21406 13.0977 4.63633 14.1914 6.32109 14.2227C4.9521 15.2777 3.27134 15.848 1.54297 15.8438C1.23618 15.8433 0.929674 15.825 0.625 15.7891C2.38327 16.9118 4.42713 17.5057 6.51328 17.5C13.5977 17.5 17.468 11.7305 17.468 6.72657C17.468 6.56251 17.4637 6.39844 17.4559 6.23829C18.2071 5.70394 18.857 5.03989 19.375 4.27735Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                     <svg
//                                         className="text-white hover:text-gray-300 cursor-pointer"
//                                         width={20}
//                                         height={20}
//                                         viewBox="0 0 20 20"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             d="M17.3504 1.25H2.74531C1.94727 1.25 1.25 1.82422 1.25 2.61289V17.2504C1.25 18.0434 1.94727 18.75 2.74531 18.75H17.3461C18.1484 18.75 18.75 18.0387 18.75 17.2504V2.61289C18.7547 1.82422 18.1484 1.25 17.3504 1.25ZM6.67461 15.8371H4.16758V8.04219H6.67461V15.8371ZM5.50781 6.85703H5.48984C4.6875 6.85703 4.16797 6.25977 4.16797 5.51211C4.16797 4.75078 4.70117 4.16758 5.52148 4.16758C6.3418 4.16758 6.84375 4.74648 6.86172 5.51211C6.86133 6.25977 6.3418 6.85703 5.50781 6.85703ZM15.8371 15.8371H13.3301V11.575C13.3301 10.5539 12.9652 9.85625 12.0582 9.85625C11.3652 9.85625 10.9551 10.325 10.7727 10.7816C10.7043 10.9457 10.6859 11.1691 10.6859 11.3973V15.8371H8.17891V8.04219H10.6859V9.12695C11.0508 8.60742 11.6207 7.85977 12.9469 7.85977C14.5926 7.85977 15.8375 8.94453 15.8375 11.2832L15.8371 15.8371Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                     <svg
//                                         className="text-white hover:text-gray-300 cursor-pointer"
//                                         width={20}
//                                         height={20}
//                                         viewBox="0 0 20 20"
//                                         fill="none"
//                                         xmlns="http://www.w3.org/2000/svg">
//                                         <path
//                                             d="M13.6457 2.7082C14.6118 2.71109 15.5375 3.09616 16.2207 3.77931C16.9038 4.46246 17.2889 5.38818 17.2918 6.3543V13.6457C17.2889 14.6118 16.9038 15.5375 16.2207 16.2207C15.5375 16.9038 14.6118 17.2889 13.6457 17.2918H6.3543C5.38818 17.2889 4.46246 16.9038 3.77931 16.2207C3.09616 15.5375 2.71109 14.6118 2.7082 13.6457V6.3543C2.71109 5.38818 3.09616 4.46246 3.77931 3.77931C4.46246 3.09616 5.38818 2.71109 6.3543 2.7082H13.6457ZM13.6457 1.25H6.3543C3.54687 1.25 1.25 3.54687 1.25 6.3543V13.6457C1.25 16.4531 3.54687 18.75 6.3543 18.75H13.6457C16.4531 18.75 18.75 16.4531 18.75 13.6457V6.3543C18.75 3.54687 16.4531 1.25 13.6457 1.25Z"
//                                             fill="white"
//                                         />
//                                         <path
//                                             d="M14.7395 6.35449C14.5231 6.35449 14.3117 6.29034 14.1318 6.17016C13.9519 6.04998 13.8117 5.87916 13.729 5.6793C13.6462 5.47944 13.6245 5.25953 13.6667 5.04736C13.7089 4.8352 13.8131 4.64031 13.9661 4.48734C14.119 4.33438 14.3139 4.23021 14.5261 4.18801C14.7382 4.14581 14.9582 4.16747 15.158 4.25025C15.3579 4.33303 15.5287 4.47322 15.6489 4.65309C15.7691 4.83295 15.8332 5.04442 15.8332 5.26074C15.8335 5.40446 15.8054 5.54683 15.7506 5.67967C15.6957 5.8125 15.6152 5.9332 15.5135 6.03483C15.4119 6.13645 15.2912 6.21701 15.1584 6.27186C15.0255 6.32672 14.8832 6.3548 14.7395 6.35449Z"
//                                             fill="white"
//                                         />
//                                         <path
//                                             d="M10 7.0832C10.5769 7.0832 11.1408 7.25427 11.6205 7.57477C12.1002 7.89527 12.474 8.35082 12.6948 8.88379C12.9155 9.41677 12.9733 10.0032 12.8608 10.569C12.7482 11.1348 12.4704 11.6546 12.0625 12.0625C11.6546 12.4704 11.1348 12.7482 10.569 12.8608C10.0032 12.9733 9.41677 12.9155 8.8838 12.6948C8.35082 12.474 7.89528 12.1002 7.57478 11.6205C7.25428 11.1408 7.08321 10.5769 7.08321 10C7.08404 9.22667 7.39161 8.48525 7.93843 7.93843C8.48526 7.3916 9.22668 7.08403 10 7.0832ZM10 5.625C9.13471 5.625 8.28885 5.88159 7.56939 6.36232C6.84992 6.84305 6.28917 7.52633 5.95804 8.32576C5.6269 9.12519 5.54026 10.0049 5.70907 10.8535C5.87788 11.7022 6.29456 12.4817 6.90642 13.0936C7.51827 13.7054 8.29782 14.1221 9.14648 14.2909C9.99515 14.4597 10.8748 14.3731 11.6742 14.042C12.4737 13.7108 13.1569 13.1501 13.6377 12.4306C14.1184 11.7112 14.375 10.8653 14.375 10C14.375 8.83968 13.9141 7.72688 13.0936 6.90641C12.2731 6.08594 11.1603 5.625 10 5.625Z"
//                                             fill="currentColor"
//                                         />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
