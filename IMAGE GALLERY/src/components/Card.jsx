import React, { useState } from "react";
import styles from "./Card.module.css"; // Import CSS module
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "./store/redux-store";
import Modal from "./Modal";

const Card = ({ showFavorites }) => {
  const imageData = useSelector((state) => state.image.images);
  const favImages = imageData.filter((img, index) => img.like != false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  console.log(imageData);

  const handleLike = (imageName) => {
    dispatch(toggleLike({ name: imageName }));
    console.log(imageData);
  };

  const imagesToShow = showFavorites ? favImages : imageData;

  return (
    <div className={styles["card-container"]}>
      {imagesToShow.map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <span
              className={`${styles.badge} badge-secondary ${
                item.like === true ? styles.badgeLike : ""
              }`}
              onClick={() => handleLike(item.Name)}
            >
              <CiHeart size={20} />
            </span>
            <img
              className={styles["card-img-top"]}
              src={item.src}
              alt="Card image cap"
              onClick={() => setSelectedImage(item)}
            />
            <div className={styles["card-body"]}>
              <h5 className="card-title">Image Name: {item.Name}</h5>
              <p className="card-text">Date : {item.Date}</p>
            </div>
            {selectedImage && (
              <Modal
                preview={selectedImage.src}
                setPreview={() => setSelectedImage(null)}
                imageName={selectedImage.Name}
                isLike={selectedImage.like}
              ></Modal>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
