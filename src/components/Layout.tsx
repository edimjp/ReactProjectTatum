import { Outlet } from "react-router";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import fiftySevenDemoMp4 from "../../src/assets/videos/fiftyseven.mp4";

export default function Layout() {
  return (
    <>
      <div className="relative isolate flex min-h-screen flex-col bg-black ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 -z-10 h-full w-full object-cover"
        >
          <source src={fiftySevenDemoMp4} />
        </video>
        <NavBar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
