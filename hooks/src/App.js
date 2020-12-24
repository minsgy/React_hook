import React, {useState, useEffect, useRef} from 'react';

const useClick = onClick => {
  const element = useRef();

  // if(typeof onClick !== "function"){
  //   return;
  // }

  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick)
    }
    // willUnmount
    return () => {
      if(element.current){
       element.current.removeEventListener("click", onClick)
      }
    };
  },[]);

  return element;
}


const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (

    <div>
      <h1 ref={title}>ㅎㅇㄹ</h1>
    </div>

  )
}

export default App;