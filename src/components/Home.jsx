import dp from "./images/my-pic.png";

function Home() {
  return (
    <>
      <div>
        <section id="home">
          <div className="grid grid-row-5 justify-center justify-items-center">
            <div>
              <div>
                <img className="w-[400px] my-5" src={dp} alt="" />
              </div>
            </div>

            <h4>
              <a
                className="text-4xl font-bold font-serif tracking-wider bg-gradient-to-r from-slate-800 via-violet-600 to-slate-900 bg-clip-text text-transparent"
                href=""
              >
                Shahria Kabir
              </a>
            </h4>

            <span className="text-lg mt-3 bg-gradient-to-r from-gray-400 via-red-400 to-gray-400 bg-clip-text text-transparent">
              Front-End Web Developer
            </span>

            <button className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 mt-4 text-white font-bold rounded-md drop-shadow-xl">
              Download CV
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
