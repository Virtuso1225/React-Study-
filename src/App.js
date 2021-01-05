import React from "react";
import LoginModule from "./LoginModule";
import Title from "./Title";
import SearchModule from "./SearchModule";
import Description from "./Description";
import Trendingpage from "./Trendingpage";
import "./App.css";

const App = () => {
  return (
    <div>
      <div>
        <LoginModule />
      </div>
      <div>
        <Title />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <SearchModule />
      </div>
      <hr className="line"></hr>
      <div className="wrapper">
        <Trendingpage />
      </div>
    </div>
  );
};
export default App;
