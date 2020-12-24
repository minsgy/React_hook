
const useConfirm = (message = "", onCorfirm, onCancel) => {
  if (onCorfirm && typeof onCorfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      onCorfirm();
    }
    else {
      onCancel();
    }
  }
  return confirmAction;
};


//   const App = () => {

//   const delete_word = () => console.log("delete");
//   const abort = () => console.log("aborted")
//   const confirmDelete = useConfirm("동의함 ㅠ", delete_word, abort);
//    return(
//      <div>
//        <button onClick={confirmDelete}>Delete</button>
//      </div>
//    )
//   }