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
      <div className="w-full flex flex-row justify-between px-16 mt-6">
        <p className="text-[32px]">{album?.title}</p>

        <button onClick={() => handleSelectedAlbum(null)}>Click here</button>
      </div>
    </>
  );
};

export default FullAlbumDisplay;
