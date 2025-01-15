import { FC, useEffect, useRef, useState } from "react";

type DialogProps = {};

const Dialog: FC<DialogProps> = ({}) => {
  const [showModal, setShowModal] = useState(false);

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    setShowModal(true);
  };

  const closeDialog = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showModal) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showModal]);

  return (
    <>
      <button onClick={openDialog} className="btn btn-primary">
        {showModal ? "Close" : "Open"} Dialog
      </button>
      <dialog ref={dialogRef}>
        <p>Greetings, one and all!</p>
        <form method="dialog">
          <button onClick={closeDialog}>OK</button>
        </form>
      </dialog>
    </>
  );
};

export default Dialog;
