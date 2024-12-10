const SelectedVideo = ({ src }: { src?: string }) => {
  if (!src) {
    return null;
  }
  return (
    <>
      <div className="flex flex-col md:w-[65%] h-full">
        <video
          className="w-full h-full object-cover"
          controls
          key={src}
          autoPlay
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default SelectedVideo;
