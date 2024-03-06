import Image from "next/image";
import Header from "../_components/Header";
import Presentation from "./_components/Presentation";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="mx-3">
          <Presentation/>
      </main>
    </>
    
  );
}
