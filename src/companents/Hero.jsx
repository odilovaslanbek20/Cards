function Hero() {
    return (
        <>
         <div className="w-[90%] min-[1400px]:w-[1280px] m-auto flex items-center gap-[63px] mt-[100px]">
            <div className="w-[100%]">
                <h1 className="font-[Rubik] text-[72px] font-medium text-[rgba(61, 61, 63, 1)] leading-[90px]">Smart Web Design Agency</h1>
                <p className="font-[Rubik] text-[20px] font-normal text-[rgba(61, 61, 63, 1)] my-[40px]">We will provide best web design and business devlopment
                service clients expectation and satisfaction guarantee.</p>
                <button className="w-[219px] h-[53px] rounded-md bg-[#F35F2F] font-[Rubik] text-[20px] font-normal text-white">Free consultation</button>
            </div>
            <div className="w-[100%]">
                <img className="w-[620px]" src="../../src/assets/social-communication-3654546-3049735.png" alt="" />
            </div>
         </div>
        </>
    )
}

export default Hero;