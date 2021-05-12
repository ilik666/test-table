import {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {updateProduct} from '../../redux/products/products-actions';
import {useToggle} from '../../hooks/useToggle';
import {ModalUpdateProduct} from '../modals/Modal-update-product';

import './Header.scss';

export const Header = () => {
    const [visibleUpdateModal, setVisibleUpdateModal] = useToggle(false);
    const [term, setTerm] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearchValue = (e) => {
        setTerm(e.target.value);
    };
    const handleUrl = (e) => {
        e.preventDefault();
        history.push(`?search=${term.trim()}`);
        setTerm('');
    };
    const submitUpdateProduct = useCallback((product) => {
        dispatch(updateProduct(product));
    }, [dispatch]);

    return (
        <header className="header">
            <ModalUpdateProduct submitUpdateProduct={submitUpdateProduct}
                                isOpen={visibleUpdateModal}
                                onCancel={setVisibleUpdateModal}/>
            <form className="search-form" onSubmit={handleUrl}>
                <input type="text" onChange={handleSearchValue} value={term}
                       name="search" className="form-control"
                       placeholder="Search product"/>
                <button className="btn btn-primary"> Search</button>
            </form>

            <button className="btn btn-primary"
                    onClick={setVisibleUpdateModal}>Add new
            </button>
        </header>
    );
};
