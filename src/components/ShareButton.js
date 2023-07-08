import React from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

const ShareButton = ({ imageUrl }) => {
    const shareUrl = window.location.href;

    return (
        <div className="flex flex-col md:flex-row items-center justify-center mt-4">
            <div className="flex flex-wrap gap-2.5 justify-center">
                <FacebookShareButton
                    url={shareUrl}
                    quote="Check out this image!"
                    imageUrl={imageUrl}
                >
                    <button className="share-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-4 px-4 rounded">
                        Share on Facebook
                    </button>
                </FacebookShareButton>
                <TwitterShareButton
                    url={shareUrl}
                    hashtags={["randomImage"]}
                    image={imageUrl}
                >
                    <button className="share-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-4 px-4 rounded">
                        Share on Twitter
                    </button>
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} image={imageUrl}>
                    <button className="share-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-4 px-4 rounded">
                        Share on WhatsApp
                    </button>
                </WhatsappShareButton>
            </div>
        </div>
    );
};

export default ShareButton;
