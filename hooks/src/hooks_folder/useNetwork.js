
const useNetwork = (onChange) => {
    // 온라인인지 확인
    const [status, setStatus] = useState(navigator.onLine);

    const handleChange = () => {
        if (typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
    }


    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        }
    });

    return status;
}

// const App = () => {
//     const online = useNetwork();
//     return (
//         <div>
//             <h1>{online ? "Online" : "Offline"}</h1>
//         </div>
//     );

// }