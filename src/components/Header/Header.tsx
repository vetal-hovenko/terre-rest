import React from "react";

import ContentWrapper from "../UI/ContentWrapper/ContentWrapper";
import Navigation from "./Navigation/Navigation";
import Address from "./Address/Address";
import Intro from "./Intro/Intro";

const Header = () => {
    return (
        <header className="bg-restaurant-interior h-screen bg-contain bg-no-repeat text-white px-4">
            <ContentWrapper>
                <Navigation />

                <Address />

                <Intro />
            </ContentWrapper>
        </header>
    );
};

export default Header;
