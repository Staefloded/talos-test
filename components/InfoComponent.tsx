import { Info } from "@/utils/types";
import YoutubeEmbed from "./YoutubeEmbed";

type InfoProps = {
  info: Info;
};

const InfoComponent = ({ info }: InfoProps) => {
  console.log({ info });
  return (
    <div className="mb-10">
      <h1 className="text-2xl font-semibold">{info?.name} Explained</h1>

      {info?.descriptions?.introduction && (
        <div className="">
          <h5>
            <strong>Introduction</strong>
          </h5>
          {info?.team && (
            <div className="mt-2">
              <h5>
                <strong>Team Leader</strong>
              </h5>
              <span className="block">
                <span className="font-medium">Name</span>: {info?.team.leader?.name}
              </span>
              <span className="block">
                <span className="font-medium">Description</span>: {info?.team.leader?.description}
              </span>

              <div className="mt-2">
                <h5>
                  <strong>Members</strong>
                </h5>
                <ul>
                  {info?.team.members.map((member, idx) => (
                    <li key={idx}>
                      <span className="font-medium">Member {idx + 1}</span>: {member.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          <p className="whitespace-pre-line mt-5">{info?.descriptions?.introduction}</p>
        </div>
      )}

      <div className="mt-3">
        <h5>
          <strong>Technology behind {info?.name}</strong>
        </h5>
        <p className="whitespace-pre-line">{info?.descriptions?.technology}</p>
        {info?.descriptions?.one_sentence && (
          <p className="whitespace-pre-line mt-2">{info?.descriptions?.one_sentence}</p>
        )}
      </div>

      {info?.descriptions?.future && (
        <div className="mt-3">
          <h5>
            <strong>Future of {info?.name}</strong>
          </h5>
          <p className="whitespace-pre-line">{info?.descriptions?.future}</p>
        </div>
      )}
    </div>
  );
};

export default InfoComponent;
