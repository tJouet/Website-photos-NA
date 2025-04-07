import Title from "../atoms/Title";
import SelectedVideo from "../atoms/SelectedVideo";
import VideosListDesktop from "../atoms/VideosListDesktop";
import useVideoStore from "@/stores/video";
import VideosListMobile from "../atoms/VideosListMobile";

const VideoComp = () => {
  const { videosData, selectedVideoId } = useVideoStore();

  const displayVideo = videosData.find((video) => video.id === selectedVideoId);
  return (
    <>
      <Title videoUrl="/videos/live-krakatoa-purrs.mp4" content="Videos" />
      <div className="px-12">
        <div className=" w-full flex flex-row">
          <div className="md:h-[540px]  flex md:flex-row flex-col w-full justify-center items-center ">
            <SelectedVideo src={displayVideo?.src} />
            <div className="h-full w-[35%] md:block hidden ">
              <VideosListDesktop />
            </div>
          </div>
        </div>
        <div className="md:w-[70%] w-full">
          <h3 className="pt-6">{displayVideo?.title}</h3>
          <h4 className="pt-6">{displayVideo?.type}</h4>
          <p>{displayVideo?.description}</p>
        </div>
      </div>
      <div className="md:hidden block">
        <VideosListMobile />
      </div>
    </>
  );
};

export default VideoComp;
