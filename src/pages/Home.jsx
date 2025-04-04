import React from 'react';
import { Search, Star, Clock } from 'lucide-react';

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Meenakshi Amman Temple, Madurai',
      image: 'https://static.toiimg.com/photo/msid-59381739,width-96,height-65.cms',
      description: 'Experience the magnificent ancient temple with its intricate sculptures and colorful gopurams.'
    },
    {
      id: 2,
      name: 'Marina Beach, Chennai',
      image: 'https://tse1.mm.bing.net/th/id/OIP.juIi_931hkjpZGSqqUyR1wHaE5?rs=1&pid=ImgDetMain',
      description: 'Visit the second-longest urban beach in the world, perfect for sunrise views and local street food.'
    },
    {
      id: 3,
      name: 'Ooty Hill Station',
      image: 'https://c0.wallpaperflare.com/preview/163/513/284/ooty-india-hills-station-nature.jpg',
      description: 'Discover the Queen of Hill Stations with its tea plantations, botanical gardens, and pleasant climate.'
    }
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Thanjavur Temple',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/6a/e5/a7/thanjavur-brihadeeshwara.jpg?w=1200&h=1200&s=1',
      rating: 4.8,
      timing: '6:00 AM - 8:00 PM',
      description: 'Visit the UNESCO World Heritage site known for its magnificent Brihadeeswara Temple.'
    },
    {
      id: 2,
      name: 'Kodaikanal',
      image: 'https://tse4.mm.bing.net/th/id/OIP.8P5jAYJryPZah1lmLQe45gHaE5?rs=1&pid=ImgDetMain',
      rating: 4.7,
      timing: 'Open 24 hours',
      description: 'Experience the Princess of Hill Stations with its misty lakes and pine forests.'
    },
    {
      id: 3,
      name: 'Rameshwaram Temple',
      image: 'https://apnayatra.com/wp-content/uploads/2023/07/Rameshwaram-Jyotirlinga-Shivam-Temple0.jpg',
      rating: 4.9,
      timing: '5:00 AM - 9:00 PM',
      description: 'Explore one of the most sacred pilgrimage sites with its magnificent corridors and spiritual atmosphere.'
    },
    {
      id: 4,
      name: 'Mahabalipuram',
      image: 'https://tse3.mm.bing.net/th/id/OIP.Et4B817kqXZus6r3MwhNtQHaEK?rs=1&pid=ImgDetMain',
      rating: 4.6,
      timing: '6:00 AM - 6:00 PM',
      description: 'Discover ancient rock-cut temples and the famous Shore Temple along the Coromandel Coast.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1200"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Tamil Nadu's Treasures
            </h1>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search destinations in Tamil Nadu..."
                className="w-full pl-12 pr-4 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations Section */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Recommended for You</h2>
          <p className="mt-4 text-lg text-gray-600">Handpicked destinations based on your interests</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((place) => (
            <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="relative">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center shadow-sm">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{place.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{place.name}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{place.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{place.timing}</span>
                </div>
                <button className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Destinations</h2>
          <p className="mt-4 text-lg text-gray-600">Explore the most popular places in Tamil Nadu</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">{destination.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;