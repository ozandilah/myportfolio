import React from "react";
import RoundOne from "./components/roundDesign/RoundOne";
import RoundFive from "./components/RoundFive";
import RoundFour from "./components/RoundFour";
import RoundThree from "./components/RoundThree";
import RoundTwo from "./components/RoundTwo";
import Home from "./Home";

function App() {
    return (
        <div className="w-full h-screen font-bodyfont text-textColor bg-black relative overflow-hidden">
            <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
                <Home />
            </div>
            <div className="w-full h-full absolute top-0 left-0 z-10 ">
                <RoundOne />
                <RoundTwo />
                <RoundThree />
                <RoundFour />
                <RoundFive />
            </div>
        </div>
    );
}

export default App;
