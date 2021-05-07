import {Modal} from "./Modal";

export const ModalUpdateProduct = ({isOpen, onCancel}) => {
	const handleVisibleModal = () => {
		onCancel( v => !v)
	}
	return (
		<Modal onCancel={handleVisibleModal} isOpen={isOpen} title='Are you sure?'>

		</Modal>
	)
}