import {ProductTables} from "../components/product-table/ProductTable";
import {useSelector} from "react-redux";
import {getSearchProducts} from "../redux/products/selectors";
import {Link} from "react-router-dom";

export const Search = () => {
  const sortedProducts = useSelector(getSearchProducts);

  if(!sortedProducts.length) {
    return (<div><h1>Ничего не найдено</h1> <Link to='/'> На главную</Link></div>)
  }
  return (
    <div className="container">
      <div><h1>Поиск</h1> <Link to='/'> На главную</Link></div>
      <ProductTables products={sortedProducts}/>
    </div>
  );
};

