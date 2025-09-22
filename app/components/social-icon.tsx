import Image from "next/image";
import Link from "next/link";

const socialIconData = {
  twitter: {
    alt: "x-logo",
    height: 13,
    width: 18,
    src: "/social/x.svg",
    tooltip: "X",
  },
  substack: {
    alt: "substack logo",
    height: 13,
    width: 14,
    src: "/social/substack.svg",
    tooltip: "Substack",
  },
  linkedin: {
    alt: "linkedin logo",
    height: 20,
    width: 17,
    src: "/social/linkedin.svg",
    tooltip: "Linkedin",
  },
};

 const SocialIcon = ({
  type,
  url,
}: {
  type: string
  url: string;
}) => {
  const itemType = type.toLowerCase() as "twitter" | "substack" | "linkedin";
  const content = socialIconData[itemType];
  return (
    <>
      <Link
      onClick={(e)=>{
        e.stopPropagation()
      }}
      href={url}
      target="_blank"
    
      className="cursor-pointer hover:scale-110 relative group">
        <Image
          alt={content.alt}
          height={content.height}
          width={content.width}
          src={content.src}
        />
        <div className="absolute left-1/2 opacity-0   -translate-x-1/2   rounded-full mt-3 shadow-lg  p-0.5 px-2 text-xs font-medium text-white bg-gray-500 group-hover:opacity-100 ">
          {content.tooltip}
        </div>
      </Link>
    </>
  );
};

export default SocialIcon
