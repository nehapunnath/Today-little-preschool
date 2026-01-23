import { 
  FaBookOpen,
  FaBrain,
  FaHandsHelping,
  FaPalette,
  FaMusic,
  FaRunning,
  FaSeedling,
  FaCalendarAlt,
  FaGraduationCap,
  FaUserFriends,
  FaChartLine,
  FaStar,
  FaCheckCircle,
  FaClock,
  FaUserGraduate,
  FaBook,
  FaPaintBrush,
  FaTree,
  FaCalculator
} from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';

const Academics = () => {
  // Curriculum Framework
  const curriculumAreas = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Cognitive Development",
      description: "Problem-solving, logical thinking, and memory skills",
      activities: ["Puzzles & Games", "Pattern Recognition", "Memory Exercises"]
    },
    {
      icon: <FaBook className="text-3xl" />,
      title: "Language & Literacy",
      description: "Phonics, vocabulary, and early reading skills",
      activities: ["Story Time", "Phonics Games", "Rhyme & Rhythm"]
    },
    {
      icon: <FaCalculator className="text-3xl" />,
      title: "Mathematical Concepts",
      description: "Numbers, shapes, patterns, and basic operations",
      activities: ["Counting Games", "Shape Sorting", "Simple Addition"]
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Creative Arts",
      description: "Self-expression through various art forms",
      activities: ["Drawing & Painting", "Clay Modeling", "Craft Projects"]
    },
    {
      icon: <FaMusic className="text-3xl" />,
      title: "Music & Movement",
      description: "Rhythm, coordination, and musical awareness",
      activities: ["Singing Sessions", "Dance Activities", "Instrument Play"]
    },
    {
      icon: <FaRunning className="text-3xl" />,
      title: "Physical Development",
      description: "Gross and fine motor skills development",
      activities: ["Outdoor Play", "Balance Exercises", "Hand-eye Coordination"]
    }
  ];

  // Age Groups and Programs
  const ageGroups = [
    {
      age: "2 - 3 Years",
      program: "Play Group",
      focus: "Separation comfort, basic social skills, sensory exploration",
      keySkills: [
        "Social Interaction",
        "Language Foundation",
        "Motor Skills",
        "Routine Adaptation"
      ],
      dailySchedule: [
        "8:30 AM - Arrival & Free Play",
        "9:00 AM - Circle Time",
        "9:30 AM - Art & Craft",
        "10:15 AM - Snack Time",
        "10:45 AM - Outdoor Play",
        "11:30 AM - Story Time",
        "12:00 PM - Departure"
      ]
    },
    {
      age: "3 - 4 Years",
      program: "Nursery",
      focus: "Pre-writing skills, shape recognition, independent play",
      keySkills: [
        "Alphabet Recognition",
        "Number Concepts",
        "Color Identification",
        "Self-help Skills"
      ],
      dailySchedule: [
        "8:30 AM - Arrival & Circle Time",
        "9:00 AM - Language Activity",
        "9:45 AM - Math Concepts",
        "10:30 AM - Snack Break",
        "11:00 AM - Creative Arts",
        "11:45 AM - Outdoor Games",
        "12:15 PM - Story & Rhymes",
        "12:30 PM - Departure"
      ]
    },
    {
      age: "4 - 5 Years",
      program: "LKG (Lower Kindergarten)",
      focus: "Phonics, basic math, social interaction, school readiness",
      keySkills: [
        "Reading Readiness",
        "Writing Skills",
        "Basic Arithmetic",
        "Problem Solving"
      ],
      dailySchedule: [
        "8:30 AM - Arrival & Free Reading",
        "9:00 AM - Language & Phonics",
        "9:45 AM - Mathematics",
        "10:30 AM - Snack & Break",
        "11:00 AM - Science & Environment",
        "11:45 AM - Art/Music/Dance",
        "12:15 PM - Physical Education",
        "12:45 PM - Departure"
      ]
    },
    {
      age: "5 - 6 Years",
      program: "UKG (Upper Kindergarten)",
      focus: "School readiness, comprehensive skill development",
      keySkills: [
        "Reading Fluency",
        "Creative Writing",
        "Advanced Math",
        "Critical Thinking"
      ],
      dailySchedule: [
        "8:30 AM - Arrival & Silent Reading",
        "9:00 AM - Language Arts",
        "9:45 AM - Mathematics",
        "10:30 AM - Snack & Outdoor Break",
        "11:00 AM - Environmental Science",
        "11:45 AM - Computer Basics",
        "12:15 PM - Project Work",
        "12:45 PM - Review & Departure"
      ]
    }
  ];

  // Teaching Methodology
  const methodologies = [
    {
      name: "Play-Based Learning",
      description: "Learning through purposeful play activities",
      benefits: ["Enhances creativity", "Develops social skills", "Makes learning fun"]
    },
    {
      name: "Montessori Approach",
      description: "Child-led activities with prepared environment",
      benefits: ["Builds independence", "Encourages exploration", "Self-paced learning"]
    },
    {
      name: "Thematic Learning",
      description: "Integrated approach around central themes",
      benefits: ["Connects concepts", "Enhances retention", "Real-world application"]
    },
    {
      name: "Multi-Sensory Learning",
      description: "Engaging all senses in the learning process",
      benefits: ["Caters to all learners", "Improves memory", "Enhances engagement"]
    }
  ];

  // Assessment & Progress Tracking
  const assessmentMethods = [
    {
      type: "Continuous Assessment",
      description: "Ongoing observation of child's progress",
      frequency: "Daily",
      tools: ["Observation notes", "Anecdotal records", "Portfolio collection"]
    },
    {
      type: "Developmental Checklists",
      description: "Tracking milestone achievements",
      frequency: "Monthly",
      tools: ["Skill checklists", "Progress reports", "Photographic evidence"]
    },
    {
      type: "Parent-Teacher Meetings",
      description: "Regular communication about child's progress",
      frequency: "Quarterly",
      tools: ["Progress reports", "Work samples", "Goal setting"]
    },
    {
      type: "Portfolio Assessment",
      description: "Collection of child's work over time",
      frequency: "Term-wise",
      tools: ["Art work", "Writing samples", "Project work"]
    }
  ];

  // Special Programs
  const specialPrograms = [
    {
      icon: <FaSeedling className="text-2xl" />,
      title: "Green Garden Program",
      description: "Environmental awareness and gardening activities"
    },
    {
      icon: <FaHandsHelping className="text-2xl" />,
      title: "Community Helpers",
      description: "Learning about different professions and community roles"
    },
    {
      icon: <FaBookOpen className="text-2xl" />,
      title: "Reading Buddies",
      description: "Older children reading with younger ones"
    },
    {
      icon: <FaPalette className="text-2xl" />,
      title: "Art Exploration Week",
      description: "Focused art activities and creative expression"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
              Our Academics
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-8 text-maroon-100">
              Nurturing Young Minds Through a Comprehensive Curriculum
            </p>
            <p className="text-lg max-w-3xl mx-auto text-maroon-100">
              At Little Vile Preschool, we believe in providing a balanced academic 
              foundation that combines structured learning with creative exploration, 
              preparing children for lifelong success.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Our Curriculum Framework
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              A holistic approach covering all aspects of early childhood development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumAreas.map((area, index) => (
              <div key={index} className="bg-maroon-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="text-maroon-700 mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-maroon-900 font-serif mb-3">
                  {area.title}
                </h3>
                <p className="text-maroon-700 mb-4">
                  {area.description}
                </p>
                <div className="border-t border-maroon-200 pt-4">
                  <p className="font-semibold text-maroon-800 mb-2">Sample Activities:</p>
                  <div className="flex flex-wrap gap-2">
                    {area.activities.map((activity, idx) => (
                      <span key={idx} className="bg-white text-maroon-700 text-sm px-3 py-1 rounded-full">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Teaching Methodology */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Teaching Methodology
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Innovative approaches that make learning engaging and effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((method, index) => (
              <div key={index} className="bg-maroon-50 rounded-xl p-6 border border-maroon-200">
                <div className="text-center mb-4">
                  <div className="text-4xl text-maroon-700 mb-4">
                    {index === 0 && "🎮"}
                    {index === 1 && "📚"}
                    {index === 2 && "🎨"}
                    {index === 3 && "👀"}
                  </div>
                  <h3 className="text-lg font-bold text-maroon-900 font-serif">
                    {method.name}
                  </h3>
                </div>
                <p className="text-maroon-700 text-sm mb-4 text-center">
                  {method.description}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-maroon-800 text-sm">Key Benefits:</p>
                  {method.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-maroon-700">
                      <FaStar className="text-yellow-500 text-xs mr-2" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Progress Tracking */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Assessment & Progress Tracking
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Comprehensive evaluation methods to monitor and support each child's development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {assessmentMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-start mb-6">
                  <div className="bg-maroon-100 text-maroon-800 p-3 rounded-lg mr-4">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-maroon-900 font-serif">
                      {method.type}
                    </h3>
                    <div className="inline-block bg-maroon-100 text-maroon-800 text-sm px-3 py-1 rounded-full mt-2">
                      {method.frequency}
                    </div>
                  </div>
                </div>
                <p className="text-maroon-700 mb-6">
                  {method.description}
                </p>
                <div>
                  <p className="font-semibold text-maroon-800 mb-3">Tools Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {method.tools.map((tool, idx) => (
                      <span key={idx} className="bg-maroon-50 text-maroon-700 text-sm px-3 py-1 rounded-full border border-maroon-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Report Sample */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                Sample Progress Report Areas
              </h3>
              <div className="w-16 h-1 bg-maroon-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-maroon-50 to-white rounded-lg">
                <FaUserGraduate className="text-3xl text-maroon-700 mx-auto mb-4" />
                <h4 className="font-bold text-maroon-900 mb-2">Academic Skills</h4>
                <p className="text-sm text-maroon-700">Language, Math, General Knowledge</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-maroon-50 to-white rounded-lg">
                <FaUserFriends className="text-3xl text-maroon-700 mx-auto mb-4" />
                <h4 className="font-bold text-maroon-900 mb-2">Social & Emotional</h4>
                <p className="text-sm text-maroon-700">Cooperation, Confidence, Self-control</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-b from-maroon-50 to-white rounded-lg">
                <FaRunning className="text-3xl text-maroon-700 mx-auto mb-4" />
                <h4 className="font-bold text-maroon-900 mb-2">Physical Development</h4>
                <p className="text-sm text-maroon-700">Motor Skills, Coordination, Health Habits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Special Programs & Activities
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Enrichment programs that complement our core curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((program, index) => (
              <div key={index} className="text-center p-8 bg-maroon-50 rounded-xl border-2 border-transparent hover:border-maroon-300 transition-all">
                <div className="text-maroon-700 mb-4 flex justify-center">
                  {program.icon}
                </div>
                <h3 className="text-lg font-bold text-maroon-900 font-serif mb-3">
                  {program.title}
                </h3>
                <p className="text-maroon-700 text-sm">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

        
        </div>
      </section>

      {/* Parent Partnership */}
      <section className="py-16 bg-maroon-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
                Parent Partnership in Learning
              </h2>
              <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
              <p className="text-lg text-maroon-800 max-w-2xl mx-auto">
                We believe in working together with parents for the child's holistic development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                  Parent Involvement Opportunities
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-maroon-800">
                    <FaCalendarAlt className="text-maroon-600 mr-4" />
                    <span>Regular Parent-Teacher Meetings</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaBookOpen className="text-maroon-600 mr-4" />
                    <span>Workshop Sessions on Child Development</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaHandsHelping className="text-maroon-600 mr-4" />
                    <span>Volunteering in Special Activities</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <FaGraduationCap className="text-maroon-600 mr-4" />
                    <span>Progress Review Sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-6">
                  Communication Channels
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-maroon-800">
                    <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4">
                      <FaCheckCircle />
                    </div>
                    <span>Daily Communication Diary</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4">
                      <FaCheckCircle />
                    </div>
                    <span>Monthly Newsletters</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4">
                      <FaCheckCircle />
                    </div>
                    <span>Parent Portal Access</span>
                  </li>
                  <li className="flex items-center text-maroon-800">
                    <div className="bg-maroon-100 text-maroon-800 p-2 rounded-lg mr-4">
                      <FaCheckCircle />
                    </div>
                    <span>WhatsApp Updates Group</span>
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

export default Academics;