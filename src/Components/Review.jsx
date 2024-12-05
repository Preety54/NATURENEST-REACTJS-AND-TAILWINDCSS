import React from 'react'


const Review = () => {
    const reviews = [
        {
          id: 1,
          name: "Seema Agarwal",
          feedback: "Nature Nest transformed my home into a green sanctuary! Their plants are healthy and eco-friendly. Highly recommend!",
          image: "https://cdn.siasat.com/wp-content/uploads/2023/07/Samantha-Ruth-Prabhu-21.jpg", // Replace with actual image URL
        },
        {
          id: 2,
          name: "Akshat Goenka",
          feedback: "I love the sustainable products and expert guidance. Nature Nest is my go-to for all things green!",
          image: "https://e1.pxfuel.com/desktop-wallpaper/378/679/desktop-wallpaper-darshan-raval-thumbnail.jpg", // Replace with actual image URL
        },
        {
          id: 3,
          name: "Ragini Baruah",
          feedback: "The best place for nature lovers! The quality of their plants and decor is unmatched.",
          image: "https://filmfare.wwmindia.com/content/2024/aug/sharvariwaghinspiration11725098597.jpg", // Replace with actual image URL
        },
      ];

  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
            <p className="text-gray-600 italic">"{review.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
