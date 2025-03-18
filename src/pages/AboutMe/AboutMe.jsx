import aboutme from "../../assets/data/aboutme.json";

export default function AboutMe() {
  return (
    <>
      <section
        id="about"
        className="h-180 md:h-screen bg-gradient-to-br from-fuchsia-400 via-blue-300 to-fuchsia-300"
      >
        <div className="h-screen bg-gradient-to-b from-fuchsia-500 to-transparent flex justify-center">
          <div className="content-center items-center w-100 h-180 md:h-100 md:w-180 bg-gray-800 border-2 border-gray-100 rounded-xl text-gray-100 font-outfit">
            <h1 className="text-[24px] font-black text-emerald-300 title tracking-widest p-5 text-center">
              {aboutme.title}
            </h1>
            <div className="container-content content-center items-center flex flex-col md:flex-row p-5 gap-6">
              <p>{aboutme.description}</p>
              <img
                src="images/portfolio-profil.jpg"
                alt=""
                className="h-70 object-scale-down rounded-xl border-2 border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
