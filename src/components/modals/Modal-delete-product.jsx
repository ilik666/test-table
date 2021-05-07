import {Modal} from "./Modal";

export const ModalDeleteProduct = ({isOpen, onCancel, deleteProduct}) => {
	const handleVisibleModal = () => {
		onCancel( v => !v)
	}
	return (
		<Modal onCancel={handleVisibleModal} isOpen={isOpen} title='Are you sure?'>
			<p>Are you sure you want to perform this action?</p>
			<button className='btn btn-success mr-2' onClick={deleteProduct}>Yes</button>
			<button className='btn btn-danger' onClick={handleVisibleModal}>No</button>
		</Modal>
	)
}