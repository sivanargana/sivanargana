import Ticker from "./Ticker";

 
export default function Banner() {
  return (
  <>
  <div className="w-full h-screen bg-radial-[circle_at_center] from-[#222] to-black relative">
    <div className="absolute left-0 right-0 bottom-10"><Ticker /></div>
  </div>
  </>
  );
}
