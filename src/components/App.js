import React from "react";
import About from "./About";
import HomePage from "./HomePage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";

const App = (props) => {
    const getPage = () => {
        const route = window.location.pathname;
        if (route === "/about") return <About />;
        if (route === "/courses") return <CoursesPage />;
        return <HomePage />;
    };
    return (
        <div className="container">
            <Header />
            {getPage()}
        </div>
    );
};

export default App;
