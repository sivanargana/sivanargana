const Works = () => {

    const works = [
        {
            name:"Build Connect",
            type:"Design & Development"
        },
        {
            name:"FSII",
            type:"Design & Development"
        },
        {
            name:"Vinci 360",
            type:"Design & Development"
        },
        {
            name:"Madeinvsa",
            type:"Design & Development"
        },
        {
            name:"Swiftbrands",
            type:"Design & Development"
        },
        {
            name:"Colour Moon",
            type:"Design & Development"
        }
    ]

    return (
        <>
          <section className="p-40">
    <div className="max-w-350 mx-auto">
        {
            works.map((item:any,i:any)=><div key={i}>
                <div className=" border-y -mt-px  py-10 flex items-center">
                    <span className="text-7xl font-medium uppercase">{item.name}</span>
                    <span className="text-base font-medium ml-auto">{item.type}</span>
                </div>

            </div>)
        }
        </div>
        </section>
        </>
    )

    }
export default Works
