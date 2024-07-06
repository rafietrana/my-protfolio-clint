const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center p-8">
        <img
          src="https://i.ibb.co/nDbgCPm/Untitled-design.png"
          alt="Kanivalan"
          className="w-40 h-40 rounded-full mx-auto mb-6"
        />
        <h1 className="text-4xl mb-4">Hello there 👋</h1>
        <h2 className="text-5xl font-bold mb-4">Im, Kanivalan</h2>
        <h3 className="text-xl mb-6">Product Designer</h3>
        <p className="text-lg mb-8">
          More than 6 years of experience designing high-quality products for
          businesses
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition">
          Send Inquiry
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
