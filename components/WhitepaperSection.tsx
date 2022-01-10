import { Whitepaper } from "@/utils/types";

type WhitePaperProps = {
  whitepaper: Whitepaper;
};

const WhitepaperSection = ({ whitepaper }: WhitePaperProps) => {
  return (
    <div>
      <div>
        <div className="mb-3 flex flex-col">
          <h2 className="text-xl font-semibold">Whitepaper</h2>
          <div className="self-end">
            <p className="text-sm">Has File: {whitepaper.has_file ? "Yes" : "No"}</p>
            <p className="text-sm">Number of pages: {whitepaper.number_of_pages}</p>
          </div>
        </div>

        {whitepaper.keywords.length === 0 ? (
          <>
            <strong>Keywords:</strong> <span>No Keywords available</span>
          </>
        ) : (
          <ul className="flex items-center capitalize gap-x-3 gap-y-1 flex-wrap ">
            <strong>Keywords:</strong>
            {whitepaper?.keywords?.map((item, idx) => (
              <li key={idx} className="bg-gray-500 px-5 py-2 rounded-2xl text-gray-100 text-sm">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-5 text-justify">
        <h3 className="text-xl font-semibold">Whitepaper Summary</h3>
        <p className="whitespace-pre-line">{whitepaper?.summary ?? "No Summary Included"}</p>
      </div>
    </div>
  );
};

export default WhitepaperSection;
