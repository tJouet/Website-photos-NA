import Title from "../atoms/Title";
import SelectedVideo from "../atoms/SelectedVideo";
import VideosList from "../atoms/VideosList";
import useVideoStore from "@/stores/video";

const VideoComp = () => {
  const { videosData, selectedVideoId } = useVideoStore();

  const displayVideo = videosData.find((video) => video.id === selectedVideoId);
  console.log(videosData, displayVideo);
  return (
    <>
      <Title videoUrl="/videos/samplevid.mp4" content="Videos" />
      <div className="px-12">
        <div className=" w-full flex flex-row">
          <div className="md:h-[600px] flex md:flex-row flex-col w-full justify-center ">
            <SelectedVideo src={displayVideo?.src} />
            <VideosList />
          </div>
        </div>
        <div className="md:w-[70%] w-full">
          <h3 className="pt-6">{displayVideo?.title}</h3>
          <h4 className="pt-6">{displayVideo?.type}</h4>
          <p>{displayVideo?.description}</p>
        </div>
      </div>
    </>
  );
};

export default VideoComp;
