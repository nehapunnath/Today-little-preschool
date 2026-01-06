import { 
  FaBullseye, 
  FaHeart, 
  FaHandsHelping, 
  FaGraduationCap,
  FaUsers,
  FaChild,
  FaTree,
  FaBook,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaStar
} from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const About = () => {
  // Mission, Vision & Values
  const coreValues = [
    {
      icon: <FaHeart className="text-3xl" />,
      title: "Nurturing Care",
      description: "Creating a warm, loving environment where every child feels safe and valued"
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Excellence in Education",
      description: "Delivering high-quality early childhood education through innovative methods"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Holistic Development",
      description: "Focusing on cognitive, emotional, social, and physical growth"
    },
    {
      icon: <FaHandsHelping className="text-3xl" />,
      title: "Community Partnership",
      description: "Building strong relationships with parents and the local community"
    }
  ];

  // Our Philosophy Points
  const philosophyPoints = [
    "Every child is unique and learns at their own pace",
    "Play is the highest form of learning in early childhood",
    "Building confidence is as important as building knowledge",
    "Safe, stimulating environments foster optimal growth",
    "Parent involvement enhances the learning experience",
    "Social skills are foundational for future success"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-maroon-900 ">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
              About Our Preschool
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-8 text-maroon-100">
              Building foundations for lifelong learning since 2015
            </p>
            <p className="text-lg max-w-3xl mx-auto text-maroon-100">
              Today Little Preschool in Kachinayakanahalli is more than just a preschool - 
              it's a nurturing community dedicated to helping children blossom during their 
              most formative years.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-6">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-maroon-600 mb-6"></div>
              <div className="space-y-4 text-maroon-800">
                <p className="text-lg">
                  Founded in 2015 by Mrs. Anjali Rao, a passionate educator with over 
                  15 years of experience, Today Little Preschool began with a simple vision: 
                  to create a learning environment where children feel loved, safe, and 
                  excited to learn.
                </p>
                <p>
                  Starting with just 12 children in a small building, we've grown to become 
                  one of the most trusted preschools in Kachinayakanahalli, now serving 
                  over 100 families annually.
                </p>
                <p>
                  Our journey has been guided by the belief that early childhood education 
                  should blend structured learning with ample play, creativity with routine, 
                  and individual attention with social development.
                </p>
                <p className="font-semibold text-maroon-900">
                  Today, we continue to evolve while staying true to our core values of 
                  nurturing care, educational excellence, and community partnership.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-maroon-50 p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <GiTeacher className="text-6xl text-maroon-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-maroon-900 font-serif">
                    Founder's Message
                  </h3>
                </div>
                <blockquote className="text-maroon-800 italic text-lg leading-relaxed">
                  "When I started Today Little Preschool, I dreamed of a place where children's 
                  laughter would mix with learning, where curiosity would be celebrated, and 
                  where every child would feel seen and valued. A decade later, that dream 
                  continues to guide everything we do."
                </blockquote>
                <div className="mt-6 pt-6 border-t border-maroon-200">
                  <p className="font-bold text-maroon-900">Mrs. Anjali Rao</p>
                  <p className="text-maroon-600">Founder & Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-maroon-100 p-3 rounded-lg mr-4">
                  <FaBullseye className="text-3xl text-maroon-700" />
                </div>
                <h2 className="text-3xl font-bold text-maroon-900 font-serif">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-maroon-800">
                <p>
                  To provide a safe, nurturing, and stimulating environment where children 
                  aged 2-6 years can develop their full potential through play-based learning, 
                  creative exploration, and positive social interactions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-maroon-600 mt-1 mr-3" />
                    Foster a love for learning through joyful experiences
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-maroon-600 mt-1 mr-3" />
                    Develop social, emotional, and cognitive skills
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-maroon-600 mt-1 mr-3" />
                    Build strong foundations for future academic success
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-maroon-600 mt-1 mr-3" />
                    Partner with parents in their child's development journey
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-maroon-100 p-3 rounded-lg mr-4">
                  <FaStar className="text-3xl text-maroon-700" />
                </div>
                <h2 className="text-3xl font-bold text-maroon-900 font-serif">
                  Our Vision
                </h2>
              </div>
              <div className="space-y-4 text-maroon-800">
                <p>
                  To be the most trusted preschool in Kachinayakanahalli, recognized for 
                  excellence in early childhood education and for nurturing confident, 
                  curious, and compassionate young learners ready to embrace the world.
                </p>
                <p className="font-semibold">
                  We envision a community where:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaChild className="text-maroon-600 mt-1 mr-3" />
                    Every child discovers their unique strengths and interests
                  </li>
                  <li className="flex items-start">
                    <FaTree className="text-maroon-600 mt-1 mr-3" />
                    Learning happens both indoors and in nature
                  </li>
                  <li className="flex items-start">
                    <FaBook className="text-maroon-600 mt-1 mr-3" />
                    Reading, creating, and exploring are daily joys
                  </li>
                  <li className="flex items-start">
                    <FaUsers className="text-maroon-600 mt-1 mr-3" />
                    Children learn to cooperate, share, and respect others
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-2xl mx-auto">
              The guiding principles that shape everything we do at Today Little Preschool
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-maroon-50 to-white rounded-xl hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-maroon-700 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-maroon-900 font-serif mb-4">
                  {value.title}
                </h3>
                <p className="text-maroon-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Our Educational Philosophy
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {philosophyPoints.map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4 mt-1">
                      <FaStar className="text-sm" />
                    </div>
                    <p className="text-maroon-800">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-maroon-200">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                  Our Approach to Learning
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-maroon-50 rounded-lg">
                    <h4 className="font-bold text-maroon-900 mb-2">Play-Based Learning</h4>
                    <p className="text-sm text-maroon-700">Learning through structured and free play</p>
                  </div>
                  <div className="text-center p-6 bg-maroon-50 rounded-lg">
                    <h4 className="font-bold text-maroon-900 mb-2">Child-Centered</h4>
                    <p className="text-sm text-maroon-700">Curriculum tailored to individual needs</p>
                  </div>
                  <div className="text-center p-6 bg-maroon-50 rounded-lg">
                    <h4 className="font-bold text-maroon-900 mb-2">Holistic Growth</h4>
                    <p className="text-sm text-maroon-700">Balancing all areas of development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Our Commitment
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-maroon-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                  To Every Child
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaChild className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Personalized attention and care</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaBook className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Age-appropriate learning materials</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaTree className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Safe and stimulating environment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaUsers className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Opportunities for social interaction</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-maroon-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                  To Every Parent
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Regular progress updates</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaHandsHelping className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Open communication channels</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaHeart className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Peace of mind about child's safety</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-maroon-600 text-white p-2 rounded-full mr-4">
                      <FaGraduationCap className="text-sm" />
                    </div>
                    <p className="text-maroon-800">Partnership in child's development</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      {/* <section className="py-16 bg-gradient-to-r from-maroon-800 to-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-serif mb-4 text-white">
                Visit Our Campus
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
              <p className="text-lg max-w-2xl mx-auto text-maroon-100">
                Come see our facilities and meet our team
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <FaMapMarkerAlt className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif mb-3 text-white">Location</h3>
                <p className="text-maroon-100">
                  Today Little Preschool<br />
                  Kachinayakanahalli<br />
                  Near Community Park<br />
                  Bangalore - 560077
                </p>
              </div>
              
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <FaPhone className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif mb-3 text-white">Contact</h3>
                <p className="text-maroon-100">
                  <strong>Phone:</strong> +91 98765 43210<br />
                  <strong>Email:</strong> info@todaylittlepreschool.com
                </p>
              </div>
              
              <div className="text-center p-8 bg-white/10 backdrop-blur-sm rounded-xl">
                <FaClock className="text-4xl text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold font-serif mb-3 text-white">Hours</h3>
                <p className="text-maroon-100">
                  <strong>Monday - Friday:</strong><br />
                  8:30 AM - 12:30 PM<br />
                  <strong>Saturday:</strong><br />
                  9:00 AM - 11:00 AM (Activities)
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;