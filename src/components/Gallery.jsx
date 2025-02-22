import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Gallery.css';

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const images = [
        {
            id: 1,
            src: "https://plus.unsplash.com/premium_photo-1683143686252-f2693a0910e6?q=80&w=1932&auto=format&fit=crop",
            title: "Laboratory Equipment"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1770&auto=format&fit=crop",
            title: "Research Center"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop",
            title: "Innovation Hub"
        }
    ];

    return (
        <div className="gallery-wrapper">
            <div className="gallery-container">
                <Slider {...settings}>
                    {images.map(image => (
                        <div key={image.id} className="slide-item">
                            <img src={image.src} alt={image.title} />
                            <h3>{image.title}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;
