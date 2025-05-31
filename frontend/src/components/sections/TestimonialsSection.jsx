import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "JobHunt helped me land my dream job. The resume builder was a game changer!",
    name: "Sara Ahmad",
    role: "Software Developer",
  },
  {
    quote: "I love how easy it is to apply for jobs through JobHunt. Highly recommend!",
    name: "Ahmad Mohamed",
    role: "UI/UX Designer",
  },
  {
    quote: "JobHunt’s features are amazing! I got multiple offers thanks to their platform!",
    name: "Layla Youssef",
    role: "Data Analyst",
  },
  {
    quote: "The job alerts feature kept me updated with the best opportunities!",
    name: "Mahmoud Fahd",
    role: "Network Engineer",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate testimonials every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Users Say</h2>

        <div className="relative h-40 overflow-hidden">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500">
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
