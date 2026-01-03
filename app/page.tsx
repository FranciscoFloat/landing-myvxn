import Image from "next/image";
import NavBarComponent from "./shared/components/NavBarComponent/NavBarcomponent";
import FooterComponent from "./shared/components/FooterComponent/FooterComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import { TutienesControlComponent } from "./components/TutienesControlComponent/TutienesControlComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <NavBarComponent />
      <main className="flex-1 pt-32 flex flex-col   w-full">
        <HeroComponent></HeroComponent>
        <TutienesControlComponent></TutienesControlComponent>
      </main>
      <FooterComponent />
    </div>
  );
}
