import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage/dist/react-fullpage-commonjs';

import IndexSection from "./sections/Index-section.js";
import AboutSection from "./sections/About-section.js";
import AiSection from "./sections/Ai-section.js";
import ContactSection from "./sections/Contact-section.js";


const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  anchors: ["Index", "about", "contact", "ai"],
  callbacks: ['onLeave', 'afterLoad'],
  fadingEffect: true,
  menu: '#sideNav'
};

class Fullpage extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    let first = true;
    let second;
    let third;
    let fourth;

    return (
      <ReactFullpage
        {...fullpageOptions}

        render={({ state, fullpageApi }) => {
          //console.log("render prop change", state);

          if (state.callback === "afterLoad") {
            if (state.direction === "down") {
              //console.log("loaded down..." + state.destination.index);
              switch (state.destination.index) {
                case 1:
                  first = false;
                  break;
                case 2:
                  second = false;
                  break;
                case 3:
                  third = false;
                  break;
              }
            } else if (state.direction === "up") {
              //console.log("loaded up..." + state.destination.index);
              switch (state.destination.index) {
                case 0:
                  second = false;
                  break;
                case 1:
                  third = false;
                  break;
                case 2:
                  fourth = false;
                  break;
              }
            } else {
              second = false;
              third = false;
              fourth = false;
            }
          }

          if (state.callback === "onLeave") {
            if (state.direction === "down") {
              //console.log("going down..." + state.destination.index);
              switch (state.destination.index) {
                case 1:
                  second = true;
                  break;
                case 2:
                  third = true;
                  break;
                case 3:
                  fourth = true;
                  break;
              }
            } else if (state.direction === "up") {
              //console.log("going up..." + state.destination.index);
              switch (state.destination.index) {
                case 0:
                  first = true;
                  break;
                case 1:
                  second = true;
                  break;
                case 2:
                  third = true;
                  break;
              }
            }
          }
          return (
            <div>
              <IndexSection/>
              <AboutSection onSection={second}/>
              <ContactSection onSection={third}/>
              <AiSection onSection={fourth}/>
            </div>
          );
        }}
      />
    )
  }
}
export default Fullpage;