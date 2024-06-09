import React, { useRef, useState } from 'react';
import '../styles/ImageGallery.css';

// Mock function to check if the user is authorized
const isUserAuthorized = () => {
  // Replace with actual logic to check user authentication
  return true; // or false if the user is not authorized
};

const ImageGallery = () => {
  const scrollRef = useRef(null);

  const imageUrls = [
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/reg-nine.jpg?v=1704613130460',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/odeyalopokupki.jpeg?v=1704613079278',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_7714.JPG?v=1704612930801',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/IMG_8389.jpg?v=1704613027975',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/reg-fourteen.jpg?v=1704613122184',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
    'https://cdn.glitch.global/2c984d1f-3515-4819-b14d-28af3b836b96/regthirteen.jpg?v=1704613155648',
  ];

  const [likes, setLikes] = useState(imageUrls.map(() => 0));
  const [dislikes, setDislikes] = useState(imageUrls.map(() => 0));
  const [comments, setComments] = useState(imageUrls.map(() => []));

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const handleDislike = (index) => {
    const newDislikes = [...dislikes];
    newDislikes[index] += 1;
    setDislikes(newDislikes);
  };

  const handleCommentSubmit = (index, comment) => {
    const newComments = [...comments];
    newComments[index].push(comment);
    setComments(newComments);
  };

  const handleCommentDelete = (imageIndex, commentIndex) => {
    const newComments = [...comments];
    newComments[imageIndex].splice(commentIndex, 1);
    setComments(newComments);
  };

  const userAuthorized = isUserAuthorized();

  return (
    <div className="image-gallery-container">
      <h2>Вы ищете такие фотографии?</h2>
      <p>Мы рекомендуем контент по дизайну интерьера, который вам может понравиться.</p>
      <div className="scroll-button left" onClick={() => scroll(-300)}>‹</div>
      <div className="image-gallery" ref={scrollRef}>
        {imageUrls.map((imageUrl, index) => (
          <div className="image-item" key={index}>
            <div className="image-container">
              <img src={imageUrl} alt={`Image ${index + 1}`} />
              <div className="likes-dislikes">
                <button onClick={() => handleLike(index)}>Like {likes[index]}</button>
                <button onClick={() => handleDislike(index)}>Dislike {dislikes[index]}</button>
              </div>
            </div>
            <div className="comments-section">
              {comments[index].map((comment, i) => (
                <div key={i} className="comment">
                  <p>{comment}</p>
                  {userAuthorized && (
                    <button onClick={() => handleCommentDelete(index, i)}>Delete</button>
                  )}
                </div>
              ))}
              {userAuthorized && <CommentForm index={index} onCommentSubmit={handleCommentSubmit} />}
            </div>
          </div>
        ))}
      </div>
      <div className="scroll-button right" onClick={() => scroll(300)}>›</div>
    </div>
  );
};

const CommentForm = ({ index, onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onCommentSubmit(index, comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default ImageGallery;