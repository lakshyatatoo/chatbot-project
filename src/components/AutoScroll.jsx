import {  useRef, useEffect } from "react";
function useAutoScroll(dependencies) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight; //scroll all way dwon to height of scroll bar
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies); //whenever the dependencies change the useeffect will run, in this case we will pass chatMessages as a dependency so that whenever chatMessages change the useeffect will run and scroll to the bottom
  return chatMessagesRef;
}


export default useAutoScroll;