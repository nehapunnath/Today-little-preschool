import { 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaRegCalendarCheck,
  FaCamera,
  FaMusic,
  FaPalette,
  FaTrophy,
  FaBook,
  FaTree,
  FaStar,
  FaCheckCircle
} from 'react-icons/fa';

const Events = () => {
  // Past Events (Already Finished)
  const pastEvents = [
    {
      id: 1,
      title: "Annual Sports Day 2023",
      date: "December 15, 2023",
      time: "9:00 AM - 12:00 PM",
      location: "Preschool Playground",
      description: "A fun-filled day of races, games, and sports activities for children. Parents were invited to cheer for their little athletes. Medals and certificates were awarded to all participants.",
      image: "https://www.techsix.in/wp-content/uploads/2025/01/Step-by-Step-Guide-to-Preschool-Enrollment-for-Parents.jpg",
      category: "Sports",
      participants: "All age groups",
      status: "Completed",
      highlights: ["Fun races", "Team games", "Prize distribution", "Parent participation"],
      gallery: ["https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80", "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80"]
    },
    {
      id: 2,
      title: "Grandparents Day Celebration",
      date: "November 22, 2023",
      time: "10:00 AM - 11:30 AM",
      location: "Main Hall",
      description: "A special day dedicated to grandparents. Children performed songs, dances, and presented handmade gifts. Grandparents shared stories and participated in fun activities.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80",
      category: "Family",
      participants: "Children with grandparents",
      status: "Completed",
      highlights: ["Cultural performances", "Story sharing", "Gift giving", "Photo booth"],
      gallery: ["https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"]
    },
    {
      id: 3,
      title: "Diwali Festival Celebration",
      date: "November 10, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Preschool Campus",
      description: "Traditional celebration with diya decoration, rangoli competition, and sweets distribution. Children dressed in traditional attire and learned about the festival of lights.",
      image: "https://www.brookings.edu/wp-content/uploads/2017/10/es_10192017_cascio.jpg?quality=75&w=1500",
      category: "Cultural",
      participants: "All children",
      status: "Completed",
      highlights: ["Rangoli competition", "Diya decoration", "Traditional sweets", "Cultural dress"],
      gallery: ["https://images.unsplash.com/photo-1605727216801-e27ce1c0c5f9?w=800&q=80", "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80"]
    },
    {
      id: 4,
      title: "Christmas Celebration",
      date: "December 20, 2023",
      time: "9:30 AM - 11:30 AM",
      location: "Main Hall",
      description: "Festive celebration with Santa visit, carol singing, and gift exchange. Children enjoyed Christmas crafts and shared joy with their friends.",
      image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80",
      category: "Festival",
      participants: "All children",
      status: "Completed",
      highlights: ["Santa visit", "Carol singing", "Gift exchange", "Christmas crafts"],
      gallery: ["https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80"]
    },
    
   
  ];

  // Upcoming Events
  const upcomingEvents = [

    {
      id: 8,
      title: "Art Exhibition & Sale",
      date: "April 12, 2024",
      time: "10:00 AM - 1:00 PM",
      location: "Art Room & Display Area",
      description: "Display and sale of children's artwork. All proceeds go to charity. Parents and community members can purchase their child's artwork.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      category: "Art & Creativity",
      participants: "All children",
      registration: "Art submission required",
      highlights: ["Art display", "Charity sale", "Artist certificates", "Creative workshops"],
      deadline: "April 8, 2024"
    },
    
    {
      id: 10,
      title: "Annual Day Celebration",
      date: "April 26, 2024",
      time: "5:00 PM - 7:00 PM",
      location: "Community Hall",
      description: "The biggest event of the year! Children perform dances, skits, and songs. Awards ceremony and cultural performances. All parents and family members invited.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      category: "Cultural",
      participants: "All children",
      registration: "Performance participation required",
      highlights: ["Cultural performances", "Award ceremony", "Costume parade", "Professional photography"],
      deadline: "April 15, 2024"
    },
    {
      id: 11,
      title: "Parent-Teacher Meeting",
      date: "May 10, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Respective Classrooms",
      description: "Quarterly meeting to discuss your child's progress, achievements, and areas for improvement. One-on-one sessions with class teachers.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
      category: "Academic",
      participants: "Parents & Teachers",
      registration: "Time slot booking required",
      highlights: ["Progress review", "Goal setting", "Portfolio viewing", "Q&A session"],
      deadline: "May 8, 2024"
    },
    {
      id: 12,
      title: "Field Trip to Botanical Garden",
      date: "May 17, 2024",
      time: "9:00 AM - 2:00 PM",
      location: "City Botanical Garden",
      description: "Educational field trip to explore nature and learn about different plants and flowers. Guided tour with interactive learning activities.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
      category: "Educational",
      participants: "UKG Students",
      registration: "Required with consent form",
      highlights: ["Guided tour", "Nature exploration", "Plant identification", "Picnic lunch"],
      deadline: "May 10, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-maroon-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-white">
              Events & Activities
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-8 text-maroon-100">
              Celebrating Learning, Fun, and Togetherness
            </p>
            <p className="text-lg max-w-3xl mx-auto text-maroon-100">
              Relive past memories and join us for upcoming exciting events at Little Vile Preschool
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Memorable Events
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Wonderful memories from events we've celebrated together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-maroon-100">
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
               
                 
                </div>

                {/* Event Content */}
                <div className="p-8">
                  {/* Event Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                      {event.title}
                    </h3>
                    
                    {/* Event Date & Location */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-maroon-700">
                        <FaCalendarAlt className="text-maroon-600 mr-3" />
                        <div>
                          <p className="font-semibold">{event.date}</p>
                          <p className="text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-maroon-700">
                        <FaMapMarkerAlt className="text-maroon-600 mr-3" />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-sm">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Event Description */}
                    <div className="mb-6">
                      <p className="text-maroon-800 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    

                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-b from-maroon-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-maroon-900 font-serif mb-4">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-maroon-600 mx-auto mb-8"></div>
            <p className="text-lg text-maroon-800 max-w-3xl mx-auto">
              Join us for these exciting upcoming events at our preschool
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-transparent hover:border-maroon-300">
                {/* Event Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-maroon-800 font-bold py-1 px-3 rounded-full text-sm">
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-600 text-white font-bold py-1 px-3 rounded-full text-sm">
                      Upcoming
                    </span>
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-8">
                  {/* Event Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-maroon-900 font-serif mb-4">
                      {event.title}
                    </h3>
                    
                    {/* Event Date & Location */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-maroon-700">
                        <FaCalendarAlt className="text-maroon-600 mr-3" />
                        <div>
                          <p className="font-semibold">{event.date}</p>
                          <p className="text-sm">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center text-maroon-700">
                        <FaMapMarkerAlt className="text-maroon-600 mr-3" />
                        <div>
                          <p className="font-semibold">Location</p>
                          <p className="text-sm">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Event Description */}
                    <div className="mb-6">
                      <p className="text-maroon-800 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                  

                    
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    
    </div>
  );
};

export default Events;