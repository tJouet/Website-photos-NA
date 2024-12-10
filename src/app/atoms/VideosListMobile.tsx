import useVideoStore from "@/stores/video";

const VideosListMobile = () => {
  const { videosData, selectVideoId } = useVideoStore();

  return (
    <div className="snap-mandatory snap-x flex flex-row w-full overflow-x-auto scroll-smooth no-scrollbar mt-8">
      {videosData.map((item, index) => (
        <div
          key={index}
          className="snap-center shrink-0 px-4 relative"
          onClick={() => selectVideoId(item.id)}
        >
          <h4 className="absolute py-2 px-2 w-[140px] truncate drop-shadow-titleDropShadow">
            {item.title}
          </h4>
          <img
            src={item.previewImg}
            className="object-cover rounded-md h-[220px] w-[140px]"
            alt={`${item.title}`}
          />
        </div>
      ))}
    </div>
  );
};

export default VideosListMobile;
