import Link from "next/link";
import NextImage from "next/image";

export const Footer = () => {
  return (
    <footer className="py-14 border-t-[#052936] border-t-[1px] text-[#052936]">
      <div className="flex items-center justify-center gap-5 flex-col">
        <ul className="flex items-center justify-center gap-5">
          <li>
            <Link href="/contact">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="icon-wrap">
          <li>
            <a
              href="https://twitter.com/hinozomu"
              target="_blank"
              className="w-[40px] h-[40px] flex items-center justify-center border-[1px] border-[#052936] rounded-full"
            >
              <NextImage
                src="/img/icons/twitter-icon.svg"
                width={15}
                height={15}
                alt="カテゴリ"
              />
            </a>
          </li>
          {/* <li><a href="" target="_blank"><FacebookIcon className="white" /></a></li> */}
        </ul>
      </div>
      <p className="text-center mt-10">&copy; All rights reserved</p>
    </footer>
  );
};
