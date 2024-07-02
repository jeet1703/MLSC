import React from "react";
import { testimonials } from "../constants"; // Assuming you have testimonials data
import Heading from "./Heading";
import Section from "./Section";
import Slider from "react-slick"; // Import react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StarRating = ({ stars }) => (
  <div className="flex items-center mb-3">
    {[...Array(5)].map((star, index) => (
      <svg
        key={index}
        className={`h-5 w-5 fill-current ${index < stars ? 'text-yellow-500' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="yellow"
          d="M10 2l1.12 3.31h3.61l-2.92 2.25L13.74 15 10 12.27 6.26 15l.85-5.44-2.92-2.25h3.61L10 2z"
        />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <Section   crosses className="px-0 py-10" id="Test">
      <div className="container mx-auto">
        <Heading
          className="md:max-w-md lg:max-w-2xl mx-auto text-center"
          title="Testimonials"
        />
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="block relative h-auto sm:p-4 bg-cover bg-center bg-no-repeat w-full sm:w-72 md:w-96 lg:w-104 xl:w-120 mx-auto"
              style={{ backgroundImage: `url(${testimonial.backgroundUrl})` }}
            >
              <div className="border-gradient2 relative z-10 bg-slate-900 p-4 rounded-lg shadow-lg">
                <StarRating stars={testimonial.stars} />
                <div className="flex items-center mb-3">
                  {/* <img
                    src={testimonial.profilePicUrl}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full"
                  /> */}
                  <div>
                    <div className="text-lg font-bold  text-purple-500">{testimonial.name}</div>
                  </div>
                </div>
                <p className="text-sm text-white">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Section>
  );
};

export default Testimonials;
