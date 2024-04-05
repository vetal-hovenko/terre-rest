import ContentWrapper from "@/components/UI/ContentWrapper/ContentWrapper";
import SocialMediaIcon, { SocialMediaNames } from "@/components/UI/Icons/SocialMediaIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MenuProps {
    navigationItems: { title: string; href: string }[];
}

const Menu = (props: MenuProps) => {
    const { navigationItems } = props;

    const socialMedia: SocialMediaNames[] = ["instagram", "facebook"];

    return (
        <div className="absolute top-[76px] left-0 right-0 lg:hidden">
            <ContentWrapper containerStyle="bg-white px-3 py-7 mx-4">
                <ul className="flex flex-col gap-2">
                    {navigationItems.map(({ title, href }) => (
                        <li
                            className="border-b-[1px] border-gray-100 text-custom-black"
                            key={title}
                        >
                            <Link className="hover:underline" href={href}>
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-5">
                        {
                            socialMedia.map(name => (
                                <button key={name} className="bg-black h-10 w-10 flex justify-center items-center">
                                    <SocialMediaIcon iconColor="white" socialMediaName={name} />
                                </button>
                            ))
                        }
                    </div>

                    <button>
                        <Image
                            src="/flag.jpg"
                            alt="Language"
                            width="32"
                            height="20"
                        />
                    </button>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Menu;
