import { CiMedicalClipboard } from "react-icons/ci";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import Image from "next/image";

const ChatMessageComponent = ({
  userContent,
  assistantContent,
}: {
  userContent: string;
  assistantContent?: string;
}) => {
  return (
    <>
      {
        <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-xl ">
          <p className="font-medium text-xl text-gray-700">{userContent}</p>

          {!assistantContent && (
            <>
              <Image
                className="animate-spin  rounded-full"
                src="/star.svg"
                alt="star"
                width={15}
                height={10}
              />
            </>
          )}
          {assistantContent && (
            <>
              <p className="text-base text-gray-700">
                {assistantContent && assistantContent}
              </p>
              <div className="border-b border-gray-200 -mx-4"></div>
              <div className="flex items-center justify-end gap-2">
                <button className="hover:bg-gray-100 rounded-full  p-2 cursor-pointer">
                  <SlLike className=" text-gray-500 " />
                </button>

                <button className="hover:bg-gray-100 rounded-full  p-2 cursor-pointer">
                  <SlDislike className="text-gray-500" />
                </button>
                <button className="hover:bg-gray-100 rounded-full  p-2 cursor-pointer">
                  <CiMedicalClipboard className="text-gray-500" />
                </button>
              </div>
            </>
          )}
        </div>
      }
    </>
  );
};

export default ChatMessageComponent;
