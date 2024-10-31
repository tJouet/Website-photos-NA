"use client";

import { useAppContext } from "@/AppContext";
import { Modal } from "@/app/components";

interface FullAlbumDisplay {
  id: number;
}

const FullAlbumDisplay: React.FC<FullAlbumDisplay> = ({ id }) => {
  const { handleSelectedAlbum, getAlbumById, handleModal, selectedPicture } =
    useAppContext();
  const album = getAlbumById(id);

  return (
    <>
      {selectedPicture && <Modal content={selectedPicture} />}
      <div className="w-full mt-6 md:px-16 px-6">
        <div className="w-full flex flex-row justify-between ">
          <p className="text-[32px]">{album?.title}</p>
          <button onClick={() => handleSelectedAlbum(null)}>Click here</button>
        </div>
        <div className="w-full flex flex-row flex-wrap gap-6 mt-8 justify-start">
          {album?.images.map((image, index) => (
            <img
              onClick={(e) => handleModal(image, { x: e.pageX, y: e.pageY })}
              key={index}
              className="md:max-h-[120px] md:max-w-[120px] max-h-[90px] max-w-[90px] object-contain overflow-hidden"
              src={image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FullAlbumDisplay;
