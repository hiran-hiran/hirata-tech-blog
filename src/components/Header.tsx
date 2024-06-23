import Link from "next/link";
// import Logo from "../public/img/common/logo01.svg";
import NextImage from "next/image";

export const Header = () => {
  return (
    <header className="w-full max-w-[1200px] py-5 bg-white z-50 mx-auto">
      <div className="mx-auto flex items-center justify-between">
        <div className="text-s">
          <Link href="/">
            <NextImage
              src="/img/common/logo01.svg"
              width={120}
              height={50}
              alt="ロゴ"
            />
          </Link>
        </div>
        <div className="nav-form-wrap">
          <ul className="flex items-center justify-between gap-5 font-bold text-[#052936]">
            <li>
              <Link href="/about" className="relative after:">
                about
              </Link>
            </li>
            {/* <li><Link href="/service"><a>サービス</a></Link></li> */}
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* <div className="form">
            <form action="">
              <input type="text" placeholder="Search..." />
              <button>
                <SearchIcon className="green" />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </header>
  );
};
