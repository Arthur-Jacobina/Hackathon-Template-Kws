import About from "./_components/About";
import Header from "./_components/Header";

export default function HomePage() {
    return(
        <div className="overflow-hidden">
        <Header />
        <div className="">
            <About />
        </div>
        </div>
    )
}