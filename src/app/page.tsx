import { PlayNow } from "@/components/home/play-now";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex h-[calc(100vh-_4rem)] flex-1 flex-col gap-4 p-4 md:gap-8">
        <header className="h-full relative flex flex-col items-center justify-center z-10  backdrop-blur-sm">
          <div className="w-full h-full mx-auto px-4 sm:px-6 lg:px-8 md:pt-24 pb-10 flex flex-col items-center justify-center">
            <div className="xl:mt-[-10%] flex justify-center">
              <a
                className="inline-flex items-center gap-x-2 bg-primary-foreground border border-primary-foreground text-sm text-primary p-1 ps-3 rounded-full transition hover:border-primary"
                href="#"
              >
                La V2, cl&#39;est pour bientôt !
                <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600">
                  <ChevronRight size={16} />
                </span>
              </a>
            </div>
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-primary text-4xl md:text-5xl lg:text-6xl">
                Un faction{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-yellow-500 to-orange-500 text-transparent">
                  farm to win
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
              <p className="text-lg text-primary font-medium">
                Winzoria est le premier serveur pvp faction 100% farm to win.
                Pas de boutique, pas de pay to win, juste du farm et de la
                compétition. Qul&#39;attendez-vous pour nous rejoindre ?
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <PlayNow />
            </div>
          </div>
        </header>
      </main>
      <section
        data-aos="fade-right"
        data-aos-duration="800"
        className="bg-primary-foreground"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-fit py-12 justify-center">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold text-primary text-center">
                Une communauté{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-yellow-500 to-orange-500 text-transparent">
                  active
                </span>
              </h2>
              <p className="mt-4 text-xl font-medium text-primary text-center">
                Une communauté active, des joueurs passionnés, un staff à
                ll&#39;écoute... Que demander de plus ?
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/assets/images/community.png"}
                width={300}
                height={300}
                alt="Illustration de la communauté"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-left"
        data-aos-duration="800"
        className="dark:bg-gradient-to-tl dark:from-orange-800 dark:to-yellow-800 bg-gradient-to-tl from-yellow-50 to-orange-50 py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-fit py-12 justify-center">
            <div className="flex flex-col items-center">
              <Image
                src={"/assets/images/events.png"}
                width={300}
                height={300}
                alt="Illustration des événements"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-5xl font-bold text-primary text-center">
                Des événements{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-yellow-500 to-orange-500 text-transparent">
                  réguliers
                </span>
              </h2>
              <p className="mt-4 text-xl font-medium text-primary text-center">
                Des événements réguliers, des récompenses à la clé, des moments
                inoubliables... Rejoignez-nous !
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        data-aos="fade-up"
        data-aos-duration="800"
        className="bg-primary-foreground py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-fit py-12 justify-center">
            <div className="flex flex-col items-center">
              <h2 className="text-5xl font-bold text-primary text-center">
                Rejoignez-nous dès{" "}
                <span className="bg-clip-text bg-gradient-to-tl from-yellow-500 to-orange-500 text-transparent">
                  maintenant
                </span>
              </h2>
              <p className="mt-4 text-xl font-medium text-primary text-center">
                Rejoignez-nous dès maintenant et découvrez une expérience de jeu
                unique !
              </p>
            </div>
            <div className="flex justify-center">
              <PlayNow />
            </div>
          </div>
        </div>
      </section>
      <video
        autoPlay
        muted
        loop
        className="top-0 left-0 w-full h-full absolute bg-cover bg-center opacity-30 object-cover z-[-10]"
      >
        <source src="/assets/videos/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
