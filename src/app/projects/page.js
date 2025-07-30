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

            {/* ParkIt Project */}
            <div className="text-custom_gray min-h-[400px] subpixel-antialiased max-w-[1260px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 mx-auto mb-8 sm:mb-8 lg:mb-6">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
                    <div className="w-full lg:max-w-[560px]">
                        <div className="flex flex-col sm:flex-row sm:max-w-[560px] items-start sm:items-center gap-2 sm:gap-0">
                            <div className="flex items-center">
                                <Link
                                    href="https://github.com/akshithambekar/parkit"
                                    target="_blank"
                                    className="text-lg font-semibold underline decoration-1 pl-0 sm:pl-4 pr-2 text-gray-100 hover:text-white"
                                >
                                    ParkIt
                                </Link>
                                <BsGithub />
                            </div>
                            <div className="flex flex-wrap pl-0 sm:pl-3 gap-2">
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    JavaScript
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Node.js
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Express.js
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    HTML/CSS
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-0 sm:px-4 mt-4">
                            Developed at HackTJ 10.0, ParkIt is a web
                            application designed to help users find parking in
                            congested areas. Using a live Google Maps interface,
                            this app integrates the Google Maps and Next Parking
                            Lot APIs to identify parking areas near the user's
                            current location or a specified destination. After a
                            location is provided, ParkIt fetches data from the
                            APIs to generate markers representing parking spots
                            on the map. Each marker is linked to a Google Maps
                            directions query that offers directions and more
                            details about the parking spot.
                        </p>
                    </div>
                    <div className="w-full lg:w-[400px] flex items-center justify-center px-0 lg:px-8">
                        <Link
                            href="https://youtu.be/fvdOhyDX81I"
                            target="_blank"
                            className="block w-full max-w-[400px]"
                        >
                            <Image
                                src="/parkit-demo.png"
                                alt="ParkIt demo"
                                width={500}
                                height={300}
                                className="w-full h-auto hover:opacity-65 object-contain shadow-2xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Tesla License Plate Detection Project */}
            <div className="text-custom_gray min-h-[400px] subpixel-antialiased max-w-[1260px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 mx-auto mb-8 sm:mb-8 lg:mb-6">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
                    <div className="w-full lg:max-w-[560px]">
                        <div className="flex flex-col sm:flex-row sm:max-w-[560px] items-start sm:items-center gap-2 sm:gap-0">
                            <div className="flex items-center">
                                <Link
                                    href="https://github.com/akshithambekar/tesla-license-plate-detection"
                                    target="_blank"
                                    className="text-lg font-semibold underline decoration-1 pl-0 sm:pl-4 pr-2 text-gray-100 hover:text-white"
                                >
                                    Tesla License Plate Detection
                                </Link>
                                <BsGithub />
                            </div>
                            <div className="flex flex-wrap pl-0 sm:pl-3 gap-2">
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Python
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    OpenCV
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    YOLOv8
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-0 sm:px-4 mt-4">
                            For my senior project at TJHSST, I developed a
                            license plate detection algorithm tailored towards
                            the low-resolution camera systems of Tesla vehicles
                            manufactured before 2023. Using a YOLOv8 model
                            trained with over 10000 images of license plates,
                            the algorithm detects plates in dashcam footage and
                            enhances clarity using OpenCV's edge detection,
                            hysteresis, and non-max suppression techniques. The
                            processed image is passed to the EasyOCR optical
                            character recognition library to correctly identify
                            the letters on the license plate, and is displayed
                            in real-time on the original video.
                        </p>
                    </div>
                    <div className="w-full lg:w-[400px] flex items-center justify-center px-0 lg:px-8">
                        <div className="w-full max-w-[400px]">
                            <Image
                                src="/license_plate_demo.png"
                                alt="License plate demo"
                                width={500}
                                height={300}
                                className="w-full h-auto object-contain shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Project */}
            <div className="text-custom_gray min-h-[400px] subpixel-antialiased max-w-[1260px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 mx-auto mb-8 sm:mb-8 lg:mb-0">
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
                    <div className="w-full lg:max-w-[560px]">
                        <div className="flex flex-col sm:flex-row sm:max-w-[560px] items-start sm:items-center gap-2 sm:gap-0">
                            <div className="flex items-center">
                                <Link
                                    href="https://github.com/akshithambekar/portfolio"
                                    target="_blank"
                                    className="text-lg font-semibold underline decoration-1 pl-0 sm:pl-4 pr-2 text-gray-100 hover:text-white"
                                >
                                    Portfolio
                                </Link>
                                <BsGithub />
                            </div>
                            <div className="flex flex-wrap pl-0 sm:pl-3 gap-2">
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Next.js
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    Tailwind CSS
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    JavaScript
                                </p>
                                <p className="px-2 sm:px-3 py-1 text-xs rounded-full transition-colors bg-gray-800 text-custom_gray">
                                    HTML
                                </p>
                            </div>
                        </div>
                        <p className="text-sm px-0 sm:px-4 mt-4">
                            Personal portfolio displaying my experience, skills,
                            and projects.
                        </p>
                    </div>
                    <div className="w-full lg:w-[348px] flex items-center justify-center px-0 lg:px-8">
                        <Link href="/" className="block w-full max-w-[348px]">
                            <Image
                                src="/portfolio.png"
                                alt="Portfolio thumbnail"
                                width={500}
                                height={300}
                                className="w-full h-auto hover:opacity-65 object-contain shadow-2xl"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
