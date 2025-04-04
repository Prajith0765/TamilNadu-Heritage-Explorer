import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Interests = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const interests = [
    'Beach', 'Mountains', 'Cities', 'Culture', 'Food & Wine',
    'Adventure', 'History', 'Art', 'Nature', 'Photography',
    'Wildlife', 'Architecture', 'Shopping', 'Nightlife', 'Relaxation',
    'Sports', 'Music', 'Festivals', 'Local Experience', 'Eco Tourism'
  ];

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle interests submission here
    console.log('Selected interests:', selectedInterests);
    navigate('/login');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Select Your Interests
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose the types of travel experiences you're interested in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {interests.map((interest) => (
              <button
                key={interest}
                type="button"
                onClick={() => toggleInterest(interest)}
                className={`p-3 text-sm rounded-lg border transition-all ${
                  selectedInterests.includes(interest)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          <div>
            <button
              type="submit"
              disabled={selectedInterests.length === 0}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Complete Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Interests;