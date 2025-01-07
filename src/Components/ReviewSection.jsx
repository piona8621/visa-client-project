import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg', // Replace with actual image URL
      rating: 4.5,
      feedback:
        'The visa application process was smooth and straightforward. Highly recommend!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://www.shutterstock.com/image-vector/portrait-young-beautiful-hipster-asian-600nw-1562341102.jpg', // Replace with actual image URL
      rating: 5,
      feedback:
        'Excellent service! I got my visa approved faster than expected. Great experience!',
    },
    {
      id: 3,
      name: 'Alex Brown',
      avatar: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg', // Replace with actual image URL
      rating: 4,
      feedback:
        'Good service overall, though there was a slight delay in communication. Still satisfied!',
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {Array.from({ length: emptyStars }, (_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <section className="mb-12 px-4">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 text-white sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-blue-800  bg-opacity-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center  mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 object-cover rounded-full border-2 border-green-600 mr-4"
              />
              <div className=''>
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex">{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className="text-red-100">{review.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
