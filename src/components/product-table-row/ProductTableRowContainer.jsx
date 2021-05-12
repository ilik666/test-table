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

export const ProductTableRowContainer = ({id, price, ...property}) => {
    const [visibleUpdateModal, setVisibleUpdateModal] = useToggle(false);
    const [visibleDeleteModal, setVisibleDeleteModal] = useToggle(false);

    const dispatch = useDispatch();

    const submitUpdateProduct = useCallback((product) => {
        dispatch(updateProduct(product));
    }, [dispatch, id]);

    const handleDeleteProduct = useCallback(() => {
        dispatch(deleteProduct(id));
    }, [dispatch, id]);

    return (
        <>
            <ModalUpdateProduct submitUpdateProduct={submitUpdateProduct}
                                isOpen={visibleUpdateModal}
                                onCancel={setVisibleUpdateModal} {...property}
                                price={price}
                                id={id}/>

            <ModalDeleteProduct isOpen={visibleDeleteModal}
                                onCancel={setVisibleDeleteModal}
                                deleteProduct={handleDeleteProduct}/>

            <ProductTableRow {...property} price={refreshFormatPrice(price)}
                             toggleUpdateProduct={setVisibleUpdateModal}
                             toggleDeleteModal={setVisibleDeleteModal}/>
        </>
    );
};
