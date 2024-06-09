import React, { useState } from "react";
import "../styles/ImageWithBookmark.css";

const ImageWithBookmark = ({ src }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="image-container">
      <img src={src} alt="Image" className="image" />
      <button onClick={toggleBookmark} className="bookmark-button">
        {bookmarked ? (
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#30c8ff"
              stroke="none"
            >
              <path d="M798 4783 c-14 -9 -31 -27 -37 -40 -8 -17 -11 -657 -11 -2162 0 -2129 0 -2138 20 -2164 27 -34 79 -51 114 -37 15 5 395 263 844 572 449 309 824 562 832 562 8 0 383 -253 833 -562 450 -310 829 -567 844 -573 34 -13 86 5 113 38 20 26 20 35 20 2164 0 1636 -3 2144 -12 2164 -26 58 85 55 -1800 55 -1597 -1 -1735 -2 -1760 -17z m3362 -2143 c0 -1072 -2 -1950 -5 -1950 -3 0 -352 239 -776 530 -425 292 -783 533 -797 537 -14 3 -38 1 -53 -4 -15 -6 -372 -247 -793 -537 -421 -289 -767 -526 -770 -526 -4 0 -6 878 -6 1950 l0 1950 1600 0 1600 0 0 -1950z" />
              <path d="M1278 4354 c-15 -8 -32 -23 -38 -34 -7 -12 -10 -523 -10 -1550 l0 -1532 29 -29 c23 -23 38 -29 71 -29 52 0 76 13 95 50 13 25 15 212 15 1544 0 1153 -3 1521 -12 1541 -23 50 -95 69 -150 39z" />
              <path d="M3731 4356 c-53 -29 -50 51 -51 -1559 0 -1629 -3 -1539 55 -1565 47 -21 94 -15 126 17 l29 29 0 1512 c0 1017 -3 1518 -10 1531 -23 43 -101 61 -149 35z" />
            </g>
          </svg>
        ) : (
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#000000"
              stroke="none"
            >
              <path d="M798 4783 c-14 -9 -31 -27 -37 -40 -8 -17 -11 -657 -11 -2162 0 -2129 0 -2138 20 -2164 27 -34 79 -51 114 -37 15 5 395 263 844 572 449 309 824 562 832 562 8 0 383 -253 833 -562 450 -310 829 -567 844 -573 34 -13 86 5 113 38 20 26 20 35 20 2164 0 1636 -3 2144 -12 2164 -26 58 85 55 -1800 55 -1597 -1 -1735 -2 -1760 -17z m3362 -2143 c0 -1072 -2 -1950 -5 -1950 -3 0 -352 239 -776 530 -425 292 -783 533 -797 537 -14 3 -38 1 -53 -4 -15 -6 -372 -247 -793 -537 -421 -289 -767 -526 -770 -526 -4 0 -6 878 -6 1950 l0 1950 1600 0 1600 0 0 -1950z" />
              <path d="M1278 4354 c-15 -8 -32 -23 -38 -34 -7 -12 -10 -523 -10 -1550 l0 -1532 29 -29 c23 -23 38 -29 71 -29 52 0 76 13 95 50 13 25 15 212 15 1544 0 1153 -3 1521 -12 1541 -23 50 -95 69 -150 39z" />
              <path d="M3731 4356 c-53 -29 -50 51 -51 -1559 0 -1629 -3 -1539 55 -1565 47 -21 94 -15 126 17 l29 29 0 1512 c0 1017 -3 1518 -10 1531 -23 43 -101 61 -149 35z" />
            </g>
          </svg>
        )}
      </button>
    </div>
  );
};

export default ImageWithBookmark;
