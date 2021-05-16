import {useRef} from 'react';
import Portal from '../portal/Portal';

import { IModal } from "./modal-types";

import './Modal.scss';
// import {useOnClickOutside} from "../../hooks/useOnClickOutside";



export const Modal = ({
    isOpen,
    onCancel,
    title,
    children,
}: IModal) => {
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

