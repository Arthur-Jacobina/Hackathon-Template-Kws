import About from "./_components/About";
import Header from "./_components/Header";

export default function HomePage() {
    return(
        <div className=" overflow-hidden w-full h-screen flex flex-col">
            <Header />
        <div className="flex-grow flex justify-center items-center">
            <About />
        </div>
        </div>
    )
}