const HeroSection = () => {
  const max_md_Classes = [
    "max-md:flex-col",
    "max-md:items-center",
    "max-md:gap-7",
    "max-md:px-2",
  ].join(" ");
  return (
    <>
      <section className="flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-semibold w-1/2 text-center leading-15 max-lg:w-2/3 max-md:w-auto max-md:px-15 max-md:text-4xl max-md:leading-10">
          Build a Responsive Landing Page with React
        </h1>
        <p className="w-1/3 text-center max-md:w-auto max-md:px-15">
          A mini project to practice building responsive landing pages usgin
          React components
        </p>
        <button className="bg-orange-600 text-white px-15 py-3 rounded-lg text-lg font-semibold">
          Get Started
        </button>
      </section>
    </>
  );
};

export default HeroSection;
