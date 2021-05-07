import Portal from "../Portal/Portal";

import './Modal.scss'
import { useRef} from "react";
import {useOnClickOutside} from "../../hooks/useOnClickOutside";

export const Modal = ({isOpen, onCancel, onSubmit, title, children}) => {
	const refContainer = useRef()
	useOnClickOutside(refContainer, onCancel)

	return (
		<>
			{
				isOpen && <Portal>
					<div className='modal-overlay'>
						<div className="modal-container" ref={refContainer}>
							<div className="modal-header">
								<h5 className='modal-title'>{title}</h5>
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
	)
}

