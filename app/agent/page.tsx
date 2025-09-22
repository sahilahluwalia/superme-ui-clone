"use client";
import Link from "next/link";
import React, { useReducer } from "react";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import Accordion from "../components/accordion";
import content from "../data/payload";
import People from "../components/people";
import Image from "next/image";
import { BsPeople, BsPlus } from "react-icons/bs";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { MdArrowUpward } from "react-icons/md";
import { IoPersonCircleOutline, IoPersonOutline } from "react-icons/io5";
import { LuBookOpen, LuChefHat } from "react-icons/lu";
import { GoSidebarExpand, GoBriefcase } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import { LuSlidersHorizontal } from "react-icons/lu";
import ContentTooltip from "../components/content-tooltip";
import { cn } from "../libs/utils";
import { SlLike, SlDislike } from "react-icons/sl";
import { CiMedicalClipboard } from "react-icons/ci";
const rankedStarters = [
  {
    question: "What strategies help startups navigate macroeconomic downturns?",
    similarity_score: 0.14491054275879017,
    rank: 1,
  },
  {
    question: "What global regions excite you most for Fund II?",
    similarity_score: 0.14066466213752365,
    rank: 2,
  },
  {
    question:
      "What are the most effective ways to build investor relationships?",
    similarity_score: 0.12547065257918907,
    rank: 3,
  },
  {
    question: "What is the most important lesson you've learned as a GP?",
    similarity_score: 0.12364698822465639,
    rank: 4,
  },
  {
    question: "What are the key elements of a compelling pitch deck?",
    similarity_score: 0.11939888347414745,
    rank: 5,
  },
];

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

type MessageType = {
  userText: string;
  assistantText?: string;
}[];

