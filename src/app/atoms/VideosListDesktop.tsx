import useVideoStore from "@/stores/video";
import "../components/styles.css";

const VideosListDesktop = () => {
  const { videosData, selectVideoId } = useVideoStore();

  return (
    <>
      <div className="bg-darkerGrey rounded-r-lg  h-full ">
        <div className="flex flex-col w-full h-full overflow-y-auto justify-between scrollbar-custom py-8 scroll-smooth ">
          {videosData.map((item, index) => (
            <div
              key={item.title + index}
              className="flex flex-row items-center p-4 h-full"
              onClick={() => selectVideoId(item.id)}
            >
              <img
                src={item.previewImg}
                className="rounded-md w-[40%] h-full"
              />
              <div className="w-[60%] px-4 py-1 self-start ">
                <h4 className=" truncate">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideosListDesktop;
