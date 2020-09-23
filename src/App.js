import React, { useEffect, useState } from "react";

import "./index.css";

const { innerWidth: windowWidth } = window;

function App() {
  useEffect(() => {
    const loader = document.querySelector("#loader");
    const loaderWidth = document.querySelector(".load");

    let currwidth = 0;
    let stopLoader = false;

    // starting loader
    const loaderInterval = setInterval(function () {
      let clone_loader = loaderWidth.cloneNode(true);
      if (currwidth < windowWidth - 20) {
        loader.appendChild(clone_loader);
      } else {
        // clearing interval
        clearInterval(loaderInterval);
      }
      currwidth = currwidth + 20;
    }, 200);

    return function () {
      if (stopLoader) {
        clearInterval(loaderInterval);
      }
    };
  }, []);

  return (
    <div className="App">
      <div id="loader">
        <div className="load">hii</div>
      </div>
    </div>
  );
}

export default App;
