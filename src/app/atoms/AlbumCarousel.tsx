interface AlbumDisplayCarousel {
  album: { title: string; description: string; images: string[] };
}

const AlbumDisplayCarousel: React.FC<AlbumDisplayCarousel> = ({ album }) => {
  return (
    <div className="relative h-[450px] w-[200px] bg-blue-400">
      {album.images.slice(0, 3).map((image, index) => (
        <>
          <p>TEST</p>
          <div
            key={index}
            className={`absolute h-[350px] w-[200px] rounded-md  ${
              index === 0
                ? "top-0 left-0 z-40 "
                : index === 1
                ? "top-4 left-4 z-30 "
                : "top-8 left-8 z-20 "
            }
            
            `}
          >
            <img
              src={image}
              className="h-full w-full object-cover rounded-md"
              alt={`${album.title} image_${index + 1}`}
            />
          </div>
        </>
      ))}
    </div>
  );
};
export default AlbumDisplayCarousel;
