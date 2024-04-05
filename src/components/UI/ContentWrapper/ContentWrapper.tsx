import React from "react";
import PropTypes from "prop-types";

interface ContentWrapperProps {
    children: React.ReactNode;
    containerStyle?: string;
}

const ContentWrapper = (props: ContentWrapperProps) => {
    const { children, containerStyle } = props;

    return <div className={`max-w-[1360px] mx-auto ${containerStyle || ""}`}>{children}</div>;
};

ContentWrapper.propTypes = {};

export default ContentWrapper;
