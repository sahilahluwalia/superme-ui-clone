import Link from "next/link";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import Accordion from "../components/accordion";
import content from "../data/payload";

const page = () => {
  return (
    <div>
      {/* <div>
        <div>
          <button> Follow</button> <button> Show Profile</button>{" "}
          <button>Focused View</button>
        </div>
        <img src="https://placehold.co/600x400" alt="Agent Image" />
        <h1>Lolita Taub</h1>
        <p>
          GP at Ganas Ventures | $100K Pre-seed & Seed Checks | 100+ Startups |
          Fund II Goes Global | Latina VC
        </p>
        <p>696 Insghts</p>
        <div>
          <p>2.3k Followers</p>
          <p>847 Connections</p>
          <p>invited by SuperMe</p>
        </div>
        <div>
          <textarea>
            Ask me anything about the latest trends in AI, venture capital, and
            startups.
          </textarea>
          <div>
            <div>
              <button>Add</button> <button>Settings</button>
            </div>
            <button>Send</button>
          </div>
        </div>
        <div>
          <button>Ask About me</button>
          <button>Learn from my insights</button>
          <button>Jam on a problem</button>
        </div>
      </div> */}
      <div>
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
        {/* about */}
        <div className="flex flex-col gap-4">
          {/* <RightSection /> */}
      
        <Accordion
          content={content.about.content}
          type="ABOUT"
          socialLinks={content.about.links}
        />
        <Accordion type="WORK" workExperience={content.workExperience} />
        <Accordion type="OTHER" workExperience={content.other} />
        <Accordion type="TIMELINE" timeline={content.timeline} />
        </div>
      </div>
    </div>
  );
};

export default page;
