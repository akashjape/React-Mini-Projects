import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.css";
import { addImage, dateSort, nameSort } from "./store/redux-store";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [preview, setPreview] = useState(null);

  const handleFileSave = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(
        addImage({
          Name: file.name,
          src: imageUrl,
          Date: new Date().toLocaleDateString("en-GB"),
          like: false,
        })
      );
    }
  };

  return (
    <div className={styles.header}>
      <h1>Image Gallery</h1>
      <ul className={styles.headerOption}>
        <li>
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li onClick={() => document.getElementById("inputFile").click()}>
          Add
        </li>
        <input
          type="file"
          accept="image/*"
          id="inputFile"
          style={{ display: "none" }}
          onChange={handleFileSave}
        />
        <li>
          <Link to="/fav" className="custom-link">
            Favorites
          </Link>
        </li>
        <li>
          Sort By :
          <select
            defaultValue="default"
            onChange={(e) => {
              if (e.target.value === "name") dispatch(nameSort());
              if (e.target.value === "date") dispatch(dateSort());
            }}
          >
            <option value="dafault">Default</option>
            <option value="name">By Name</option>
            <option value="date">By Date</option>
          </select>
        </li>
      </ul>
      {/* {preview && (
        <img src={preview} alt="imagePreview" width={{ width: "200px" }} />
      )} */}
    </div>
  );
};

export default Header;
