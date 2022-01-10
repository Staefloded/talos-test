import { Video } from "@/utils/types";
import YoutubeEmbed from "./YoutubeEmbed";

type InfoProps = {
  video: Video;
};

const VideoComponent = ({ video }: InfoProps) => {
  console.log({ video });
  return (
    <>
      {video?.video_id && (
        <div className="mt-10 ">
          <h3 className="font-medium text-xl mb-3">Video Summary</h3>
          <div className="max-w-lg w-full">
            <YoutubeEmbed embedId={video?.video_id} />
          </div>

          <p className="whitespace-pre-line">{video?.description}</p>
        </div>
      )}
    </>
  );
};

export default VideoComponent;
