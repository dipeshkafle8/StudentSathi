import React from "react";
import Testimonial from "./Testimonial";
import aryan from "./images/aryan.jpeg";
import siddharth from "./images/siddharth.jpeg";

const testimonialsData = [
  {
    name: "Barsha Rai",
    text:
      "Student Sathi has been a game-changer for my academic journey. The resources and support provided are top-notch!",
    image: siddharth
  },
  {
    name: "Sidhharth Bista",
    text:
      "Thanks to Student Sathi, I was able to find the perfect study group and improve my grades significantly.",
    image: aryan
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-section mt-14 mb-16">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Users Say
      </h2>
      <p className="text-center font-[500] px-24">
        Our students, featured on our college website, express their genuine
        experiences, showcasing a vibrant community of learners who thrive in a
        supportive and enriching academic environment.
      </p>
      <div className="flex justify-center gap-x-20 mt-20">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            imge={testimonial.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
