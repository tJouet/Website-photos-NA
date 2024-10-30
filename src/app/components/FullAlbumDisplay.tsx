"use client";
import { useContext } from "react";
import { useAppContext } from "@/AppContext";

interface FullAlbumDisplay {
  id: number;
}

const FullAlbumDisplay: React.FC<FullAlbumDisplay> = ({ id }) => {
  const { getAlbumById } = useAppContext();
  const album = getAlbumById(id);
  const { handleSelectedAlbum } = useAppContext();
  return (
    <>
      <div>
        <button onClick={() => handleSelectedAlbum(null)}>Click here</button>
        <p>Test {album?.description}</p>
      </div>
    </>
  );
};

export default FullAlbumDisplay;
