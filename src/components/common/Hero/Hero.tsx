import { RainbowHighlight } from "@src/components/common/RainbowHighlight/RainbowHighlight";
import { useMediaQuery } from "react-responsive";
import { RoughNotationGroup } from "react-rough-notation";
export default function Hero() {
  const colors = ["#A83C32", "#84CC16", "#10B981", "#3B82F6"];
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="py-4 2xl:px-36 lg:flex lg:flex-row justify-center items-start text-center overflow-hidden">
      <div
        className={`w-full md:w-1/2 mx-auto ${
          isMobile ? `text-center` : `text-left`
        } lg:p-20`}
      >
        <RoughNotationGroup show={true}>
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-gray-200 my-2">
            Can't find photographers for your nikah?
          </h1>

          {isMobile ? (
            <h1 className="text-xl md:text-4xl font-semibold text-gray-200 my-8">
              You've come to the right place!
            </h1>
          ) : (
            <RainbowHighlight color={colors[0]}>
              <h1 className="text-2xl md:text-4xl font-semibold text-gray-200 my-8">
                You've come to the right place!
              </h1>
            </RainbowHighlight>
          )}
        </RoughNotationGroup>

        <a
          href={"/photographers"}
          className={`flex items-center mt-10 font-semibold space-x-2 w-full ${
            isMobile ? `text-center justify-center` : `text-center`
          } text-lg xl:text-xl hover:underline transform hover:translate-x-2 transition duration-300`}
        >
          <svg
            className="feather feather-search mr-2"
            fill=""
            width="16"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" x2="16.65" y1="21" y2="16.65" />
          </svg>
          Find our curated photographers here →
        </a>
      </div>

      <div className="block relative w-full md:w-1/2 -mr-20 mt-20">
        <div className="w-full lg:w-3/4">
          <img src={"/hero.jpg"} alt="avatar" className="rounded-2xl shadow" />
        </div>
      </div>
    </div>
  );
}
