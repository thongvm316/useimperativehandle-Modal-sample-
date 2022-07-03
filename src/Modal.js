import { forwardRef, useImperativeHandle, useState } from "react";

const Modal = (props, ref) => {
    const [modalState, setModalState] = useState(false);

//     useImperativeHandle(ref, () => ({
//         openModal: () => setModalState(true)
//     }));
    
    useImperativeHandle(
    ref,
    () => {
      console.log("useImperativeHandle");
      return {
        openModal: () => setModalState(true)
      };
    },
    [] // ! add [] to prevent trigger when component re-render, like useEffect, useMemo, useCallback
  );
    
    // Explain useImperativeHandle: Can create methods inteads of default methods in ref.

    console.log('child rendered')

    if (!modalState) return null;

    return (
        <div className="modal">
            <p>This is my modal!</p>
            <button onClick={() => setModalState(false)}>Close</button>
        </div>
    )
}

export default forwardRef(Modal)
