import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
    const images = [
        "/carousel-images/0.jpg",
        "/carousel-images/1.jpg",
        "/carousel-images/2.jpg",
        "/carousel-images/3.jpg",
        "/carousel-images/4.jpg",
        "carousel-images/5.jpg",
    ];

    const [index, setIndex] = useState(0);

    const handlePrevious = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1);
    };

    const handleNext = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1);
    };

    return (
        <div>
            <img
                style={{
                    height: "500px",
                    width: "auto",
                    display: "flex",
                    justifyContent: "center",
                }}
                src={images[index]}
                alt={`Image ${index + 1}`}
            />
            <div />
            <button onClick={handlePrevious}>
                <img src="icons/leftArrow.png" alt="" />
            </button>
            <button onClick={handleNext}>
                <img src="icons/rightArrow.png" alt="" />
            </button>
        </div>
    );
};

export default Carousel;