import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram,
  FaClock,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaBuilding,
  FaCalendarAlt
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-maroon-400" />, 
      title: 'Our Location', 
      content: 'Little Vile Preschool, Kachinayakanahalli' 
    },
    { 
      icon: <FaPhone className="text-maroon-400" />, 
      title: 'Phone Number', 
      content: '+91 98765 43210' 
    },
    { 
      icon: <FaEnvelope className="text-maroon-400" />, 
      title: 'Email Address', 
      content: 'contact@littlevilepreschool.com' 
    },
    { 
      icon: <FaClock className="text-maroon-400" />, 
      title: 'Working Hours', 
      content: 'Mon - Fri: 8:00 AM - 6:00 PM' 
    }
  ];

  return (
    <footer className="bg-maroon-900 text-maroon-50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              
              <div>
                <h3 className="text-2xl font-bold font-serif">Little Vile Preschool</h3>
                <p className="text-maroon-200 font-sans">A Premium Preschool</p>
              </div>
            </div>
            <p className="text-maroon-100 font-sans leading-relaxed">
              Nurturing young minds with care, creativity, and compassion. 
              Providing a safe and stimulating environment for children to 
              grow, learn, and discover their potential.
            </p>
            
            
          </div>

          {/* Quick Links (Navigation Links) - Column 2 as requested */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b border-maroon-700 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="text-maroon-100 hover:text-maroon-50 font-sans flex items-center space-x-2 transition-colors"
                  >
                    <span className="text-maroon-400">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif border-b border-maroon-700 pb-2">
              Contact Us
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {info.icon}
                  <div>
                    <p className="font-sans font-medium">{info.title}</p>
                    <p className="text-maroon-100 font-sans whitespace-pre-line">
                      {info.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;