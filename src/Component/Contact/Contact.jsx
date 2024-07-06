import emailjs from "emailjs-com";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lmjnumf",
        "template_er6jq94",
        e.target,
        "1P0MWBMfj9chhyBRZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
        <div className="space-y-4 flex items-center flex-col justify-start h">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            alt="Contact"
          />
        </div>
        <div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-lg p-3 md:p-5 bg-[#2A323C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className="w-full rounded-lg p-3 md:p-5 bg-[#2A323C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
            <input
              className="w-full rounded-lg p-3 md:p-5 bg-[#2A323C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Phone Number"
              type="tel"
              name="phone_number"
            />
            <textarea
              className="w-full rounded-lg p-3 md:p-5 bg-[#2A323C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Message"
              rows="4"
              name="message"
              required
            ></textarea>
            <button
              className="w-full rounded-lg p-3 md:p-5 bg-yellow-500 text-white font-bold hover:bg-yellow-600 transition duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
