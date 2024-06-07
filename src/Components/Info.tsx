import infoData  from "../info.json"

interface InfoData  {
  id: number;
  title: string;
  description: string;
  img: string;
}

const Info = () => {

  return (
    <section className=" my-20 flex flex-col items-center gap-10 md:flex-row box-info md:text-left">
        {infoData.map((info:InfoData) => (
          <div key = {info.id}  className="flex flex-col items-center mb-8 sm:box-info md:text-left">
          <div className="mb-4 bg-[#093f68] w-32 h-32 flex justify-center items-center rounded-[50px] md:text-left">
            <img  className="md:text-left" src={info.img} alt="" />
          </div>
            <h2 className=" font-semibold text-xl md:text-left">{info.title}</h2>
            <p className="text-center px-4 pt-3 md:text-left">{info.description}</p>
          </div>
        ))}
    </section>
  )
}

export default Info