import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchTermValue, updateProduct} from '../../redux/products/products-actions';
import {useToggle} from '../../hooks/useToggle';
import {ModalUpdateProduct} from '../modals/Modal-update-product';

import './Header.scss';
import {IProduct} from "../../redux/products/types";

export const Header = () => {
  const [visibleUpdateModal, setVisibleUpdateModal] = useToggle(false);
  const [term, setTerm] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value.trim());
  };

  const handleUrl = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`/search?=${term}`);
    dispatch(searchTermValue(term))
    setTerm('')
  };

  const submitUpdateProduct = useCallback((product: IProduct) => {
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
