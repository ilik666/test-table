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

export const ProductTableRowContainer = (props: IProductViewRow) => {
  const [visibleUpdateModal, setVisibleUpdateModal] = useToggle(false);
  const [visibleDeleteModal, setVisibleDeleteModal] = useToggle(false);

  const dispatch = useDispatch();

  const submitUpdateProduct = useCallback((product: IProduct) => {
    dispatch(updateProduct(product));
  }, [dispatch]);

  const handleDeleteProduct = useCallback(() => {
    dispatch(deleteProduct(props.id));
  }, [dispatch, props.id]);

  return (
    <>
      <ModalUpdateProduct submitUpdateProduct={submitUpdateProduct}
                          isOpen={visibleUpdateModal}
                          onCancel={setVisibleUpdateModal} {...props}
                          price={props.price as number}
                          id={props.id}/>

      <ModalDeleteProduct isOpen={visibleDeleteModal}
                          onCancel={setVisibleDeleteModal}
                          deleteProduct={handleDeleteProduct} />

      <ProductTableRow {...props} price={refreshFormatPrice(+props.price)}
                       toggleUpdateProduct={setVisibleUpdateModal}
                       toggleDeleteModal={setVisibleDeleteModal}/>
    </>
  );
};
