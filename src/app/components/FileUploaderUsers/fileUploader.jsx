import React from "react";
import styles from "./fileUploader.module.css";
import { storage } from "../../../firebase/firebase.config"; // importa la referencia a storage que configuraste antes
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Importa las funciones necesarias de Firebase Storage

const FileUploader = ({ userId }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = /(\.pdf)$/i;
      if (!allowedExtensions.exec(file.name)) {
        alert(
          "Formato de archivo no válido. Por favor, selecciona un archivo PDF."
        );
        event.target.value = "";
      } else {
        try {
          const storageRef = ref(storage, file.name);
          const uploadTask = uploadBytesResumable(storageRef, file);

          uploadTask.then(async () => {
            const url = await getDownloadURL(storageRef);
            const patchResponse = await fetch(`/api/users/${userId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                cv: url, // usa la URL de descarga de Firebase
              }),
            });

            if (patchResponse.ok) {
              console.log("CV actualizado con éxito");
            } else {
              console.error(
                "Error al actualizar CV:",
                patchResponse.status,
                patchResponse.statusText
              );
            }
          });
        } catch (error) {
          console.error("Error al subir el archivo:", error);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <label className={styles.custum_file_upload} htmlFor="file">
        <div className={styles.icon}>{/* Tu SVG aquí */}</div>
        <div className={styles.text}>
          <span>Click to upload your CV</span>
        </div>
        <input
          type="file"
          id="file"
          accept=".pdf"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploader;
