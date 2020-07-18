import React from "react";

const Header = (props) => {
    console.log('header')
    return (
        <nav>
            <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
            <a href="/about">About</a>
        </nav>
    );
};

export default Header;
