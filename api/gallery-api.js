import axios from "axios";

export async function getAllImages() {
  const response = await axios.get("/images");
  return response.data;
}

export async function deleteImage(imageName) {
  const response = await axios.delete("/gallery/" + imageName);
  return response.data;
}
