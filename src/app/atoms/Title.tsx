interface TitleProps {
  content: string;
  videoUrl?: string;
  imageUrl?: string;
}

const Title: React.FC<TitleProps> = ({ content, videoUrl, imageUrl }) => (
  <div
    className="flex flex-row w-full py-16 my-16 justify-center items-center bg-fixed bg-center bg-cover max-h-[128px] overflow-hidden"
    style={{
      backgroundImage: imageUrl && !videoUrl ? `url(${imageUrl})` : undefined,
    }}
  >
    {videoUrl && (
      <video
        autoPlay
        loop
        muted
        className="relative w-full h-full object-cover z-10 overflow-hidden scale-[1.2] "
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )}
    <h1 className="text-6xl font-bold drop-shadow-titleDropShadow absolute z-20">
      {content}
    </h1>
  </div>
);

export default Title;
