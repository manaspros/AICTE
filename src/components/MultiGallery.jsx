import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MultiGallery.css';

const MultiGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1581093458791-9f5bf9f8290a?w=500&auto=format",
            title: "Lab Equipment 1"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=500&auto=format",
            title: "Lab Equipment 2"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1581094794329-c8112c5ce661?w=500&auto=format",
            title: "Lab Equipment 3"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1581094794270-8b05f0e25af6?w=500&auto=format",
            title: "Lab Equipment 4"
        }
    ];

    return (
        <div className="multi-gallery-wrapper">
            <div className="multi-gallery-container">
                <h2 className="gallery-title">LAB Equipments</h2>
                <Slider {...settings}>
                    {images.map(image => (
                        <div key={image.id} className="multi-slide-item">
                            <img src={image.src} alt={image.title} />
                            <h3>{image.title}</h3>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MultiGallery;
