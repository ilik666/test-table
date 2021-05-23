import './App.scss';
import {Header} from '../header/Header';
import {useEffect} from "react";
import {fetchProducts} from "../../redux/products/products-actions";
import {getProducts} from "../../services/products-services";
import {useDispatch} from "react-redux";

import {Switch, Route} from 'react-router-dom'
import {Search} from "../../pages/search";
import {Main} from "../../pages/main";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(getProducts));
  }, [dispatch]);

  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/search' component={Search}/>
      </Switch>
    </div>
  );
};

