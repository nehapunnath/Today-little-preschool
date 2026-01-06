import { 
  FaChild,
  FaTree,
  FaBook,
  FaPalette,
  FaMusic,
  FaRunning,
  FaShieldAlt,
  FaStar,
  FaCheckCircle,
  FaUsers,
  FaSeedling,
  FaCamera,
  FaHeartbeat,
  FaLightbulb,
  FaCubes,
  FaPaintBrush,
  FaGamepad,
  FaWater,
  FaFirstAid,
  FaUserShield,
  FaCameraRetro,
  FaLock
} from 'react-icons/fa';

const Facilities = () => {
  // Main Facilities
  const mainFacilities = [
    {
      icon: <FaChild className="text-3xl" />,
      title: "Spacious Classrooms",
      description: "Bright, airy classrooms with child-friendly furniture and learning corners",
      features: [
        "Age-appropriate furniture",
        "Natural lighting",
        "Learning activity corners",
        "Display boards for children's work"
      ],
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
    },
    {
      icon: <FaTree className="text-3xl" />,
      title: "Outdoor Play Area",
      description: "Safe, well-equipped outdoor space for physical activities and nature exploration",
      features: [
        "Safe play equipment",
        "Sand play area",
        "Water play section",
        "Running track"
      ],
      image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80"
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Learning Resource Center",
      description: "Well-stocked library with age-appropriate books and educational materials",
      features: [
        "Picture books collection",
        "Audio-visual aids",
        "Storytelling corner",
        "Educational games"
      ],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80"
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Art & Creativity Room",
      description: "Dedicated space for artistic expression and creative activities",
      features: [
        "Art supplies storage",
        "Display walls",
        "Mess-free painting area",
        "Craft materials"
      ],
      image: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&q=80"
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Music & Movement Room",
      description: "Sound-proof room for music lessons, dance, and movement activities",
      features: [
        "Musical instruments",
        "Mirrored wall",
        "Sound system",
        "Movement props"
      ],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80"
    },
    {
      icon: <FaRunning className="text-3xl" />,
      title: "Indoor Activity Area",
      description: "Multi-purpose hall for indoor games and activities during bad weather",
      features: [
        "Soft flooring",
        "Play equipment storage",
        "Activity mats",
        "Building blocks area"
      ],
      image: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80"
    }
  ];

  // Safety & Security Features
  const safetyFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "24/7 CCTV Surveillance",
      description: "Comprehensive camera coverage across all areas"
    },
    {
      icon: <FaFirstAid className="text-2xl" />,
      title: "First Aid Room",
      description: "Well-equipped medical room with trained staff"
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Secure Entry System",
      description: "Restricted access with biometric entry"
    },
    {
      icon: <FaUserShield className="text-2xl" />,
      title: "Trained Security Staff",
      description: "Professional security personnel on duty"
    },
    {
      icon: <FaCameraRetro className="text-2xl" />,
      title: "Parent Live View",
      description: "Optional access to classroom cameras"
    },
    {
      icon: <FaHeartbeat className="text-2xl" />,
      title: "Regular Safety Drills",
      description: "Fire and emergency evacuation practice"
    }
  ];

  // Specialized Areas
  const specializedAreas = [
    {
      icon: <FaSeedling className="text-2xl" />,
      title: "Discovery Garden",
      description: "Small garden for nature exploration and plant care activities"
    },
    {
      icon: <FaCubes className="text-2xl" />,
      title: "Building Block Zone",
      description: "Dedicated area for constructive play with various building materials"
    },
    {
      icon: <FaPaintBrush className="text-2xl" />,
      title: "Messy Play Corner",
      description: "Specially designed area for sensory and messy play activities"
    },
    {
      icon: <FaGamepad className="text-2xl" />,
      title: "Puzzle & Game Center",
      description: "Collection of educational puzzles and board games"
    },
    {
      icon: <FaWater className="text-2xl" />,
      title: "Water Play Station",
      description: "Safe water play area for sensory development"
    },
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Science Exploration Corner",
      description: "Simple science experiments and discovery activities"
    }
  ];

  // Hygiene & Cleanliness
  const hygieneFeatures = [
    "Child-sized washrooms with low-level fixtures",
    "Regular cleaning and sanitization",
    "Purified drinking water",
    "Separate sleeping area with individual cots",
    "Daily cleaning of toys and equipment",
    "Hand-washing stations at child height"
  ];

  // Facility Images Gallery
  const facilityImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80",
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=800&q=80",
    "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
              Our Facilities
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-8 text-maroon-100">
              Designed for Learning, Safety, and Fun
            </p>
            <p className="text-lg max-w-3xl mx-auto text-maroon-100">
              At Today Little Preschool, we provide state-of-the-art facilities specifically 
              designed to nurture young minds in a safe, stimulating, and joyful environment.
            </p>
          </div>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Main Facilities
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Purpose-built spaces that support holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  {/* Image Section */}
                  <div className="md:w-2/5">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-maroon-700 mr-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-maroon-900 font-serif">
                        {facility.title}
                      </h3>
                    </div>
                    
                    <p className="text-maroon-700 mb-6">
                      {facility.description}
                    </p>
                    
                    <div className="border-t border-maroon-100 pt-4">
                      <p className="font-semibold text-maroon-800 mb-3">Key Features:</p>
                      <ul className="space-y-2">
                        {facility.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-maroon-700">
                            <FaCheckCircle className="text-maroon-600 mr-3 text-sm" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-gradient-to-b from-maroon-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Safety & Security
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Your child's safety is our top priority
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-maroon-50 rounded-lg hover:bg-maroon-100 transition-colors">
                    <div className="text-maroon-700 mr-4 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-maroon-900 font-serif mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-maroon-700">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Specialized Learning Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Specialized Learning Areas
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Dedicated spaces for specific developmental activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-b from-maroon-50 to-white rounded-xl p-8 border-2 border-transparent hover:border-maroon-300 transition-all hover:-translate-y-1">
                <div className="text-center mb-6">
                  <div className="text-maroon-700 mb-4 inline-block p-4 bg-white rounded-full">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-3">
                    {area.title}
                  </h3>
                  <p className="text-maroon-700">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hygiene & Cleanliness */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Hygiene & Cleanliness
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
              <p className="text-lg text-maroon-800 max-w-2xl mx-auto">
                Maintaining the highest standards of cleanliness and hygiene
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                    Our Hygiene Standards
                  </h3>
                  <ul className="space-y-4">
                    {hygieneFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center text-maroon-800">
                        <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4">
                          <FaStar className="text-sm" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                    Daily Cleaning Schedule
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-maroon-50 rounded-lg">
                      <span className="font-medium text-maroon-800">Morning</span>
                      <span className="text-sm text-maroon-600">Before arrival</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-maroon-50 rounded-lg">
                      <span className="font-medium text-maroon-800">Mid-day</span>
                      <span className="text-sm text-maroon-600">During break</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-maroon-50 rounded-lg">
                      <span className="font-medium text-maroon-800">Evening</span>
                      <span className="text-sm text-maroon-600">After departure</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-maroon-50 rounded-lg">
                      <span className="font-medium text-maroon-800">Weekly</span>
                      <span className="text-sm text-maroon-600">Deep cleaning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facility Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Facility Gallery
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Take a virtual tour of our preschool facilities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {facilityImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image}
                  alt={`Preschool facility ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">
                    Facility {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif mb-4 text-white">
                Technology Integration
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg text-maroon-100 max-w-2xl mx-auto">
                Smart technology for enhanced learning and communication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-maroon-700 backdrop-blur-sm rounded-xl">
                <h3 className="font-bold font-serif mb-3 text-white">Parent App</h3>
                <p className="text-sm text-maroon-100">Daily updates and progress tracking</p>
              </div>
              <div className="text-center p-6 bg-maroon-700 backdrop-blur-sm rounded-xl">
                <h3 className="font-bold font-serif mb-3 text-white">Smart Boards</h3>
                <p className="text-sm text-maroon-100">Interactive learning in classrooms</p>
              </div>
              <div className="text-center p-6 bg-maroon-700 backdrop-blur-sm rounded-xl">
                <h3 className="font-bold font-serif mb-3 text-white">Audio Systems</h3>
                <p className="text-sm text-maroon-100">Music and storytelling equipment</p>
              </div>
              <div className="text-center p-6 bg-maroon-700 backdrop-blur-sm rounded-xl">
                <h3 className="font-bold font-serif mb-3 text-white">Digital Portfolios</h3>
                <p className="text-sm text-maroon-100">Online record of children's work</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Accessibility Features
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-maroon-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                  Physical Accessibility
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-maroon-800">
                    <FaCheckCircle className="text-maroon-600 mr-4" />
                    Ramp access at all entry points
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaCheckCircle className="text-maroon-600 mr-4" />
                    Wide doorways and corridors
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaCheckCircle className="text-maroon-600 mr-4" />
                    Accessible washrooms
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaCheckCircle className="text-maroon-600 mr-4" />
                    Ground floor classrooms
                  </li>
                </ul>
              </div>

              <div className="bg-maroon-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                  Inclusive Design
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-maroon-800">
                    <FaUsers className="text-maroon-600 mr-4" />
                    Multi-sensory learning materials
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaChild className="text-maroon-600 mr-4" />
                    Adaptive furniture options
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaCamera className="text-maroon-600 mr-4" />
                    Visual schedules and cues
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaStar className="text-maroon-600 mr-4" />
                    Quiet spaces for sensory breaks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Facilities;