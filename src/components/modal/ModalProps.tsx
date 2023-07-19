import { useState,useEffect, useCallback } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onsubmit: () => void;
    title?: string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal:React.FC<ModalProps> = (
    {
        isOpen,
        onClose,
        onsubmit,
        title,
        body,
        footer,
        actionLabel,
        disabled,
        secondaryAction,
        secondaryLabel
    }
) => {
    const [ShowModal,setShowModal] = useState(isOpen);
    useEffect(()=>{
        setShowModal(isOpen)
    },[isOpen])

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(()=> {
            onClose();
        },300)

    },[disabled,onclose])


    const handleSubmit = useCallback(()=> {
        if (disabled) {
            return;
        }
        onsubmit();
    },[disabled,onsubmit])

    const secondaryAction = useCallback(() => {

    },[])

    return (  );
}
 
export default Modal;