import { FaTwitter, FaYoutube, FaFacebookF, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="  text-white p-10">
      <footer className="footer py-20 text-base-content">
        <nav className="space-y-2">
          <h6 className="footer-title text-lg font-bold">Services</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Branding
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Design
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Marketing
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Advertisement
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title text-lg font-bold">Company</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> About us
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Contact
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Jobs
          </a>
          <a className="link link-hover flex items-center gap-2">
            <FaEnvelope /> Press kit
          </a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title text-lg font-bold">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a className="hover:text-blue-400 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a className="hover:text-red-600 transition duration-300">
              <FaYoutube size={24} />
            </a>
            <a className="hover:text-blue-600 transition duration-300">
              <FaFacebookF size={24} />
            </a>
          </div>
        </nav>
      </footer>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition duration-300">
            <FaEnvelope /> Email
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaPhone /> +123456789
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            <FaMapMarkerAlt /> Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
