const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  return (
    <div className="relative overflow-hidden w-full pt-[56.25%] border-1">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding=1;"
        allowFullScreen
        title="Embedded youtube"
        className="absolute w-full h-full top-0 right-0 left-0 bottom-0 border-3"
      />
    </div>
  );
};

export default YoutubeEmbed;
