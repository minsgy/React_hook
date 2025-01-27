const useFadeIn = (duration = 1, delay = 0) => {
    const element = useRef();

    useEffect(() => {
        if (element.current) {
            const { current } = element;
            current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
            current.style.opacity = 1;
        }
    }, []);

    return { ref: element, style: { opacity: 0 } };
}

// const App = () => {
//     const FadeInH1 = useFadeIn(2, 2);
//     const FadeInP = useFadeIn(5, 5);

//     return (
//         <div>
//             <h1 {...FadeInH1} >ㅎㅇㄹ</h1>
//             <p {...FadeInP}>very awesome</p>
//         </div>
//     );

// }