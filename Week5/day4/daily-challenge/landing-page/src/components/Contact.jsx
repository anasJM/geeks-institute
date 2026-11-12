const Contact = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-14 pb-28 px-14 bg-white">
      <h1 className="text-center text-4xl font-semibold ">Contact Us</h1>
      <p className="text-center">
        Have any questions? Send us a message and we'll get back to you as soon
        as possible.
      </p>
      <div className="flex flex-col gap-5 p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <hr className="opacity-15" />
        <div className="flex justify-between gap-5 max-md:flex-col">
          <p className="flex-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
            non esse minima? consectetur adipisicing el
          </p>
          <form
            action=""
            className="flex-1 flex flex-col items-stretch gap-3.5"
          >
            <input
              type="text"
              placeholder="Email Adress"
              className="bg-white p-3 rounded-sm border border-gray-300"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-white p-3 rounded-sm border border-gray-300"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="p-3 font-semibold text-white bg-[#E74733] rounded-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
