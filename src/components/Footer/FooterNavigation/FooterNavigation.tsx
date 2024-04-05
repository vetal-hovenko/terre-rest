import React from "react";

const FooterNavigation = () => {
    const navigationItems: { title: string; links: string[] }[] = [
        {
            title: "sitemap",
            links: ["menu", "book now"],
        },
        {
            title: "address",
            links: ["125 water streetst. john's, nl a1c 5x4"],
        },
        {
            title: "contacts",
            links: ["+7 09 383 2136", "info@terrerestaurant.com"],
        },
        {
            title: "other",
            links: ["privacy terms"],
        },
    ];
    return (
        <nav>
            <ul className="flex gap-12 flex-wrap justify-center">
                {navigationItems.map((item) => {
                    return (
                        <li className="md:w-auto w-5/12 flex flex-col md:items-start items-center" key={item.title}>
                            <h3 className="uppercase font-bold">
                                {item.title}
                            </h3>
                            {item.links.map((link) => (
                                <a className="regular-text block" key={link} href="#">
                                    {link}
                                </a>
                            ))}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FooterNavigation;
