import React, { useRef } from "react";

const Input = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const CLOUD_NAME = "dg7tmqnb4"; // 👈 tumhara cloud name
    const UPLOAD_PRESET = "imageUpload"; // 👈 unsigned upload preset ka naam

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET); // ✅ yeh sahi key hai

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      console.log("Cloudinary response:", data);

      if (data.secure_url) {
        alert(`File uploaded successfully: ${data.secure_url}`);
      } else {
        alert(`Upload failed: ${data.error?.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h1>This is input file</h1>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload File
        </button>
      </div>
    </div>
  );
};

export default Input;