const page = () => {
  const [showSidebar, toggleSidebar] = useReducer(
    (state: boolean) => !state,
    true
  );
  const [isFocused, setIsFocused] = React.useState(false);
  const [text, setText] = React.useState("");
  const [messagesList, setMessagesList] = React.useState<MessageType>([]);
  const handleSubmit = async () => {
    if (text.length === 0) return;
    const payload: { userText: string } = {
      userText: text,
    };
    setText("");
    setMessagesList((state) => [...state, payload]);
    const response = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const assistantMessage = await response.json();
    setMessagesList((state) => {
      const newState = [...state];
      newState[newState.length - 1].assistantText = assistantMessage;
      return newState;
    });
  };
  return (
    <div
    className={cn("flex flex-col gap-7 justify-center px-4 sm:px-6", {
      "lg:flex-row": showSidebar,
    })}
    >
      <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
      <div className="flex flex-col gap-4 border bg-[#FCFCFC] border-gray-200 p-4 rounded-3xl h-fit pb-10">
        <div className="flex justify-end gap-2 ">
          <button className="bg-black text-white font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-800">
            Follow
          </button>{" "}
          <button className=" hover:bg-gray-100 p-3 rounded-full">
            {" "}
            <FiUpload />
          </button>{" "}
          <button
            onClick={toggleSidebar}
            className="cursor-pointer hover:bg-gray-100 p-3 rounded-full"
          >
            <GoSidebarExpand />
          </button>
        </div>
        <div className="flex items-center flex-col justify-center gap-3 text-gray-600">
          <Image
            className="rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
            src="/people/lolita-taub.png"
            alt="Agent Image"
            width={80}
            height={80}
          />
          <h1 className="font-medium text-4xl text-gray-800">Lolita Taub</h1>
          <p className="text-gray-700 text-md w-3/4 text-center">
            GP at Ganas Ventures | $100K Pre-seed & Seed Checks | 100+ Startups
            | Fund II Goes Global | Latina VC
          </p>
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full text-gray-700 px-4 py-1 text-sm">
            <Image src="/star.svg" alt="star" width={15} height={10} />
            <p className="text-gray-700 font-medium text-xs">697k Insights</p>
          </div>
          <div className="flex items-center  font-medium flex-col sm:flex-row gap-2 sm:gap-10">
            <p className="text-sm ">70 Followers</p>
            <div className="flex items-center gap-0.5 ">
              <div className="text-sm flex -space-x-1 ">
                {/*  add ripple effect on hover */}
                  <Image
                    src="/people/andrew-jenkins.png"
                    className="rounded-full hover:transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer group inline-block -outline-offset-1 z-10"
                    alt="connection"
                    width={20}
                    height={20}
                  />

                <Image
                  src="/people/merci-victoria-grace.png"
                  className="rounded-full cursor-pointer hover:transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-block -outline-offset-1 z-10"
                  alt="connection"
                  width={20}
                  height={20}
                />
                <Image
                  src="/people/arturo-moreno.png"
                  className="rounded-full cursor-pointer hover:transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 inline-block -outline-offset-1 z-10"
                  alt="connection"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm ml-2">
                <span className="font-bold">84</span> Connections
              </p>
            </div>
            <div className="text-sm flex items-center gap-2">
              <BsPeople />
              <p>Invited by SuperMe</p>
            </div>
          </div>
        </div>
        {messagesList?.length === 0 && (
          <>
            <div className="p-4 w-3/4 mx-auto bg-white rounded-3xl border border-gray-300">
              <textarea
                value={text}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-24 resize-none outline-none p-2 text-gray-700"
                placeholder="Ask Lolita AI anything"
              ></textarea>
              <div>
                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <button className="cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-full p-2 border border-gray-200">
                      <BsPlus />
                    </button>{" "}
                    <button className="cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-full p-2 border border-gray-200">
                      <PiSlidersHorizontalLight />
                    </button>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="cursor-pointer transition-all duration-300  bg-sky-500 text-white rounded-full p-2  "
                  >
                    <MdArrowUpward />
                  </button>
                </div>
              </div>
            </div>
            {isFocused && (
              <>
                <div className=" mx-auto w-3/4 flex flex-col gap-1">
                  <p className="font-medium text-xs text-gray-600">
                    SUGGESTIONS
                  </p>
                  {rankedStarters.map((starter) => (
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setText(starter.question);
                        setIsFocused(false);
                      }}
                      className="text-left text-gray-700 pl-2 text-sm p-1 py-1.5 cursor-pointer hover:bg-gray-100 rounded-sm"
                    >
                      {starter.question}
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}
        {messagesList?.map((pair, index) => {
          return (
            <ChatMessageComponent
              userContent={pair.userText}
              assistantContent={pair.assistantText}
            />
          );
        })}
        {messagesList?.length > 0 && (
          <>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4"></div>

              <div className="flex items-center p-2 gap-2 border border-gray-200 rounded-lg">
                
              <button className="cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-full p-2 border border-gray-200">
                      <BsPlus />
                    </button>{" "}
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  className="w-full h-10 focus:outline-none text-gray-700  px-2"
                  placeholder="Ask a follow up"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-sky-500 cursor-pointer text-white rounded-full p-2 mr-2"
                >
                  <MdArrowUpward />
                </button>
              </div>
            </div>
          </>
        )}

        {text.length  === 0 && messagesList?.length === 0 && (
          <>
            <div className=" flex w-full gap-2 justify-center flex-wrap">
              <button
                onClick={() => setText("What did you work on")}
                className="w-fit flex items-center gap-1.5 border text-sm border-gray-200 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-300"
              >
                {" "}
                <IoPersonOutline /> Ask About me
              </button>
              <button
                onClick={() => setText("What do you think ")}
                className="w-fit flex items-center gap-1.5 border text-sm border-gray-200 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-300"
              >
                {" "}
                <LuBookOpen />
                Learn from my insights
              </button>
              <button className="w-fit flex items-center gap-1.5 border text-sm border-gray-200 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-300">
                {" "}
                <LuChefHat /> Jam on a problem
              </button>
            </div>
          </>
        )}
      </div>

      {!showSidebar && (
          <div className="flex flex-col gap-1.5 w-fit h-fit">
            <button
              onClick={toggleSidebar}
              className="relative group hover:bg-[#EFEAE0] rounded-full p-3 cursor-pointer"
            >
              <IoPersonCircleOutline />
              <ContentTooltip content="Profile" />
            </button>
            <button
              onClick={toggleSidebar}
              className="relative group hover:bg-[#EFEAE0]rounded-full p-3 cursor-pointer"
            >
              <GoBriefcase />
              <ContentTooltip content="Work Experience" />
            </button>
            <button
              onClick={toggleSidebar}
              className="relative group hover:bg-[#EFEAE0] rounded-full p-3 cursor-pointer"
            >
              <LuSlidersHorizontal />
              <ContentTooltip content="Timeline" />
            </button>
          </div>
      )}
      </div>
     
      

      {showSidebar && (
        <div className="flex  flex-col gap-1.5 transition-all duration-300">
          <div className="flex flex-col pt-6 px-2 gap-2">
            <h6 className="font-bold text-xl text-gray-700">New to SuperMe?</h6>
            <p className="text-gray-700 text-xs">
              Sign up to save your conversation with <span className="font-medium">Lolita!</span>
            </p>
            <button className="flex items-center bg-[#FCFCFC]  hover:bg-sky-50 cursor-pointer gap-2 border border-gray-200 rounded-full p-2.5 w-7/8">
              <Image
                src="/social/google.svg"
                alt="google"
                width={20}
                height={20}
              />
              <p className="text-sm w-full text-center font-medium">Continue with Google</p>
            </button>
            <p className="text-xs text-gray-700">
              By continuing, you agree to our{" "}
              <Link href="" className="underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="border-b border-gray-200 mb-4 mt-2 "></div>
          <div className="flex flex-col gap-4">
            <Accordion
              content={content.about.content}
              type="ABOUT"
              socialLinks={content.about.links}
            />
            <Accordion type="WORK" list={content.workExperience} />
            <Accordion type="OTHER" list={content.other} />
            <Accordion type="TIMELINE" list={content.timeline} />
          </div>
          <p className="font-medium text-xs my-1 mt-5 text-gray-600">RELATED PROFILES</p>

          <div className="flex flex-col gap-2 ">
            {content.relatedProfiles.map((profile) => (
              <People
                name={profile.name}
                connection={profile.connection}
                image={profile.image}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
