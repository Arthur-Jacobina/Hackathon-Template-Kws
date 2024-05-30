import Header from "../components/Header";
import Coffee from "./_components/Coffee";
import Info from "./_components/Info";

export default function Page() {
  return (
    <div className="overflow-hidden">
    <Header />
    <div className="px-[15vw] flex justify-between items-center justify-center mt-10">
    <Info />
    <Coffee />
    </div>
    </div>
  );
}
