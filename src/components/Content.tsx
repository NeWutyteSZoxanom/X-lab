import React from "react";
import { Route } from "react-router-dom";
import News from "../pages/News";
import Search from "../pages/Search";
import { useMediaQuery } from "react-responsive";

const Content: React.FC = () => {
  const isMatch = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className={isMatch ? "content" : "content content_media"}>
      <Route path="/" exact component={News} />
      <Route path="/address" component={Search} />
    </div>
  );
};

export default Content;
