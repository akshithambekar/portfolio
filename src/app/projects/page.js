import Link from "next/link";
import Image from "next/image";
import Cursor from "../components/cursor";
import Navbar from "../components/navbar";

export default function Projects() {
    return (
        <div>
            <Cursor />
            <Navbar />
            <div className="grid grid-flow-row text-custom_gray items-baseline h-48 subpixel-antialiased max-w-[1260px] px-44 mx-auto">
                <div className="flex flex-row items-start justify-between">
                    <div className="max-w-[560px]">
                        <div className="flex max-w-[373px] items-baseline">
                            <Link href="https://github.com/akshithambekar/parkit" target="_blank" className="text-lg font-semibold underline decoration-1 px-4 hover:text-white">ParkIt</Link>
                            <h6 className="text-base">JavaScript, Node.js, Express.js, HTML/CSS</h6>
                        </div>
                        <p className="text-sm px-4 mt-2">
                            Developed at HackTJ 10.0, ParkIt is a web application designed to help users find parking in congested areas. Using a live Google Maps interface, this app integrates the
                            Google Maps and Next Parking Lot APIs to identify parking areas near the user's current location or a specified destination. After a location is provided, ParkIt fetches
                            data from the APIs to generate markers representing parking spots on the map. Each marker is linked to a Google Maps directions query that offers directions and more
                            details about the parking spot.
                        </p>
                    </div>
                    <div className="flex items-center justify-center px-8">
                        <Link href="https://youtu.be/fvdOhyDX81I" target="_blank">
                            <Image src="/parkit-demo.png" alt="ParkIt demo" width={500} height={300} className="hover:opacity-75 object-contain" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
