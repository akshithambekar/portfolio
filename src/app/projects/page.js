import Link from "next/link";
import Image from "next/image";
import Cursor from "../components/cursor";
import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <div>
            <Cursor />
            <Navbar />
            <div className="flex flex-row text-custom_gray items-baseline h-8 subpixel-antialiased max-w-[1260px] px-44 mx-auto">
                <Link href="https://github.com/akshithambekar/parkit" target="_blank" className="text-lg font-semibold underline decoration-1 px-4 hover:text-white">
                    ParkIt
                </Link>
                <h6 className="text-base">JavaScript, Node.js, Express.js, HTML/CSS</h6>
            </div>
            <div className="max-w-[1228px] mx-auto">
                <div className="grid grid-cols-4 gap-16 text-custom_gray subpixel-antialiased">
                    <div className="col-span-3 pl-44 pr-56">
                        <p className="text-sm">
                            Developed at HackTJ 10.0, ParkIt is a web application designed to help users find parking in congested areas. Using a live Google Maps interface, this app integrates the
                            Google Maps and Next Parking Lot APIs to identify parking areas near the user's current location or a specified destination. After a location is provided, ParkIt fetches
                            data from the APIs to generate markers representing parking spots on the map. Each marker is linked to a Google Maps directions query that offers directions and more
                            details about the parking spot.
                        </p>
                    </div>
                    <div className="col-span-1 h-48 -ml-64">
                        <Link href="https://youtu.be/fvdOhyDX81I" target="_blank"><Image src="/parkit-demo.png" className="object-cover" width={300} height={300} alt="x" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}