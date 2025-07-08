import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './image-styles.css';

// Image slider component
const Image = ({ url, limit = 5, page = 1 }) => {
  // State for images array
  const [images, setImages] = useState([]);
  // State for current slide index
  const [currentSlides, setCurrentSlides] = useState(0);
  // State for error message
  const [errorMsg, setErrorMsg] = useState(null);
  // State for loading status
  const [loading, setLoading] = useState(false);

  // Go to previous image, wrap around if at start
  function handlePrevious() {
    setCurrentSlides(currentSlides === 0 ? images.length - 1 : currentSlides - 1)
  }

  // Go to next image, wrap around if at end
  function handleNext() {
    setCurrentSlides(currentSlides === images.length - 1 ? 0 : currentSlides + 1)
  }

  // Fetch images from API
  async function fetchImages(getUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data)
        setLoading(false)
      }

    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false);
    }
  }

  // Fetch images on mount or when url changes
  useEffect(() => {
    if (url !== " ") fetchImages(url)
  }, [url]);
  console.log(images)

  // Show loading message
  if (loading) {
    return <div>Loading data! Please Wait...</div>
  };

  // Show error message
  if (errorMsg !== null) {
    return <div>Error Occured!!!</div>
  }

  return (
    <div className='container'>
      {/* Left arrow for previous image */}
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious} />
      {/* Render images, only show current image */}
      {images && images.length ? images.map((imageItem, index) => (
        <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className={currentSlides === index ? "current-image" : "current-image hide-current-image"}
        />
      )) : null}
      {/* Right arrow for next image */}
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext} />
      {/* Circle indicators for each image */}
      <span className='circle-indicators'>
        {images && images.length ? images.map((_, index) => (
          <button
            key={index}
            className={currentSlides === index ? "current-indicator" : "current-indicator inactive"}
            onClick={() => setCurrentSlides(index)}
          ></button>
        )) : null}
      </span>
    </div>
  )
}

export default Image