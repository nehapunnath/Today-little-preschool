import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaWhatsapp,
  FaHome,
  FaDirections
} from 'react-icons/fa';

const Contact = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-3xl" />,
      title: "Our Address",
      details: [
        "Today Little Preschool",
        "Kachinayakanahalli",
        "Near Community Park",
        "Bangalore - 560077",
        "Karnataka, India"
      ],
      action: "Get Directions",
      actionIcon: <FaDirections />
    },
    {
      icon: <FaPhone className="text-3xl" />,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210 ",
        
      ],
      action: "Call Now",
      actionIcon: <FaPhone />
    },
    {
      icon: <FaEnvelope className="text-3xl" />,
      title: "Email Addresses",
      details: [
        "info@todaylittlepreschool.com",

      ],
      action: "Send Email",
      actionIcon: <FaEnvelope />
    }
  ];

  const operatingHours = [
    { day: "Monday - Friday", time: "8:30 AM - 12:30 PM" },
    { day: "Saturday", time: "9:00 AM - 11:00 AM (Activities)" },
    { day: "Sunday", time: "Closed" }
  ];

  const emergencyContact = [
    {  number: "+91 98765 43213" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
              Contact Us
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-8 text-maroon-100">
              Get in Touch with Today Little Preschool
            </p>
            <p className="text-lg max-w-3xl mx-auto text-maroon-100">
              We're here to answer your questions and help you with admissions, 
              school visits, and any other inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Contact Information
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-2xl mx-auto">
              Reach out to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactDetails.map((contact, index) => (
              <div key={index} className="bg-gradient-to-b from-maroon-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-maroon-100">
                <div className="text-center mb-6">
                  <div className="text-maroon-700 mb-4 inline-block p-4 bg-white rounded-full shadow">
                    {contact.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                    {contact.title}
                  </h3>
                </div>
                
                <div className="space-y-4 mb-6">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-maroon-800 text-center">
                      {detail}
                    </p>
                  ))}
                </div>

                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Hours & Emergency Contact */}
      <section className="py-16 bg-gradient-to-b from-maroon-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Operating Hours */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="bg-maroon-100 p-3 rounded-lg mr-4">
                    <FaClock className="text-2xl text-maroon-700" />
                  </div>
                  <h2 className="text-3xl font-bold text-maroon-900 font-serif">
                    Operating Hours
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {operatingHours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-maroon-50 rounded-lg">
                      <span className="font-medium text-maroon-800">{hour.day}</span>
                      <span className="font-bold text-maroon-900">{hour.time}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-maroon-200">
                  <p className="text-maroon-600 text-sm text-center">
                    * Office hours for inquiries: 9:00 AM - 5:00 PM (Mon-Fri)
                  </p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-8">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <FaWhatsapp className="text-2xl text-red-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-maroon-900 font-serif">
                    Emergency Contact
                  </h2>
                </div>
                
                <div className="space-y-6 mb-8">
                  {emergencyContact.map((contact, index) => (
                    <div key={index} className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <p className="font-medium text-red-800 mb-2">{contact.type}</p>
                      <p className="text-2xl font-bold text-red-900">{contact.number}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> For emergencies only. Please use regular contact 
                    numbers for general inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Visit Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Visit Our Campus
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            </div>

            <div className="bg-maroon-800  rounded-xl p-8 text-white">
              <div className="text-center mb-8">
                <FaHome className="text-4xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold font-serif mb-4">
                  Schedule a Campus Visit
                </h3>
                <p className="text-maroon-100 max-w-2xl mx-auto">
                  We welcome prospective parents to visit our campus, meet our staff, 
                  and see our facilities. Please call in advance to schedule an appointment.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <p className="text-lg font-bold mb-2">Best Time to Visit</p>
                  <p className="text-sm text-maroon-100">Weekdays: 10 AM - 12 PM</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <p className="text-lg font-bold mb-2">Visit Duration</p>
                  <p className="text-sm text-maroon-100">30-45 minutes</p>
                </div>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <p className="text-lg font-bold mb-2">What to Bring</p>
                  <p className="text-sm text-maroon-100">ID Proof & Child's Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Contact;