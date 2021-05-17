import {ProductTables} from "../components/product-table/ProductTable";
import {useSelector} from "react-redux";
import {getSortedProducts} from "../redux/products/selectors";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Search = () => {
  const sortedProducts = useSelector(getSortedProducts);


  return (
    <div className="container">
      <div> <h1>Поиск</h1> <Link to='/'> На главную</Link></div>
      <ProductTables products={[]}/>
    </div>
  );
};

