import Link from "next/link";
import Image from "next/image";
import Cursor from "../components/cursor";
import Navbar from "../components/navbar";
import { BsGithub } from "react-icons/bs";

export default function Projects() {
    return (
        <div>
            <Cursor />
            <Navbar />
            <div className="grid grid-flow-row text-custom_gray items-baseline h-60 subpixel-antialiased max-w-[1260px] px-44 mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="max-w-[560px]">
                        <div className="flex max-w-[560px] items-center">
                            <Link href="https://github.com/akshithambekar/parkit" target="_blank" className="text-lg font-semibold underline decoration-1 pl-4 pr-2 text-gray-100 hover:text-white">ParkIt</Link>
                            <BsGithub />
                            <div className="flex flex-row pl-3 space-x-2">
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    JavaScript
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Node.js
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Express.js
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    HTML/CSS
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-4 mt-2">
                            Developed at HackTJ 10.0, ParkIt is a web application designed to help users find parking in congested areas. Using a live Google Maps interface, this app integrates the
                            Google Maps and Next Parking Lot APIs to identify parking areas near the user's current location or a specified destination. After a location is provided, ParkIt fetches
                            data from the APIs to generate markers representing parking spots on the map. Each marker is linked to a Google Maps directions query that offers directions and more
                            details about the parking spot.
                        </p>
                    </div>
                    <div className="flex w-[400px] items-center justify-center px-8">
                        <Link href="https://youtu.be/fvdOhyDX81I" target="_blank">
                            <Image src="/parkit-demo.png" alt="ParkIt demo" width={500} height={300} className="hover:opacity-65 object-contain shadow-2xl"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row text-custom_gray items-baseline h-60 subpixel-antialiased max-w-[1260px] px-44 mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="max-w-[560px]">
                        <div className="flex max-w-[560px] items-center">
                            <Link href="https://github.com/akshithambekar/tesla-license-plate-detection" target="_blank" className="text-lg font-semibold underline decoration-1 pl-4 pr-2 text-gray-100 hover:text-white">Tesla License Plate Detection</Link>
                            <BsGithub />
                            <div className="flex flex-row pl-3 space-x-2">
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Python
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    OpenCV
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    YOLOv8
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-4 mt-2">
                            For my senior project at TJHSST, I developed a license plate detection algorithm tailored towards the low-resolution camera systems of Tesla vehicles manufactured before 2023.
                            Using a YOLOv8 model trained with over 10000 images of license plates, the algorithm detects plates in dashcam footage and enhances clarity using OpenCV's edge detection, hysteresis, 
                            and non-max suppression techniques. The processed image is passed to the EasyOCR optical character recognition library to correctly identify the letters on the license plate, 
                            and is displayed in real-time on the original video.
                        </p>
                    </div>
                    <div className="flex w-[400px] items-center justify-center px-8">
                        <Image src="/license_plate_demo.png" alt="License plate demo" width={500} height={300} className="object-contain shadow-2xl"/>
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-row text-custom_gray items-baseline h-60 subpixel-antialiased max-w-[1260px] px-44 mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="max-w-[560px]">
                        <div className="flex max-w-[560px] items-center">
                            <Link href="https://github.com/akshithambekar/portfolio" target="_blank" className="text-lg font-semibold underline decoration-1 pl-4 pr-2 text-gray-100 hover:text-white">Portfolio</Link>
                            <BsGithub />
                            <div className="flex flex-row pl-3 space-x-2">
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Next.js
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Tailwind CSS
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    JavaScript
                                </p>
                                <p className="px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    HTML
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-4 mt-2">
                            Personal portfolio displaying my experience, skills, and projects.
                        </p>
                    </div>
                    <div className="flex w-[348px] items-center justify-center grow-0 px-8">
                        <Link href="/">
                            <Image src="/portfolio.png" alt="Portfolio thumbnail" width={500} height={300} className="hover:opacity-65 object-contain shadow-2xl grow-0"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}