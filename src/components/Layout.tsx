import { Outlet } from "react-router";
import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
import fiftySevenDemoMp4 from "../../src/assets/videos/fiftyseven.mp4";

export default function Layout() {
  return (
    <div className="relative isolate flex min-h-screen min-h-[100dvh] flex-col overflow-x-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full object-cover"
      >
        <source src={fiftySevenDemoMp4} type="video/mp4" />
      </video>

      {/* Optional scrim so text stays readable over the video on small screens */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/40 sm:bg-black/20" />

      <NavBar />

      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
