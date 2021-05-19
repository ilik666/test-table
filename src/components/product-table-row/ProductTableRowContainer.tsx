import {ProductTableRow} from './ProductTableRow';
import {ModalDeleteProduct} from '../modals/Modal-delete-product';

import {useDispatch} from 'react-redux';
import {
  deleteProduct,
  updateProduct,
} from '../../redux/products/products-actions';

import {refreshFormatPrice} from '../../helpers/helpers';

import './ProductTableRow.scss';
import {ModalUpdateProduct} from '../modals/Modal-update-product';
import {useToggle} from '../../hooks/useToggle';
import {useCallback} from 'react';
import {IProduct, IProductViewRow} from "../../redux/products/types";
import {Modal} from "../modals/Modal";

export const ProductTableRowContainer = (props: IProductViewRow) => {
  const [visibleUpdateModal, setVisibleUpdateModal] = useToggle(false);
  const [visibleDeleteModal, setVisibleDeleteModal] = useToggle(false);
  const [visibleVisibleModal, setVisibleVisibleModal] = useToggle(false);

  const dispatch = useDispatch();

  const submitUpdateProduct = useCallback((product: IProduct) => {
    dispatch(updateProduct(product));
  }, [dispatch]);

  const handleDeleteProduct = useCallback(() => {
    dispatch(deleteProduct(props.id));
  }, [dispatch, props.id]);

  return (
    <>
      <Modal isOpen={visibleVisibleModal} onCancel={setVisibleVisibleModal} title={props.name}>
        <p><b>Name</b>: {props.name}</p>
        <p><b>Count</b>: {props.count}</p>
        <p><b>Price</b>: {refreshFormatPrice(+props.price)}</p>
      </Modal>

      <ModalUpdateProduct submitUpdateProduct={submitUpdateProduct}
                          isOpen={visibleUpdateModal}
                          onCancel={setVisibleUpdateModal} {...props}
                          price={props.price as number}
                          id={props.id}/>

      <ModalDeleteProduct isOpen={visibleDeleteModal}
                          onCancel={setVisibleDeleteModal}
                          deleteProduct={handleDeleteProduct} />

      <ProductTableRow {...props} price={refreshFormatPrice(+props.price)}
                       toggleViewModal={setVisibleVisibleModal}
                       toggleUpdateProduct={setVisibleUpdateModal}
                       toggleDeleteModal={setVisibleDeleteModal}/>
    </>
  );
};
