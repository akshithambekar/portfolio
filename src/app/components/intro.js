import Image from "next/image";

export default function Intro() {
    return (
        <div className="flex flex-col justify-center items-center h-48 px-44 subpixel-antialiased text-custom_gray mx-auto max-w-[1260px]">
            <h1 className="text-5xl text-white text-center font-bold">Hi, I'm Akshith.</h1>
            <p className="pt-4 text-lg text-center max-w-[800px]">I'm a skilled software engineer studying computer science at George Mason University, fueled by a passion for tackling intricate problems and building solutions that simplify everyday life.</p>
            <p className="pt-2 text-lg text-center max-w-[800px]">When I'm not building cool stuff at my computer, I spend time keeping fit, sim-racing, and being an amateur photographer.</p>
        </div>
    );
}