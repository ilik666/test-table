import {Modal} from './Modal';
import {IModal} from "./modal-types";

export const ModalView = ({isOpen, onCancel }:IModal) => {
  return (
    <Modal onCancel={onCancel} isOpen={isOpen} title="Are you sure?">

    </Modal>
  );
};
