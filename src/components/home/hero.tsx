const Hero = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="h-full w-full relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dup1lh7xk/video/upload/v1745401496/AAii_lkc1hz.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute top-26 w-full flex flex-col items-center">
        <h1 className="text-[70px] text-center font-montreg font-[350] tracking-[0.12em] scale-y-90">
          THE FUTURE OF
          <br />
          MOBILITY IS HERE
        </h1>
        <p className="text-[24px] font-montreg tracking-[0.13em] ">Discover the safest self-driving experience with Autono.</p>
      </div>
      <div className="w-full h-full absolute top-0 bg-black/5"></div>
    </div>
  );
};

export default Hero;
