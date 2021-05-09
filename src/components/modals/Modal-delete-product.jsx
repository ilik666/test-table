import {Modal} from "./Modal";

export const ModalDeleteProduct = ({isOpen, onCancel, deleteProduct}) => {
	return (
		<Modal onCancel={onCancel} isOpen={isOpen} title='Are you sure?'>
			<p>Are you sure you want to perform this action?</p>
			<button className='btn btn-success mr-2' onClick={deleteProduct}>Yes</button>
			<button className='btn btn-danger' onClick={onCancel}>No</button>
		</Modal>
	)
}