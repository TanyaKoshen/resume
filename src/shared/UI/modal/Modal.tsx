import React, {SetStateAction} from 'react';
import cl from './Modal.module.css'

interface IModalProps {
    modalActive: boolean;
    setModalActive: React.Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

const Modal = ({modalActive, setModalActive, children}: IModalProps) => {
    return (
        <div className={modalActive?  `${cl.modal} ${cl.active}` : cl.modal } onClick={()=>setModalActive(false)}>
            <div className={modalActive? `${cl['modal-content']} ${cl.active}` : cl['modal-content']} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
