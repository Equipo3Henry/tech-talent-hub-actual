"use client";
import { useState, useRef } from "react";
import styles from "./ImageUploader.module.css";
import Image from "next/image";
import userPhotoDefault from "../../../../app/public/assets/imagesCodes";

const ImageUploader = ({ setSelectedFile /* , form */ }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    setSelectedFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={
            imageUrl ? imageUrl : "/src/app/public/images/userPhotoDefault.png"
          } // ruta a tu imagen predeterminada
          alt="Uploaded"
          width={254}
          height={254}
          layout="fill"
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* Botón personalizado */}
      <button className={styles.buttonChangePhoto} onClick={handleButtonClick}>
        Cambiar foto
      </button>
    </>
  );
};

export default ImageUploader;
