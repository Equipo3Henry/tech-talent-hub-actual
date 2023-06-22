"use client";
import React, { useState } from "react";
import { uploadImage } from "../components/cloudinary/upload";

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const url = await uploadImage(selectedFile);
      setImageUrl(url);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir imagen</button>
      {imageUrl && (
        <div>
          <p>Imagen subida:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
