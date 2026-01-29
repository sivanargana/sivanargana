import Ticker from "./Ticker";

 
export default function Banner() {
  return (
  <>
  <div className="w-full h-screen bg-radial-[circle_at_center] from-[#222] to-black relative overflow-hidden">
    <img src="avtar.png" className="size-full object-contain object-[50%_100px] mask-b-from-50% mask-b-to-100% " data-speed="0.5" />
    <div className="absolute left-0 right-0 bottom-10" data-lag="0.5"><Ticker /></div>
  </div>
  </>
  );
}
