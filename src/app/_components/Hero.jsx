import Image from "next/image";
// import { ContainerScroll } from "../../components/ui/container-scroll-animation";

function Hero() {
  return (
    <section className="p-8 flex items-center flex-col">
      <div className="flex flex-col overflow-hidden">
        <h1 className="text-4xl font-semibold text-black dark:text-white">
          Manage your Money with AI-Driven Personal <br />
        <span className="text-4xl md:text-[6rem] text-gray-800 font-bold mt-1 leading-none">
          Finance Advisor
        </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;