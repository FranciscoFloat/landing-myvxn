import { ButtonInfoComponent } from "@/app/shared/components/ButtonInfoComponent/ButtonInfoComponent";
import ChatComponent from "./Chatcomponent/ChatComponent";

export default function HeroComponent() {
  const svgButton=(
     <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-zap w-4 h-4"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
          </svg>
  )
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      color="var(--neon)"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--neon)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-check w-5 h-5 text-neon flex-shrink-0"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
  const trusted = [
    {
      name: "Configuración 100% personalizable",
      svgIcon: svg,
    },
    {
      name: "Respuestas automáticas inteligentes",
      svgIcon: svg,
    },
    {
      name: "Activo 24/7 sin descanso",
      svgIcon: svg,
    },
  ];

  return (
    <>
      <section>
        <ButtonInfoComponent text="Automatización Inteligente" svg={svgButton} />
        <div className="m-2">
          <div className="flex">
            <div className="flex flex-col ms-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 w-[480px] ">
                Automatiza tu <span className="text-gradient ">WhatsApp</span>,{" "}
                <br className="hidden sm:block" />
                Multiplica tus{" "}
                <span className="relative">
                  <span className="relative z-10">Ventas</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/30 -rotate-1 rounded"></span>
                </span>
              </h1>
              <p className="text-lg text-text-muted mb-12">
                Tú defines cada mensaje, cada respuesta.{" "}
                <span className="text-white">
                  Nosotros lo hacemos realidad.
                </span>{" "}
                Control total sobre tu comunicación automatizada.
              </p>
              <div className="flex">
                {trusted.map((item) => (
                  <p
                    className="flex items-center gap-2 max-w-[250px]"
                    key={item.name}
                  >
                    {" "}
                    {item.svgIcon}
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <ChatComponent />
          </div>
        </div>
      </section>
    </>
  );
}
