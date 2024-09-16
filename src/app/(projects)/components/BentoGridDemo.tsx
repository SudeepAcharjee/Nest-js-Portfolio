import { cn } from "../../../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

export function BentoGridDemo() {
  return (
    <div className="flex flex-col gap-10 max-w-4xl mx-auto  mb-10">
      <BentoGrid className="m-8 sm:m-0">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

function ItemImage({ src, href }: { src: string; href: string }) {
  return (
    <Link
      href={href ?? ""}
      target="_blank"
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      <Image
        className="h-full w-full object "
        width={500}
        height={500}
        src={src ?? ""}
        alt="project-img"
      />
    </Link>
  );
}

// const Skeleton = () => (
//   <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
// );
const items = [
  {
    title: "Password Generator",
    description:
      "A password generator with dynamic and user-friendly UI.Using ReactJS and ReactHooks.",
    header: (
      <ItemImage
        src="/Images/todo01.png"
        href="https://unique-password-generator4.netlify.app/"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Music Class",
    description: "Use of Aceternity UI, A Frontend Library.",
    header: (
      <ItemImage
        src="/Images/musicnextjs.png"
        href="https://github.com/RupakGhosh4865/musicnextjs"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "A githubFinder",
    description: "To follwers and repositories in one place.",
    header: (
      <ItemImage
        src="/Images/router.png"
        href="https://your-logogit.netlify.app/"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "NextAuth",
    description: "A NextJS Authentication with ResendEmail.",
    header: (
      <ItemImage
        src="/Images/nextauth.png"
        href="https://github.com/RupakGhosh4865/nextauth"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Todo",
      description: "A TODO list application with dynamic UI,using ReactJS.",
    header: (
      <ItemImage
        src="/Images/todo03.png"
        href="https://rupak-to-do-app.netlify.app/"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  
];
