function Header() {
  return (
    <>
      <header className="w-[90%] m-auto mt-[20px] min-[1400px]:w-[1280px]">
        <div className="flex items-center justify-between">
          <a href="../../index.html">
            <img src="../../src/assets/Logo.svg" alt="web city logotip" />
          </a>

          <nav>
            <ul className="flex items-center gap-[60px] ">
              <li>
                <a
                  className="text-[14px] font-medium font-['DM Sans'] text-[rgba(61, 61, 63, 1)] hover:text-[#F35F2F]"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] font-medium font-['DM Sans'] text-[rgba(61, 61, 63, 1)] hover:text-[#F35F2F]"
                  href="#"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] font-medium font-['DM Sans'] text-[rgba(61, 61, 63, 1)] hover:text-[#F35F2F]"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] font-medium font-['DM Sans'] text-[rgba(61, 61, 63, 1)] hover:text-[#F35F2F]"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-7">
            <div className="hidden">
            <i className="fa-solid fa-bars"></i>
            </div>

            <button className="bg-[#F35F2F] w-[118px] h-[42px] rounded-[5px] text-white  font-medium font-['DM Sans'] text-[14px] cursor-pointer">
              Contact us
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
