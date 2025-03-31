import { useDispatch, useSelector } from "react-redux";
import styles from "./Modal.module.css";
import { toggleLike } from "./store/redux-store";

const Modal = ({ preview, setPreview, imageName }) => {
  const dispatch = useDispatch();

  // Fetch updated like status from Redux
  const isLike = useSelector(
    (state) => state.image.images.find((img) => img.Name === imageName)?.like
  );

  const handleLike = () => {
    if (!imageName) return; // Prevent errors if imageName is undefined
    dispatch(toggleLike({ name: imageName }));
  };

  return (
    <div className="modal-backdrop">
      <div className={styles.modal}>
        <img src={preview} alt="modal preview" />
        <button
          type="button"
          className="btn btn-secondary"
          onClick={setPreview}
        >
          Close
        </button>

        <button type="button" className="btn btn-primary" onClick={handleLike}>
          {isLike ? "Liked" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
