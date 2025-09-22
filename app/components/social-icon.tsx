import Image from "next/image";
import Link from "next/link";
import ContentTooltip from "./content-tooltip";

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
        <ContentTooltip content={content.tooltip} />
      </Link>
    </>
  );
};

export default SocialIcon
