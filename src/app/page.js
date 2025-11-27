import Main from "@/components/Main";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
export default function Home() {
  return (
    <>
      <StairTransition />
      <div className="in-h-screen  bg-zinc-50 font-sans dark:bg-black flex flex-col md:justify-between h-screen py-4 gap-6">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
