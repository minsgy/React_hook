// 페이지 상태 title 변경
export const useTitle = (init) => {
    const [title, setTitle] = useState(init);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title")
      htmlTitle.innerText = title;
    }
    useEffect(() => {
      updateTitle()
    }, [title]);
    return setTitle;
  }
  
//   const App = () => {
//     const titleUpdator = useTitle("Loading . . .");
//     setTimeout(() => titleUpdator("home"), 5000)
//     return (
//       <div>
//         <div>ㅎㅇㄹ</div>
//       </div>
//     )
//   }