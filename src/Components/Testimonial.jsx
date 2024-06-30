import React from "react";
import { testimonials } from "../constants"; // Assuming you have testimonials data
import Heading from "./Heading";
import Section from "./Section";
import Slider from "react-slick"; // Import react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section crosses className="px-0 py-10" id="testimonials">
      <div className="container mx-auto">
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto text-center"
          title="Testimonials"
        />
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              className="block relative p-2 sm:p-4 bg-cover bg-center bg-no-repeat w-full sm:w-72 md:w-96 lg:w-104 xl:w-120 mx-auto"
              style={{
                backgroundImage: `url(${testimonial.backgroundUrl})`,
              }}
              key={testimonial.id}
            >
              <div className="border-gradient2 relative z-10 bg-white p-4 rounded-lg shadow-lg">
                {/* Display 5 stars */}
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((star, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 fill-current ${index < testimonial.stars ? 'text-yellow-500' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2l1.12 3.31h3.61l-2.92 2.25L13.74 15 10 12.27 6.26 15l.85-5.44-2.92-2.25h3.61L10 2z"
                      />
                    </svg>
                  ))}
                </div>
                {/* Display profile picture */}
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.profilePicUrl}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-3">
                    {/* Display name */}
                    <div className="text-sm font-medium text-gray-700">{testimonial.name}</div>
                  </div>
                </div>
                {/* Display testimonial text */}
                <p className="text-sm text-gray-600">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
