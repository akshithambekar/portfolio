import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
    return (
        <div className="max-w-[1260px] flex justify-center items-center min-h-[60px] text-custom_gray px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 pt-12 sm:pt-24 pb-8 sm:pb-10 subpixel-antialiased mx-auto">
            <div className="flex flex-row items-center space-x-1 text-xs sm:text-sm text-center">
                <PiCopyrightLight className="flex-shrink-0" />
                <p>2025 Akshith Ambekar. All rights reserved.</p>
            </div>
        </div>
    );
}
