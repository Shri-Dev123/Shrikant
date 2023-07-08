import React, { useEffect, useState } from "react";

const ImageDisplay = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        fetchRandomImage();
    }, []);

    const fetchRandomImage = () => {
        // Implement your logic to fetch a random image from an API or use a library here
        // For demonstration purposes, we'll use a placeholder image URL
        const randomImageUrl = "https://picsum.photos/200/300";
        setImageUrl(randomImageUrl);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {imageUrl ? (
                <img src={imageUrl} alt="Random Image" className="w-64 h-64" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
};

export default ImageDisplay;
