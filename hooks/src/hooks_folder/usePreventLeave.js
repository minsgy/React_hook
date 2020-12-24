
const usePreventLeave = () => {
    const listener = (e) => {
        e.preventDefault();
        // 기본 값이 무조건 필요로함.
        e.returnValue = "";
    }
    // beforeunload 창이 닫히기전 함수를 실행 할 수 있게함.
    const enablePrevent = () => window.addEventListener("beforeunload", listener)
    const disablePrevent = () => window.addEventListener("beforeunload", listener)

    return { enablePrevent, disablePrevent }
}

//   const App = () => {
//     const { enablePrevent, disablePrevent } = usePreventLeave();
//     return (
//       <div>
//         <button onClick={enablePrevent}>Protect</button>
//         <button onClick={disablePrevent}>unProtect</button>
//       </div>
//     );

//   }