import React from 'react';
import { User, MapPin, Heart, Settings } from 'lucide-react';

const Account = () => {
  // This would be fetched from your auth state
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    dateJoined: 'January 2024',
    interests: ['Beach', 'Mountains', 'Culture', 'Food & Wine'],
    upcomingTrips: [
      {
        destination: 'Bali, Indonesia',
        dates: 'Mar 15 - Mar 25, 2024',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
      }
    ],
    savedDestinations: [
      {
        name: 'Paris, France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
      },
      {
        name: 'Tokyo, Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 rounded-full p-4">
                <User className="h-12 w-12 text-gray-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-gray-600">Member since {user.dateJoined}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-gray-900">Travel Interests</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {user.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <Settings className="h-5 w-5" />
                <span>Account Settings</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Trips */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Trips</h3>
            {user.upcomingTrips.map((trip) => (
              <div key={trip.destination} className="flex items-center space-x-4">
                <img
                  src={trip.image}
                  alt={trip.destination}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{trip.destination}</h4>
                  <p className="text-gray-600">{trip.dates}</p>
                  <button className="mt-2 text-blue-600 hover:text-blue-700">
                    View Itinerary
                  </button>
                </div>
              </div>
            ))}
          </section>

          {/* Saved Destinations */}
          <section className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Saved Destinations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {user.savedDestinations.map((destination) => (
                <div
                  key={destination.name}
                  className="relative group rounded-lg overflow-hidden"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-center text-white">
                      <h4 className="font-semibold">{destination.name}</h4>
                      <button className="mt-2 flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>Saved</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Account;