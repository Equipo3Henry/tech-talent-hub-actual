import React from "react";
import styles from "./fileUploader.module.css";

const FileUploader = ({ userId }) => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedExtensions = /(\.pdf)$/i; // Modificado para aceptar solo archivos PDF
      if (!allowedExtensions.exec(file.name)) {
        alert(
          "Formato de archivo no válido. Por favor, selecciona un archivo PDF."
        );
        event.target.value = "";
      } else {
        try {
          const formData = new FormData();
          formData.append("file", file);
          formData.append(
            "upload_preset",
            process.env.CLOUDINARY_UPLOAD_PRESET
          );

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            const jsonResponse = await response.json();
            console.log("Archivo subido con éxito:", jsonResponse.url);

            // Ahora se realiza la segunda petición a tu API
            const patchResponse = await fetch(`/api/users/${userId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                cv: jsonResponse.url,
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
          } else {
            console.error(
              "Error al subir el archivo:",
              response.status,
              response.statusText
            );
          }
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
          accept=".pdf" // Modificado para aceptar solo archivos PDF
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploader;
