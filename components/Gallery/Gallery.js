import ImageGallery from "react-image-gallery";
import { Box, Button, useMediaQuery } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteImage, getAllImages } from "../../api/gallery-api";
import { toast } from "react-toastify";
import CustomError from "../SharedComponents/Elements/CustomError";
import LoadingProgress from "../SharedComponents/UI/LoadingProgress";

const DUMMY_IMAGES = [
  {
    original: "https://picsum.photos/id/1018/600/1000/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export default function Gallery({ isAdmin }) {
  // ONLINE - remove this return

  const [selectedImageName, setSelectedImageName] = useState("");
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSrc, setCurrentSrc] = useState("");

  // // For fetching images
  // const { data, isLoading, error } = useQuery(["get-images"], getAllImages);
  //
  // // For delete
  // const {
  //   data: responseData,
  //   error: responseError,
  //   isFetching,
  //   refetch,
  //   isSuccess: responseIsSuccess,
  // } = useQuery(["deleteImage"], () => deleteImage(selectedImageName), {
  //   enabled: false,
  // });
  //
  // if (responseError) toast.error(responseError.message);
  // if (responseIsSuccess) toast.success(responseData.message);

  // if (error) return <CustomError errorMessage={error.message} />;
  // if (isLoading) return <LoadingProgress />;

  //
  // if (data && data.length !== 0) {
  //   let images = [];
  //   data.map((el) =>
  //       images.push({
  //         original: el.fullHD,
  //         thumbnail: el.thumbnail,
  //       })
  //   );
  //   setImages(images);
  // }

  const selectImageHandler = (e) => {
    const imgSrc = e.target.src;
    setCurrentSrc(imgSrc);
    // extract image name from src
    const imgName = "--extracted-image-name--";
    setSelectedImageName(imgName);
  };

  return (
    <>
      <Box sx={{ p: 4, pt: 8 }}>
        {isAdmin && (
          <LoadingButton
            color={"error"}
            // loading={isFetching}
            variant="contained"
            endIcon={<DeleteForeverIcon sx={{ mr: 1 }} />}
            // onClick={() => refetch()}
            sx={{ zIndex: 1000, mr: 2 }}
          />
        )}
        <Button variant={"contained"} sx={{ zIndex: 1000, mr: 2 }}>
          <a
            href={currentSrc}
            download
            style={{ textDecoration: "none", color: "white" }}
          >
            دانلود تصویر
          </a>
        </Button>
        <Box sx={{ mt: isAdmin ? -5 : 1 }}>
          <ImageGallery items={DUMMY_IMAGES} onMouseOver={selectImageHandler} />
        </Box>
      </Box>
    </>
  );
}
