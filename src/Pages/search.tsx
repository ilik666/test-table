import {ProductTables} from "../components/product-table/ProductTable";
import {useSelector} from "react-redux";
import {getSearchProducts, getSortedProducts} from "../redux/products/selectors";
import {useLocation, Link} from "react-router-dom";
import {RootState} from "../redux/store";
import {useMemo} from "react";

export const Search = () => {
  const sortedProducts = useSelector( getSortedProducts);
  // const location = useLocation()

  // const filterProducts = useMemo(getSearchProducts, [])



  return (
    <div className="container">
      <div> <h1>Поиск</h1> <Link to='/'> На главную</Link></div>
      <ProductTables products={sortedProducts}/>
    </div>
  );
};

