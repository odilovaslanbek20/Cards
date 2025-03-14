import React from "react";

function Cards() {
  let arr = [
    {
      id: 1,
      img: "../../src/assets/Group.svg",
      title: "Website design",
      text: "Need something changed or is there something not quite working the bestservice",
      icon: "../../src/assets/fi-rr-arrow-small-right .svg",
    },
    {
      id: 2,
      img: "../../src/assets/Group.svg",
      title: "Web development",
      text: "Need something changed or is there something not quite working the bestservice",
      icon: "../../src/assets/fi-rr-arrow-small-right .svg",
    },
    {
      id: 3,
      img: "../../src/assets/Group.svg",
      title: "Web application",
      text: "Need something changed or is there something not quite working the bestservice",
      icon: "../../src/assets/fi-rr-arrow-small-right .svg",
    },
  ];
  return (
    <>
      <section className="w-[90%] m-auto mt-[60px] min-[1400px]:w-[1280px] mb-[120px]">
        <div className="w-[100%]">
          <h2 className="mb-[100px] text-[40px] font-['DM Sans'] font-bold text-center max-[400px]:text-[35px]">
            What Service We’re Offering
          </h2>

          <div className="grid min-[950px]:grid-cols-3 gap-[51px] max-[950px]:grid-cols-1 w-[100%] ">
            {arr.map((cards) => (
              <React.Fragment key={cards.id}>
                <div className="group relative flex items-center max-[950px]:mb-[50px] justify-center flex-col w-[100%] pb-[30px]  shadow-[0px_4px_22px_0px_rgba(95,95,95,0.05)] bg-white p-6 rounded-[23px]">
                  <div className="group-hover:bg-green-500 transition-all flex items-center justify-center w-[102px] h-[102px] rounded-full shadow-[0px_4px_22px_0px_#5F5F5F0D] bg-white absolute top-[-51px]">
                    <img
                      className="transition-all  absolute"
                      src={cards.img}
                      alt="Original Icon"
                    />
                  </div>
                  <h3 className="font-[DM Sans]  font-bold text-[24px] text-[#3D3D3F] m-0 p-0 mt-[75px]">
                    {cards.title}
                  </h3>
                  <p className="text-center font-[DM Sans] font-normal leading-[26px] mt-[10px] mb-[27px] text-[#3D3D3F] text-[16px]">
                    {cards.text}
                  </p>

                  <div className="group-hover:bg-green-500 transition-all flex items-center justify-center w-[42px] h-[42px] rounded-full bg-[#F1F1F5]">
                    <img
                      className="transition-all absolute"
                      src={cards.icon}
                      alt="Original Icon"
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
