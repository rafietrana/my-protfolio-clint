import { FaHome, FaUser, FaEnvelope, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const navLink = (
    <ul className="flex gap-5 cursor-pointer">
      <Link to={'/'}>
      <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
        <FaHome /> Home
      </li></Link>
     <Link to={'/aboutme'}>
     <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
        <FaUser /> About Me
      </li>
     </Link>
      <Link to={'/contact'}>
      <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
        <FaEnvelope /> Contact
      </li>
      </Link>

    </ul>
  );

  return (
    <div className="bg-gray-900 text-white">
      <div className="mx-auto w-9/12">
        <div className="navbar flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="dropdown">
              <button tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBars size={24} />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content mt-2 p-2 shadow bg-gray-800 rounded-box w-52"
              >
                <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
                  <FaHome /> Home
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
                  <FaUser /> About Me
                </li>
                <li className="flex items-center gap-2 hover:text-yellow-500 transition duration-300">
                  <FaEnvelope /> Contact
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl font-bold">Rafiet Rana</a>
          </div>
          <div className="hidden lg:flex">{navLink}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
