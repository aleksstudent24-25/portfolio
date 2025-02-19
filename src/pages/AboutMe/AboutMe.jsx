import aboutme from "../../assets/data/aboutme.json";

export default function AboutMe() {
  return (
    <>
      <section className="h-screen bg-gradient-to-br from-fuchsia-400 via-blue-300 to-emerald-200">
        <div className="h-screen bg-gradient-to-b from-fuchsia-500 to-transparent flex justify-center">
          <div className="content-center items-center h-100 w-200 bg-gray-800 border-2 border-gray-100 rounded-xl text-gray-100 font-outfit">
            <h1 className="text-[24px] font-black text-emerald-300 title tracking-widest p-5 text-center">
              {aboutme.title}
            </h1>
            <div className="container-content content-center items-center flex p-5 gap-6">
              <p>{aboutme.description}</p>
              <img
                src="../../../public/images/doshin_tree.png"
                alt=""
                className="h-70 w-100 object-cover rounded-xl border-2 border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
