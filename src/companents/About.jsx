import React from "react";

function About() {
  let arr = [
    {
      id: 1,
      img: "../../src/assets/Icon.svg",
      prise: "5200+",
      comments: "Projects completed",
    },
    {
      id: 2,
      hr: (
        <hr className="h-[242px] w-[1.2px] border border-[rgba(235, 235, 235, 0.8)]" />
      ),
    },
    {
      id: 3,
      img: "../../src/assets/femail.svg",
      prise: "500+",
      comments: "Active clients",
    },
    {
      id: 4,
      hr: (
        <hr className="h-[242px] w-[1.2px] border border-[rgba(235, 235, 235, 0.8)]" />
      ),
    },
    {
      id: 5,
      img: "../../src/assets/Icon_happy_client.svg",
      prise: "4500+",
      comments: "Happy clients",
    },
  ];

  return (
    <>
      <section className="w-[90%] m-auto mt-[120px] min-[1400px]:w-[1280px]">
        <div className="w-[100%]">
          <h2 className="mb-[52px] text-[40px] font-bold font-['DM Sans'] text-center text-[rgba(61,61,63,1)] max-[380px]:text-[30px]">
            We Provide the Best Web services
          </h2>

          <div className="border border-[rgba(235, 235, 235, 0.8)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-[100%] h-auto px-[60px] py-[25px]">
            {arr.map((data) => (
              <React.Fragment key={data.id}>
                {data.img && (
                  <div className="flex flex-col items-center justify-center max-[768px]:mb-[30px]">
                    <img src={data.img} alt="" className="w-[99px] h-[90px]" />
                    <h2 className="text-[#3D3D3F] text-[36px] font-bold font-['DM Sans'] mt-[23px]">
                      {data.prise}
                    </h2>
                    <p className="text-[#3D3D3F] text-[19px] font-normal font-['DM Sans']">
                      {data.comments}
                    </p>
                  </div>
                )}
                {data.hr && (
                  <div className="flex items-center justify-center  max-[1024px]:hidden">
                    {data.hr}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
