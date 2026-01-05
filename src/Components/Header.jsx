import { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt,
  FaPhoneAlt
} from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'About Us', path: '/about', icon: <FaInfoCircle /> },
    { name: 'Academics', path: '/academics', icon: <FaBookOpen /> },
    { name: 'Facilities', path: '/facilities', icon: <FaBuilding /> },
    { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
    { name: 'Contact', path: '/contact', icon: <FaPhoneAlt /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-maroon-50 shadow-md">
      

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo & School Name */}
          <div className="flex items-center space-x-4">
            
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-maroon-900 font-serif">
                Today Little Preschool
              </h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-maroon-800 hover:text-maroon-600 font-medium font-sans transition-colors flex items-center space-x-1"
              >
                <span className='text-maroon-900'>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-maroon-800 text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-maroon-50 rounded-lg shadow-lg border border-maroon-200">
            <div className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-3 px-6 py-3 text-maroon-800 hover:bg-maroon-100 font-sans transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-maroon-600">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;