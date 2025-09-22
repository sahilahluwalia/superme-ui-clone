"use client";

import { useReducer } from "react";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";
import SocialIcon from "@/app/components/social-icon";
import { cn } from "@/app/libs/utils";
import { BsBriefcase } from "react-icons/bs";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import React from "react";
type AccordionProps = {
  content?: string;
  type: "ABOUT" | "WORK" | "ENGAGEMENTS" | "TIMELINE" | "OTHER";
  socialLinks?: {
    type: string;
    url: string;
  }[];
  list?: {
    name: string;
    position: string;
    startDate: string;
    endDate: string;
    timeDuration: string;
    icon: string;
    content: string;
  }[];
  isOpen?: boolean;
};

const accordionTypes = {
  about: {
    name: "About",
    icon: <CgProfile />,
  },
  work: {
    name: "Work Experience",
    icon: <BsBriefcase />,
  },
  other: {
    name: "Other Enagements",
    icon: <BsBriefcase />,
  },
  timeline: {
    name: "Timeline",
    icon: <HiMiniBars3CenterLeft />,
  },
};

export const ReadMoreContent = ({ content }: { content: string }) => {
  const [isExpanded, toggleExpand] = useReducer((state) => !state, false);
  let shortContent = content.slice(0, 130);
  if (content.length > 130) {
    shortContent += "...";
  }
  const contentShowToUser = isExpanded ? content : shortContent;
  return (
    <p className="cursor-pointer my-2" onClick={toggleExpand}>
      {contentShowToUser}
    </p>
  );
};

const Accordion = ({ content, type, socialLinks, list }: AccordionProps) => {
  const [isOpen, toggleOpen] = useReducer((isOpen) => !isOpen, false);
  const headerContent =
    accordionTypes[type.toLowerCase() as keyof typeof accordionTypes];

  return (
    <>
      <div
        onClick={toggleOpen}
        className="flex w-full flex-col cursor-pointer md:w-sm  p-4 rounded-3xl border-gray-200 border-1 bg-white"
      >
        <div className="header flex items-center justify-between">
          <div className="flex items-center gap-4">
            {headerContent.icon}
            <p className="font-bold text-base text-gray-700">{headerContent.name}</p>
          </div>
          {list && (
            <div
              className={cn(" flex items-center ml-auto mr-2   -space-x-2 overflow-hidden", {
                invisible: isOpen,
              })}
            >
              {list.slice(0, 3).map((item) => (
                <Image
                  key={item.name}
                  className="rounded-full inline-block -outline-offset-1 z-10"
                  alt={item.name}
                  height={30}
                  width={30}
                  src={item.icon}
                ></Image>
              ))}
              {list.length > 3 && (
                <span className="text-gray-600 text-xs rounded-full p-2 bg-gray-200">
                  +{list.length - 3}
                </span>
              )}
            </div>
          )}

          <button>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</button>
        </div>
        {content && (
          <div
            className={cn(
              "content text-gray-700 text-sm whitespace-pre-line my-2",
              {
                "text-gray-900": isOpen,
              }
            )}
          >
            {isOpen ? <>{content}</> : <>{content.slice(0, 210)}</>}
          </div>
        )}
        {list && !isOpen && list.length === 0 && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex items-center gap-1 cursor-auto mt-2"
          >
            <p className="text-gray-500 text-sm">
              No items in the {type.toLowerCase()}
            </p>
          </div>
        )}
        {list && isOpen && (
          <>
            {list.map((item) => (
              <div
                key={item.name}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={cn(
                  "flex gap-3 my-2 cursor-auto items-start text-gray-700 text-sm font-normal"
                )}
              >
                <Image
                  className="rounded-full"
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={30}
                />
                <div className="flex flex-col w-full">
                  <div className="flex items-center gap-1 flex-wrap">
                    <p className="font-medium break-words">{item.position}</p>
                    <span className="text-gray-500">at</span>
                    <p className="font-medium break-words">{item.name}</p>
                  </div>

                  <div className="flex items-center gap-1 text-xs mt-1">
                    <p>
                      {item.startDate} - {item.endDate}
                    </p>
                    <p className=" text-gray-500">({item.timeDuration})</p>
                  </div>
                  <ReadMoreContent content={item.content} />
                </div>
              </div>
            ))}
          </>
        )}

        <div className="buttons flex-end gap-1 flex justify-end">
          {socialLinks &&
            socialLinks.map((item) => (
              <SocialIcon key={item.type} type={item.type} url={item.url} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
