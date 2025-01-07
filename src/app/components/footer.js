import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
    return (
        <div className="max-w-[1260px] flex justify-center items-center h-4 text-custom_gray px-44 pt-24 pb-10 subpixel-antialiased mx-auto">
            <div className="flex flex-row items-center space-x-1 text-sm">
                <PiCopyrightLight />
                <p>2025 Akshith Ambekar. All rights reserved.</p>
            </div>
        </div>
    );
}
