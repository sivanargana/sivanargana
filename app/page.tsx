import Banner from "./components/Banner";
import SmoothScroller from "./components/SmoothScroller";
import Works from "./components/Works";

 
export default function Home() {
  return (
  <>
<SmoothScroller>
    <Banner />
  <section className="p-40">
    <div className="max-w-350 mx-auto">
    <div className="grid grid-cols-12">
      <div className="col-span-10" data-lag="0.5">
           <p className="text-[50px] font-light">Helping brands to stand out in the digital era.
Together we will set the new status quo.
No nonsense, always on the cutting edge.</p>
      </div>
      <div className="col-span-2" data-lag="0.2">
        <div className="aspect-square rounded-full flex flex-col items-center justify-center bg-white text-black text-xl font-medium">
          About Me
        </div>
      </div>
    </div>
    </div>
  </section>  
  <Works />
</SmoothScroller>
  </>
  );
}
