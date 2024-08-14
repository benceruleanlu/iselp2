import React from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  subtitle: string;
  linkUrl: string;
}

const CustomCard: React.FC<CardProps> = ({ title, subtitle, linkUrl }) => { // postcssprefixer doesnt work for whatever nx prefix nextra applys, so brute forced here
  return (
    <div className="nx-mx-2 nx-my-4 nx-w-[90vw] nx-max-w-lg nx-items-center nx-rounded-lg nx-border nx-shadow-lg dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900">
      <Link href={linkUrl} passHref>
        <div className="nx-shrink nx-px-6 nx-py-4">
          <div className="nx-mb-2 nx-text-xl nx-font-bold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100">{title}</div>
          <p className="nx-min-h-[3rem] nx-text-wrap nx-text-base nx-text-slate-500">
            {subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CustomCard;