import { useState } from "react";
import "./LifeSatisfactionPopup.css";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

// eslint-disable-next-line react/prop-types
const LifeSatisfactionPopup = ({ score, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
    onClose();  
  };

    const getGreeting = (score) => {
        if ( 0 > score >= 25){
            return "With a score of " + score + " , your current life satisfaction is at a low point, but it's a great opportunity to identify areas for positive change."
        } else if (25 > score >= 50) {
          return (
            "A score of " +
            score +
            " suggests some dissatisfaction, but you're beginning to find what brings you joy and contentment."
          );
        } else if (50 > score >= 75) {
          return (
            "At " +
            score +
            " , you're halfway to maximum life satisfaction, showing a balance between positive and negative experiences."
          );
        } else {
          return (
            "With a score of " +
            score +
            " , you're experiencing a high level of life satisfaction, enjoying many aspects of your life."
          );
        }
    };

  const shareOnSocialMedia = (platform) => {
    const text = `I scored ${score} on the Life Satisfaction test! Check it out!`;
    const url = window.location.href;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            url
          )}&title=${encodeURIComponent(text)}`,
          "_blank"
        );
        break;
      default:
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>
          {" "}
          Your life satisfaction score is: <strong>{score}</strong>{" "}
        </p>
        <h2>{getGreeting(score)}</h2>
        <div className="share-buttons">
          <p>Share ::</p>
          <button onClick={() => shareOnSocialMedia("twitter")}>
            <CiTwitter />
          </button>
          <button onClick={() => shareOnSocialMedia("facebook")}>
            <CiFacebook />
          </button>
          <button onClick={() => shareOnSocialMedia("linkedin")}>
            <CiLinkedin />
          </button>
        </div>
        <button className="close-button" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LifeSatisfactionPopup;
