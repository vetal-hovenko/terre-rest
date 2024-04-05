import Image from "next/image";
import React from "react";
import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import Link from "next/link";
import SocialMediaIcon from "../UI/Icons/SocialMediaIcon";
import FooterNavigation from "./FooterNavigation/FooterNavigation";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <ContentWrapper containerStyle="lg:py-16 py-8 px-4">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-4 items-center">
                    <div>
                        <Image
                            src="/terre-logo.png"
                            alt="Terre logo"
                            width="100"
                            height="40"
                        />
                        <div className="flex gap-4 mt-4">
                            <Link
                                className="bg-white w-10 h-10 flex items-center justify-center"
                                href="/"
                            >
                                <SocialMediaIcon
                                    socialMediaName="instagram"
                                    iconColor="black"
                                />
                            </Link>
                            <Link
                                className="bg-white w-10 h-10 flex items-center justify-center"
                                href="/"
                            >
                                <SocialMediaIcon
                                    socialMediaName="facebook"
                                    iconColor="black"
                                />
                            </Link>
                        </div>
                    </div>

                    <FooterNavigation />
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
