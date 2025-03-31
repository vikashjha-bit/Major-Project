import React from "react";
import vika from "/1.jpg";
import hotel from "/hotel.png";
import proje from "/proje.jpg"
import image from "/image.png";

function Contact(){
    return(
        <div className="w-full h-[200vh] bg-[#1F1E24] flex p-[5%]">
            <div className="w-[20%] fl ">
                <img className="h-[40vh] rounded object-cover" src={vika} alt="" />
                <hr className="mt-5 mb-2 border-none h-[2px] bg-zinc-500"/>

                <h1 className="text-xl text-zinc-400 ">Personal Info</h1>
                <div className="flex w-full gap-5 mt-3">
                <a href="https://www.linkedin.com/in/vikash-jha-43bb0a258/?originalSubdomain=in">
                <img className="w-[4vh] h-[4vh] object-cover  " src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100048624878223">
            
                <img className="w-[4vh] h-[4vh] object-cover " src="https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255556941.jpg" alt="" />
                </a>

                <a href="https://www.instagram.com/vikash45.inc/">
                <img className="w-[4vh] h-[4vh] object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiNFtPCpgaLwF4O14R82_uxfuQ-TEAxDAqQ&s" alt="" />
                </a>

                <a target="_blank" href="https://x.com/home">
                <img className="w-[4vh] h-[4vh] object-cover " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQIqzv3klUwYdw6gGu46ZGaLUndElkWqDwA&s" alt="" />
                </a>
                </div>
                <h1 className="text-lg text-zinc-400 mt-3">Vikash Kumar jha</h1>
                <div className="flex mt-1 text-zinc-400 gap-3">
                <i class="ri-phone-line"></i>
                <h3>9508086769</h3>
                </div>
                <div className="flex mt-1 text-zinc-400 gap-3">
                <i class="ri-mail-line"></i>
                <h3>jhavikashkumar716@gmail.com</h3>
                </div>
            </div>
            <div className="w-[80%] ml-[5%]">
                <h1 className="text-7xl text-zinc-500 ">Vikash Kumar Jha</h1>
                <h3 className="mt-5 text-xl  text-zinc-500 ">Biogarphy</h3>
                <p className="text-zinc-800 hover:text-zinc-500 mt-3 text-xs italic hover:text-[1.2vw]">Vikah Kumar Jha is a B-Tech student in Mathematics and Computing at MITS, passionate about data analysis, software development, and competitive programming (LeetCode 1421). They have built React-based projects, animated websites, and AI-driven stock market prediction models using Python, C++, and MATLAB. As the Secretary of the Soft Computing Student Chapter, they actively engage in tech events. They have also researched IPL’s societal impact and follow Indian politics, supporting Congress. With expertise in web development, ML, and algorithms, they aim to make an impact in software and AI.</p>
                <h2 className="mt-5 text-xl  text-zinc-500 ">Projects</h2>
                <div className="mt-8 flex  items-center gap-10">
               
                <div className="w-[28%]  bg-zinc-600 rounded-md">
                    <img className="w-full h-[25vh]" src={hotel} alt="" />
                    <h2 className="p-2 text-white text-lg">Hotel Odisej</h2>
                    <p className="px-2 text-xs leading-2 tracking-wide mb-5 text-zinc-700 hover:text-zinc-100">The Hotel Odisej website features smooth animations using GSAP, Locomotive Scroll, and Sherry.js, creating an interactive and visually appealing experience. It combines elegant UI design with seamless navigation for an engaging user experience. 🚀
                    </p>
                    <h3 className="p-2 text-white text-lg">Tool used</h3>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-3 mb-3"></div>

                    <div className="flex gap-2  px-2 ">
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">html</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">css</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">js</h4>
                    </div>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-3 mb-3"></div>

                    <div className="flex items-center gap-5 px-3  mb-5">
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="">DEMO</a>
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="https://github.com/vikashjha-bit/Hotel-odisej">SOURCE</a>
                    </div>

                </div>

                <div className="w-[28%]  bg-zinc-600 rounded-md">
                    <img className="w-full h-[25vh]" src={proje} alt="" />
                    <h2 className="p-2 text-white text-lg">Shopping App</h2>
                    <p className="px-2 text-xs leading-2 tracking-wide mb-1 text-zinc-700 hover:text-zinc-100">I built a React project using Axios and Context API to fetch, store, and manage data from a backend, with local storage for persistence. The UI was styled with Tailwind CSS for a fully reactive experience. 🚀
                    </p>
                    <h3 className="p-2 text-white text-lg">Tool used</h3>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-1 mb-3"></div>

                    <div className="flex flex-wrap gap-2  px-2 ">
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">React</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Talwind Css</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Axios</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Context API</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Local Storage</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Backend API</h4>
                    </div>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-3 mb-3"></div>

                    <div className="flex items-center gap-5 px-3  mb-5">
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="">DEMO</a>
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="https://github.com/vikashjha-bit/ReactiveProject">SOURCE</a>
                    </div>

                </div>
                
                <div className="w-[28%]  bg-zinc-600 rounded-md">
                    <img className="w-full h-[25vh]" src={image} alt="" />
                    <h2 className="p-2 text-white text-lg">Stock Market Analysis</h2>
                    <p className="px-2 text-xs leading-2 tracking-wide mb-1 text-zinc-700 hover:text-zinc-100">I developed a predictive stock market analysis project using machine learning, analyzing data from Google, Microsoft, and Amazon, with a MATLAB dashboard for forecasting future stock prices. 🚀
                    </p>
                    <h3 className="p-2 text-white text-lg">Tool used</h3>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-1 mb-3"></div>

                    <div className="flex flex-wrap gap-2  px-2 ">
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Python</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Pandas & NumPy</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Scikit-learn & TensorFlow </h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">MATLAB</h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Yahoo Finance API </h4>
                        <h4 className="rounded-md px-5 py-1 bg-[#0B2447] text-white bg-zinc-400">Jupyter Notebook </h4>
                    </div>
                    <div className="w-[80%] bg-[#A1A1AA] ml-[5%]  h-[1px] mt-3 mb-3"></div>

                    <div className="flex items-center gap-5 px-3  mb-5">
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="">DEMO</a>
                        <a className="px-3 py-2 bg-[#576CBC] text-white rounded-lg" href="https://github.com/vikashjha-bit/ReactiveProject">SOURCE</a>
                    </div>

                </div>

                </div>

                <div className="w-full h-[1px] bg-zinc-500 mt-8"> </div>
            </div>
        </div>
    )
}

export default Contact;