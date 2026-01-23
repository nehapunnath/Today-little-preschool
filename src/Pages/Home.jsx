import { useState, useEffect } from 'react';
import { 
  FaChild, 
  FaPaintBrush, 
  FaBook, 
  FaTree, 
  FaUsers, 
  FaArrowLeft, 
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaUserGraduate,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaShieldAlt,
  FaHeart,
  FaGraduationCap,
  FaChartLine,
  FaHandsHelping,
  FaHome,
  FaRegCalendarCheck,
  FaAppleAlt,
  FaBrain,
  FaHandHoldingHeart,
  FaMusic,
  FaSeedling
} from 'react-icons/fa';
import { GiTeacher, GiThreeFriends } from 'react-icons/gi';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel Images
  const carouselImages = [
    "https://www.techsix.in/wp-content/uploads/2025/01/Step-by-Step-Guide-to-Preschool-Enrollment-for-Parents.jpg",
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80",
    "https://www.brookings.edu/wp-content/uploads/2017/10/es_10192017_cascio.jpg?quality=75&w=1500",
  ];

  // Core Features
  const coreFeatures = [
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Safe & Secure Environment",
      description: "24/7 CCTV surveillance, child-proof facilities, and strict safety protocols"
    },
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Nurturing Atmosphere",
      description: "Warm, caring environment that feels like a second home for your child"
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Montessori Inspired",
      description: "Blend of Montessori and modern teaching methodologies"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Holistic Development",
      description: "Focus on cognitive, emotional, social, and physical growth"
    }
  ];

  // Why Choose Us Features
  const whyChooseUs = [
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Low Teacher-Student Ratio",
      description: "1:8 ratio ensuring personalized attention for every child"
    },
    {
      icon: <FaHome className="text-3xl" />,
      title: "Home-like Environment",
      description: "Spacious, clean, and stimulating classrooms with natural lighting"
    },
    {
      icon: <FaRegCalendarCheck className="text-3xl" />,
      title: "Structured Daily Routine",
      description: "Balanced schedule with learning, play, and rest periods"
    },
    {
      icon: <FaAppleAlt className="text-3xl" />,
      title: "Nutrition Conscious",
      description: "Healthy snack options and emphasis on good eating habits"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Brain Development Activities",
      description: "Age-appropriate puzzles, games, and problem-solving tasks"
    },
    {
      icon: <FaHandHoldingHeart className="text-3xl" />,
      title: "Parent-Teacher Partnership",
      description: "Regular updates and open communication with parents"
    }
  ];

  // Programs Offered
  const programs = [
    {
      name: "Play Group",
      age: "2 - 3 Years",
      description: "Sensory play, basic social skills, and motor development",
      activities: ["Sensory Bins", "Music & Movement", "Story Time"]
    },
    {
      name: "Nursery",
      age: "3 - 4 Years",
      description: "Pre-writing skills, shape recognition, and independent play",
      activities: ["Alphabet Fun", "Number Games", "Art & Craft"]
    },
    {
      name: "LKG",
      age: "4 - 5 Years",
      description: "Phonics, basic math concepts, and social interaction",
      activities: ["Reading Readiness", "Simple Addition", "Group Projects"]
    },
    {
      name: "UKG",
      age: "5 - 6 Years",
      description: "School readiness, comprehensive skill development",
      activities: ["Creative Writing", "Science Exploration", "Computer Basics"]
    }
  ];

  // Special Activities
  const specialActivities = [
    {
      icon: <FaMusic className="text-2xl" />,
      title: "Music & Dance",
      description: "Rhythm and movement classes"
    },
    {
      icon: <FaSeedling className="text-2xl" />,
      title: "Gardening",
      description: "Nature connection activities"
    },
    {
      icon: <GiThreeFriends className="text-2xl" />,
      title: "Drama & Role Play",
      description: "Imagination and expression"
    },
    {
      icon: <FaPaintBrush className="text-2xl" />,
      title: "Art Studio",
      description: "Creative exploration"
    }
  ];

  // Gallery Images
  const galleryImages = [
    "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQt7xBuS0e0_qfcJJOpkiHlZmLoS06TutQrg&s",
    "https://s3.ap-south-1.amazonaws.com/assets.klayschools.com/wp-content/uploads/2025/05/01165954/Best-Preschool-Activities.webp",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    "https://www.bryantstratton.edu/wp-content/uploads/2024/03/preschool-classroom-blog.webp",
    "https://www.startearly.org/app/uploads/2019/12/HERO-little-girl-painting.png",
    "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?w=800&q=80",
    "https://www.brookings.edu/wp-content/uploads/2017/10/es_10192017_cascio.jpg?quality=75&w=1500"
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Priya Sharma",
      child: "Mother of Arjun (Age 4)",
      content: "Little Vile Preschool has been wonderful for my son. The teachers are caring and the environment is perfect for early learning.",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      child: "Father of Meera (Age 3)",
      content: "The curriculum is well-structured and my daughter looks forward to school every day. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali Reddy",
      child: "Mother of Vikram (Age 5)",
      content: "The staff is incredibly supportive and the facilities are excellent. My son has grown so much here.",
      rating: 5
    }
  ];

  // Carousel Controls
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Auto slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative h-[600px] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Preschool activity `}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-900/70 to-maroon-800/50">
              <div className="container mx-auto px-4 h-full flex items-center">
                
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        >
          <FaArrowRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-maroon-50 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="text-maroon-700 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-maroon-900 font-serif mb-3">
                  {feature.title}
                </h3>
                <p className="text-maroon-700 font-sans text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                About Little Vile Preschool
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
              <p className="text-lg text-maroon-800 font-sans leading-relaxed max-w-3xl mx-auto">
                Established with a vision to provide exceptional early childhood education, 
                Little Vile Preschool in Kachinayakanahalli is dedicated to creating a 
                foundation for lifelong learning through love, care, and innovative teaching methods.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-maroon-900 font-serif mb-6">
                  Our Philosophy
                </h3>
                <div className="space-y-4">
                  <p className="text-maroon-800 font-sans">
                    We believe that every child is unique and deserves an environment that 
                    nurtures their individual talents while building essential social and 
                    academic skills.
                  </p>
                  <p className="text-maroon-800 font-sans">
                    Our approach combines structured learning with ample playtime, ensuring 
                    children develop curiosity, confidence, and creativity.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-center text-maroon-800">
                      <FaChild className="text-maroon-600 mr-3" />
                      Child-centered learning approach
                    </li>
                    <li className="flex items-center text-maroon-800">
                      <FaUsers className="text-maroon-600 mr-3" />
                      Social-emotional development focus
                    </li>
                    <li className="flex items-center text-maroon-800">
                      <FaTree className="text-maroon-600 mr-3" />
                      Outdoor learning experiences
                    </li>
                    <li className="flex items-center text-maroon-800">
                      <FaBook className="text-maroon-600 mr-3" />
                      Foundation for academic success
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-maroon-600 mb-4">
                    <FaUserGraduate className="text-4xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-2 text-center">Age Group</h3>
                  <p className="text-maroon-700 font-sans text-center">2 to 6 Years</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-maroon-600 mb-4">
                    <FaClock className="text-4xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-2 text-center">Timings</h3>
                  <p className="text-maroon-700 font-sans text-center">8:30 AM - 12:30 PM</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-maroon-600 mb-4">
                    <FaMapMarkerAlt className="text-4xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-2 text-center">Location</h3>
                  <p className="text-maroon-700 font-sans text-center">Kachinayakanahalli</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-maroon-600 mb-4">
                    <GiTeacher className="text-4xl mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-2 text-center">Staff</h3>
                  <p className="text-maroon-700 font-sans text-center">Trained & Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Why Choose Little Vile Preschool?
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 font-sans max-w-2xl mx-auto">
              Discover what makes us the preferred choice for parents in Kachinayakanahalli
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-maroon-50 rounded-xl hover:shadow-lg transition-all">
                <div className="text-maroon-700 mr-4 mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-maroon-900 font-serif mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-maroon-700 font-sans">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Our Programs
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 font-sans max-w-2xl mx-auto">
              Age-appropriate curriculum designed for progressive learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-maroon-900 font-serif">
                        {program.name}
                      </h3>
                      <p className="text-maroon-600 font-sans mt-1">{program.age}</p>
                    </div>
                    <div className="bg-maroon-100 text-maroon-800 font-bold py-1 px-3 rounded-full">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-maroon-700 font-sans mb-4">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-maroon-900">Key Activities:</p>
                    <ul className="space-y-1">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-maroon-700 flex items-center">
                          <FaStar className="text-yellow-500 text-xs mr-2" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Special Activities
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 font-sans max-w-2xl mx-auto">
              Enrichment programs beyond regular curriculum
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialActivities.map((activity, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-maroon-50 to-white rounded-xl border border-maroon-200">
                <div className="text-maroon-700 mb-4 flex justify-center">
                  {activity.icon}
                </div>
                <h3 className="text-lg font-bold text-maroon-900 font-serif mb-2">
                  {activity.title}
                </h3>
                <p className="text-maroon-700 font-sans text-sm">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 font-sans max-w-2xl mx-auto">
              Glimpses of joyful learning moments at our preschool
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group cursor-pointer">
                <img
                  src={image}
                  alt={`Preschool gallery ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm font-sans">
                    Activity {index + 1}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              What Parents Say
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 font-sans max-w-2xl mx-auto">
              Hear from our happy parents about their experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-maroon-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <FaQuoteLeft className="text-maroon-600 text-2xl mb-4" />
                <p className="text-maroon-800 font-sans italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-maroon-200 pt-4">
                  <h4 className="font-bold text-maroon-900 font-serif">
                    {testimonial.name}
                  </h4>
                  <p className="text-maroon-600 font-sans">
                    {testimonial.child}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default Home;