import NavBarComponent from "./shared/components/NavBarComponent/NavBarcomponent";
import FooterComponent from "./shared/components/FooterComponent/FooterComponent";
import HeroComponent from "./components/HeroComponent/HeroComponent";
import { TutienesControlComponent } from "./components/TutienesControlComponent/TutienesControlComponent";
import { PlansComponent } from "./components/PlansComponent/PlansComponent";
import TestimonialsComponent from "./components/TestimonialsComponent/TestimonialsComponent";
import ContactComponent from "./components/ContactComponent/ContactaComponent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full relative">
      <NavBarComponent />
      <main className="flex-1 pt-32 flex flex-col   w-full">
        <HeroComponent></HeroComponent>
        <TutienesControlComponent></TutienesControlComponent>
        <PlansComponent></PlansComponent>
        <TestimonialsComponent></TestimonialsComponent>
        <ContactComponent></ContactComponent> 
      </main>
      <FooterComponent />
    </div>
  );
}
