import React, { useState, useEffect, useRef } from 'react';

const useFullscreen = (onFulls) => {
    const element = useRef();
    const triggerFull = () => {
        if (element.current) {
            element.current.requestFullscreen();
            if (onFulls && typeof onFulls === "function") {
                onFulls(true)
            }
        }
    };

    const exitFull = () => {
        document.exitFullscreen();
        if (onFulls && typeof onFulls === "function") {
            onFulls(false);
        }
    }

    return { element, triggerFull, exitFull };
}


// const App = () => {

//   const onFulls = (isFull) => {
//     console.log(isFull ? "we are full" : "We are 스몰")
//   }


//   const { element, triggerFull, exitFull } = useFullscreen(onFulls);

//   return (
//     <div ref={element} style={{ height: "1000vh" }}>
//       <img src="https://picsum.photos/300/300/?random" />
//       <button onClick={triggerFull}>Make Fullscreen</button>
//       <button onClick={exitFull}>exit Fullscreen</button>
//     </div>
//   );

// }

// export default App;