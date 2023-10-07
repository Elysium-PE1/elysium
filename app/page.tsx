import { BookingForm } from "@/components/booking-form";
import { LandingPage } from "@/components/landing-page";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[60px] bg-[#010101] text-[#cabd89] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video 
          src='/bg.mp4'
          loop
          muted
          autoPlay         
          className="object-cover w-fit object-center"
        />
      </div>
      <Navbar />
      <LandingPage />
      <BookingForm />
    </main>
  );
}
