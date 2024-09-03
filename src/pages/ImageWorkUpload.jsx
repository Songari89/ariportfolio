import React, { useState } from "react";
import styles from "./ImageWorkUpload.module.css";
import { v4 as uuidv4 } from "uuid";
import { addImageWork, uploadImage } from "../apls/firebase";

export default function ImageWorkUpload() {
  const [preFile, setPreFile] = useState(null);
  const [file, setFile] = useState(null);
  const [list, setList] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    uploadImage({ id, file: preFile, category: "previewfile" }).then(
      (preViewImageURL) => {
        uploadImage({ id, file, category: "imagefile" }).then((imageURL) => {
          addImageWork({ list, id, preViewImageURL, imageURL }).then(() => {
            setPreFile(null);
            setFile(null);
            setList({});
          });
        });
      }
    );
  };
  const handleChange = (e) => {

    const { name, value, files } = e.target;
    if (name === "prefile") {
   
      setPreFile(files && files[0]);
    
      return;
    } else if (name === "file") {
 
      setFile(files && files[0]);

      return;
    }
    setList({ ...list, [name]: value });
  };

  return (
    <div>
      <div className={styles.imagecontainer}>
        {preFile && (
          <img
            className={styles.uploadimage}
            src={URL.createObjectURL(preFile)}
            alt="프리뷰"
          />
        )}
        {file && (
          <img
            className={styles.uploadimage}
            src={URL.createObjectURL(file)}
            alt="이미지작업"
          />
        )}
      </div>
      <form className={styles.form}>
        <input
          type="file"
          id="prefile"
          accept="image/*"
          name="prefile"
          className={styles.file}
          onChange={handleChange}
          required
        />
        <label htmlFor="prefile" className={styles.label}>
          upload(preview)
        </label>
        <input
          type="file"
          id="file"
          accept="image/*"
          name="file"
          className={styles.file}
          onChange={handleChange}
          required
        ></input>
        <label htmlFor="file" className={styles.label}>
          upload
        </label>
        <input
          type="text"
          name="title"
          placeholder="title"
          className={styles.input}
          onChange={handleChange}
          value={list.title ?? ""}
          required
        />

        <input
          type="text"
          name="tool"
          placeholder="tool"
          className={styles.input}
          onChange={handleChange}
          value={list.tool ?? ""}
          required
        />
        <input
          type="text"
          name="homepage"
          placeholder="homepageURL"
          className={styles.input}
          onChange={handleChange}
          value={list.homepage ?? ""}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description ,로 라인 구분하기"
          className={styles.des}
          onChange={handleChange}
          value={list.description ?? ""}
          required
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
