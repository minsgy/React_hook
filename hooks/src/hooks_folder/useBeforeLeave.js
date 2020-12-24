
const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        console.log("값이 이상함");
    }

    const handle = (e) => {
        const { clientY } = e;
        if (clientY <= 0) {
            onBefore();
        }
    }

    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => {
            document.removeEventListener("mouseleave", handle)
        };
    });
}

//   const App = () => {
//     const begForLife = () => {
//       console.log("PLS dont leave")
//     }
//     useBeforeLeave(begForLife);
//     return (
//       <div>
//         <h1>ㅎㅇㄹ</h1>
//       </div>
//     );

//   }