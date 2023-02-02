import { Fragment } from "react";
import Link from "next/link";

function Header() {
const pillsClass = "text-lg p-4 pr-8 pl-8 cursor-pointer font-bold underline hover:rounded-3xl hover:no-underline";

  return (
    <header>
      <div className="flex flex-col md:flex-row md:justify-between ">
        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <img
              src="https://unfilmy.com/wp-content/uploads/2021/01/cropped-unfilmy-removebg-preview.webp"
              className="w-28 h-28 object-contain cursor-pointer"
            />
          </Link>
        </div>
        <ul className="hidden sm:flex sm:justify-around md:justify-between md:w-2/3 lg:w-1/2">
          <li className="flex flex-col justify-center">
            <Link href="/movies">
            <span className={`${pillsClass} hover:bg-orange-400`}>
                Cinema
              </span>
            </Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link href="/movies">
            <span className={`${pillsClass} hover:bg-teal-700`}>
                Blogs
              </span>
            </Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link href="/movies">
            <span className={`${pillsClass} hover:bg-orange-400`}>
                Curation
              </span>
            </Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link href="/about">
            <span className={`${pillsClass} hover:bg-teal-700`}>
                About Us
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
