const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-20">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center">
            <h4 className="text-xl text-[#61dafb] font-semibold mb-2 uppercase">
              Contact
            </h4>
            <h2 className="text-2xl text-slate-700 font-bold mb-2"></h2>
          </div>
        </div>

        <div className="w-full px-4 mb-8">
          <form>
            <div className="w-full mt-10 mb-10">
              <div className="w-full px-4 mb-4">
                <label
                  for="name"
                  className="font-semibold text-[#61dafb] text-lg"
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
                />
              </div>
              <div className="w-full px-4 mb-4">
                <label
                  for="email"
                  className="font-semibold text-[#61dafb] text-lg"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#61dafb]"
                />
              </div>
              <div className="w-full px-4 mb-4">
                <label
                  for="message"
                  className="font-semibold text-[#61dafb] text-lg"
                >
                  Message
                </label>
                <textarea
                  id="email"
                  type="email"
                  className="w-full border-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#61dafb] h-40"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button className="w-full px-3 py-4 bg-[#61dafb] text-white rounded-full text-lg font-semibold hover:opacity-80 transition duration-500">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
