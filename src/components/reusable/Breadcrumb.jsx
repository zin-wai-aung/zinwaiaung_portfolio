import Link from "next/link";
import React from "react";

const BreadCrumbTab = ({ routeLink, frontTab, backTab }) => {
  return (
    <div>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex space-x-2 md:space-x-5 flex-wrap items-center text-[.85rem] md:text-lg w-full py-2 rounded-md">
          <li className="transition-colors duration-300 cursor-pointer dark:text-Darksecondary-muted dark:hover:text-Darksecondary-paragraph">
            <Link href="/">
              <div className="opacity-60">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
              </div>
            </Link>
          </li>
          <li className="pointer-events-none select-none">/</li>
          <li className="transition-colors duration-300 cursor-pointer dark:text-Darksecondary-muted  dark:hover:text-Darksecondary-paragraph">
            <Link href={routeLink}>
              <span>{frontTab}</span>
            </Link>
          </li>
          <li className="pointer-events-none select-none">/</li>
          <li className="flex items-center dark:text-Darksecondary">
            {backTab}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbTab;
