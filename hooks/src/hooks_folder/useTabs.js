export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    
    if(!allTabs || !Array.isArray(allTabs)){
      return;
    }
    
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    };
  };

//   const {currentItem, changeItem} = useTabs(1, content);

//   return (
//     <div>
//       {
//         content.map((section, index) => (
//           <>
//             <button onClick={()=>changeItem(index)}>{section.tab}</button>
//           </>
//         )
//       )}
//       {currentItem.content}
//     </div>
//   );