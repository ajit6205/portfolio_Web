import FileInput from "./FileInput";
import FileUploadButton from "./FileUploadButton";
import { uploadtocloudinary } from "../utils/cloudinary";

import React, { useRef, useState } from "react";

const FileUploader = () => {
  const fileInputRef = useRef(null);

  const [imageUrl, setImageUrl] = useState(""); // 👈 uploaded image ka link store karenge
  const [loading, setLoading] = useState(false);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const data = await uploadtocloudinary(file);
      console.log("cloudinary response : ", data);

      if (data.secure_url) {
        setImageUrl(data.secure_url); // 👈 URL state me save kar do
      } else {
        alert(`Upload failed: ${data.error?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.log("Upload failed :", error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <FileInput ref={fileInputRef} onChange={handleFileChange} />
        <FileUploadButton onClick={handleClick} />

        {loading && <p className="text-blue-600">Uploading...</p>}

        {imageUrl && (
          <div className="mt-4">
            <p className="text-green-600">Uploaded Successfully ✅</p>
            <img
              src={imageUrl}
              alt="Uploaded preview"
              className="w-64 h-64 object-cover rounded-lg shadow"
            />
          </div>
        )}
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center gap-4">
        <FileInput ref={fileInputRef} onChange={handleFileChange} />
        <FileUploadButton onClick={handleClick} />

        {loading && <p className="text-blue-600">Uploading...</p>}

        {imageUrl && (
          <div className="mt-4">
            <p className="text-green-600">Uploaded Successfully ✅</p>
            <img
              src={imageUrl}
              alt="Uploaded preview"
              className="w-64 h-64 object-cover rounded-lg shadow"
            />
          </div>
        )}
      </div>
      
    </>
  );
};

export default FileUploader;
