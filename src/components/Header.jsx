import logo from "./images/logo.png";

function Header() {
  return (
    <>
      <div className="flex justify-end items-center p-5">
        <div className="mr-auto">
          <div>
            <a href="">
              <img className="w-[150px] h-[90px]" src={logo} alt="" />
            </a>
          </div>
        </div>

        <div className="flex justify-end items-center p-5">
          <div>
            <nav>
              <ul className="flex gap-x-5 ">
                <li className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
                  <a
                    className="bg-[#f3f6f6] font-serif hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:text-white px-5 h-[45px] items-center text-xl flex gap-2 rounded-lg "
                    href="#home"
                  >
                    <span>
                      <i className="fa-solid fa-house"></i>
                    </span>
                    Home
                  </a>
                </li>
                <li className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
                  <a
                    className="bg-[#f3f6f6] font-serif hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:text-white px-5 h-[45px] items-center text-xl flex gap-2 rounded-lg "
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
                  <a
                    className="bg-[#f3f6f6] font-serif hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:text-white px-5 h-[45px] items-center text-xl flex gap-2 rounded-lg "
                    href=""
                  >
                    Resume
                  </a>
                </li>
                <li className="hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
                  <a
                    className="bg-[#f3f6f6] font-serif hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:text-white px-5 h-[45px] items-center text-xl flex gap-2 rounded-lg "
                    href=""
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
