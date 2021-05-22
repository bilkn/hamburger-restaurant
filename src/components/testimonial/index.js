import React from 'react';

export default function Testimonial({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

Testimonial.Wrapper = function TestimonialWrapper({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
};

Testimonial.Text = function TestimonialText({ children, ...rest }) {
  return <p {...rest}>{children}</p>;
};

Testimonial.Img = function TestimonialImg({ src, alt, ...rest }) {
  return <img src={src} alt={alt} {...rest} />;
};