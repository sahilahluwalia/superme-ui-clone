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
const page = () => {
  const [showSidebar, toggleSidebar] = useReducer(
    (state: boolean) => !state,
    false
  );
  return (
    <div
      className={cn("flex gap-7 justify-center", {
        "flex-row": showSidebar,
      })}
    >
      <div className="flex flex-col gap-4 bg-white border border-gray-300 p-4 rounded-3xl">
        <div className="flex justify-end gap-2">
          <button className="bg-black text-white font-bold px-4 py-1 rounded-full text-sm hover:bg-gray-800 cursor-pointer">
            Follow
          </button>{" "}
          <button className="cursor-pointer hover:bg-gray-100 p-3 rounded-full">
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
        <div className="flex items-center flex-col justify-center gap-3">
          <Image
            className="rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
            src="/people/lolita-taub.png"
            alt="Agent Image"
            width={80}
            height={80}
          />
          <h1 className="font-bold text-2xl">Lolita Taub</h1>
          <p className="text-gray-700 text-md">
            GP at Ganas Ventures | $100K Pre-seed & Seed Checks | 100+ Startups
            | Fund II Goes Global | Latina VC
          </p>
          <div className="flex items-center gap-0.5 bg-gray-100 rounded-full text-gray-700 px-4 py-1 text-sm">
            <Image src="/star.svg" alt="star" width={15} height={10} />
            <p>697k Insights</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm">70 Followers</p>
            <div className="flex items-center gap-0.5">
              <div className="text-sm flex -space-x-1 overflow-hidden">
                <Image
                  src="/people/andrew-jenkins.png"
                  className="rounded-full inline-block -outline-offset-1 z-10"
                  alt="connection"
                  width={20}
                  height={20}
                />
                <Image
                  src="/people/merci-victoria-grace.png"
                  className="rounded-full inline-block -outline-offset-1 z-10"
                  alt="connection"
                  width={20}
                  height={20}
                />
                <Image
                  src="/people/arturo-moreno.png"
                  className="rounded-full inline-block -outline-offset-1 z-10"
                  alt="connection"
                  width={20}
                  height={20}
                />
              </div>
              <p className="text-sm">
                <span className="font-bold">84</span> Connections
              </p>
            </div>
            <div className="text-sm flex items-center gap-1">
              <BsPeople />
              <p>invited by SuperMe</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-white rounded-3xl border border-gray-300">
          <textarea
            className="w-full h-24 resize-none outline-none p-2 "
            placeholder="Ask me anything about the latest trends in AI, venture capital, and startups."
          ></textarea>
          <div>
            <div className="flex justify-between gap-2">
              <div className="flex items-center gap-1">
                <button className="cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-full p-2 border border-gray-300">
                  <BsPlus />
                </button>{" "}
                <button className="cursor-pointer hover:bg-gray-50 transition-all duration-300 rounded-full p-2 border border-gray-300">
                  <PiSlidersHorizontalLight />
                </button>
              </div>
              <button className="cursor-pointer transition-all duration-300  bg-sky-500 text-white rounded-full p-2  ">
                <MdArrowUpward />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-bold text-sm text-gray-500">SUGGESTIONS</p>
          {rankedStarters.map((starter) => (
            <p className="text-sm p-1 py-1.5 cursor-pointer hover:bg-gray-100 rounded-sm">
              {starter.question}
            </p>
          ))}
        </div>

        <div className="flex gap-2 justify-center">
          <button className="flex items-center gap-1.5 border text-sm border-gray-300 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-500">
            {" "}
            <IoPersonOutline /> Ask About me
          </button>
          <button className="flex items-center gap-1.5 border text-sm border-gray-300 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-500">
            {" "}
            <LuBookOpen />
            Learn from my insights
          </button>
          <button className="flex items-center gap-1.5 border text-sm border-gray-300 rounded-full px-3 py-1 text-gray-600 cursor-pointer hover:border-gray-500">
            {" "}
            <LuChefHat /> Jam on a problem
          </button>
        </div>
      </div>

      {!showSidebar && (
        <>
          <div className="flex flex-col gap-1.5 w-fit h-fit">
            <div className="relative group hover:bg-gray-100 rounded-full p-3 cursor-pointer">
              <IoPersonCircleOutline />
              <ContentTooltip content="Profile" />
            </div>
            <div className="relative group hover:bg-gray-100 rounded-full p-3 cursor-pointer">
              <GoBriefcase />
              <ContentTooltip content="Work Experience" />
            </div>
            <div className="relative group hover:bg-gray-100 rounded-full p-3 cursor-pointer">
              <LuSlidersHorizontal />
              <ContentTooltip content="Timeline" />
            </div>
          </div>
        </>
      )}

      {showSidebar && (
        <div className="flex flex-col gap-1.5">
          <div>
            <h2 className="font-bold text-xl mb-1">New to SuperMe?</h2>
            <p className="text-gray-800 text-sm">
              Sign up to save your conversation with Lolita Taub!
            </p>
            <button>Continue with google</button>
            <p className="text-sm text-gray-700">
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
          <p className="font-bold text-lg mb-1 ">Realted Profiles</p>

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
