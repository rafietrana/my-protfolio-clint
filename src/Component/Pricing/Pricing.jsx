 

const Pricing = () => {
  return (
    <div className=" text-white py-20">
      <div className="text-center mb-12">
 
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="text-gray-400 font-semibold mb-4">Personal</div>
          <div className="text-4xl font-bold mb-4">Free</div>
          <p className="text-gray-400 mb-6">To discover our product and its features</p>
          <ul className="text-gray-400 mb-8 space-y-2">
            <li>Unlimited Projects</li>
            <li>Share with 5 team members</li>
            <li>Sync across devices</li>
            <li>20GB individual data each user</li>
          </ul>
          <button className="bg-gray-700 text-white py-2 px-6 rounded-lg">Learn more</button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center border-4 border-yellow-500">
          <div className="text-yellow-500 font-semibold mb-4">Personal Pro</div>
          <div className="text-4xl font-bold mb-4">$20</div>
          <p className="text-gray-400 mb-6">The best option for individual notetakers</p>
          <ul className="text-gray-400 mb-8 space-y-2">
            <li>Unlimited Projects</li>
            <li>Share with 25 team members</li>
            <li>Sync across devices</li>
            <li>50GB individual data each user</li>
          </ul>
          <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg">Try for free</button>
        </div>
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <div className="text-gray-400 font-semibold mb-4">Team</div>
          <div className="text-4xl font-bold mb-4">$50</div>
          <p className="text-gray-400 mb-6">Best suited for larger notetakers</p>
          <ul className="text-gray-400 mb-8 space-y-2">
            <li>Unlimited Projects</li>
            <li>Unlimited team members</li>
            <li>Sync across devices</li>
            <li>Unlimited individual data each user</li>
          </ul>
          <button className="bg-gray-700 text-white py-2 px-6 rounded-lg">Try for free</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
