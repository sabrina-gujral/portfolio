import React, { useRef } from "react";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";

const App = () => {
  const myRef = useRef(null);
  const scroll = () =>
    myRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });

  return (
    <React.Fragment>
      {/* <Navigation /> */}
      <Header scroll={scroll} />
      <About ref={myRef} />
    </React.Fragment>
  );
};

export default App;
