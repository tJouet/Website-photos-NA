import useVideoStore from "@/stores/video";
import { useEffect } from "react";

const VideosList = () => {
  const { videosData, getVideosData, selectVideoId } = useVideoStore();

  useEffect(() => {
    getVideosData();
  }, [getVideosData]);

  return (
    <>
      <div className=" w-[25%] bg-darkerGrey rounded-r-lg py-8 h-full">
        <div className="flex flex-col w-full h-full overflow-y-auto justify-between scroll-smooth no-scrollbar">
          {videosData.map((item, index) => (
            <div
              key={item.title + index}
              className="flex flex-row items-center p-4 h-full"
              onClick={() => selectVideoId(item.id)}
            >
              <img
                src={item.previewImg}
                className="bg-blue-400 rounded-md w-[40%] h-full"
              />
              <div className="w-[60%] px-4 py-1 self-start">
                <h4 className=" truncate">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideosList;
