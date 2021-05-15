import {useRef} from 'react';
import Portal from '../portal/Portal';

import './Modal.scss';
// import {useOnClickOutside} from "../../hooks/useOnClickOutside";

interface Modal {
  isOpen: boolean
  onCancel: () => void
  onSubmit?: () => void
  title?: string
  children: any
}

export const Modal = ({
    isOpen,
    onCancel,
    onSubmit,
    title,
    children,
}: Modal) => {
    const refContainer = useRef<HTMLDivElement | null>(null);
    // useOnClickOutside(refContainer, onCancel)
    return (
        <>
            {
                isOpen && <Portal>
                    <div className="modal-overlay">
                        <div className="modal-container" ref={refContainer}>
                            <div className="modal-header">
                                <h5 className="modal-title">{title}</h5>
                                <button onClick={onCancel}>&times;</button>
                            </div>
                            <div className="modal-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </Portal>
            }
        </>
    );
};

