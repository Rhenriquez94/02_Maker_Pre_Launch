const Header = () => {
  return (
    <section>
      <div className="w-full flex justify-center items-center my-7">
        <img className="w-32 h-9" src="../../src/Img/logo.svg" alt="Logo" />
      </div>

      <div className="relative flex flex-col items-center my-10 bg-hero bg-center bg-no-repeat bg-cover">
        <div className="relative z-10 flex flex-col items-center md:flex-row md:items-center md:justify-center">
          <img
            className="header-svg w-full md:w-auto md:flex-1"
            src="../../src/Img/illustration-hero-left.svg"
            alt="Hero Left"
          />
          <div className="flex justify-center  flex-col items-center mx-6 my-10 md:my-0">
            <h1 className="text-white text-center font-bold text-4xl">
              Get paid for the work you{" "}
              <span className="text-[#3EE9E5]">love</span> to do.
            </h1>

            <div className="relative z-10 flex justify-center items-center flex-col">
              <p className="w-[350px] md:w-[600px] text-center text-m leading-relaxed mt-11">
                The 9-5 grind is so last century. We believe in living life on
                your own terms. Whether you’re looking to escape the rat race or
                set up a side hustle, we’ve got you covered.
              </p>
              <img
                className="mt-7"
                src="../../src/Img/icon-scroll.svg"
                alt="Scroll Icon"
              />
            </div>
          </div>
          <img
            className="header-svg w-full md:w-auto md:flex-1 svg-2"
            src="../../src/Img/illustration-hero-right.svg"
            alt="Hero Right"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
