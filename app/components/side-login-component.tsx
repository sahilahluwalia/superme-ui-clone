import Link from "next/link";
import Image from "next/image";
const SideLoginComponent = () => {
  return (
    <>
      <div className="flex flex-col pt-6 px-2 gap-2">
        <h6 className="font-bold text-xl text-gray-700">New to SuperMe?</h6>
        <p className="text-gray-700 text-xs">
          Sign up to save your conversation with{" "}
          <span className="font-medium">Lolita!</span>
        </p>
        <button className="flex items-center bg-[#FCFCFC]  hover:bg-sky-50 cursor-pointer gap-2 border border-gray-200 rounded-full p-2.5 w-7/8">
          <Image src="/social/google.svg" alt="google" width={20} height={20} />
          <p className="text-sm w-full text-center font-medium">
            Continue with Google
          </p>
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
    </>
  );
};
export default SideLoginComponent;