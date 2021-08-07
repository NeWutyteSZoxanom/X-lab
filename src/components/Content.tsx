import React from "react";
import { Route } from "react-router-dom";
import News from "../pages/News";
import Search from "../pages/Search";

const Content: React.FC = () => {
  return (
    <div className="content">
      <Route path="/" exact component={News} />
      <Route path="/address" component={Search} />
    </div>
  );
};

export default Content;
