export const uploadtocloudinary = async (file) => {
  const CLOUD_NAME = "dg7tmqnb4";
  const UPLOAD_PRESET = "imageUpload";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,{
    method:"POST",
    body:formData,
  })

  const data = await res.json();
  return data;
};
