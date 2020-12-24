
const useNotification = (title, options) => {

    const fireNotif = () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    new Notification(title, options);
                }
                else {
                    return;
                }
            })
        } else {
            new Notification(title, options);
        }
    };
    return fireNotif;

}

// const App = () => {
//     const triggerNotif = useNotification("아 내일 머먹지", {
//         body: "김치추천"
//     });
//     return (
//         <div>
//             <button onClick={triggerNotif}>밥버튼</button>
//         </div>
//     );
// }