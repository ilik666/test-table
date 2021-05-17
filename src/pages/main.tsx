import {ProductTables} from "../components/product-table/ProductTable";
import {getSortedProducts} from "../redux/products/selectors";

import {useSelector} from "react-redux";

export const Main = () => {
  const sortedProducts = useSelector(getSortedProducts);

  return (
    <div className="container">
      <ProductTables products={sortedProducts} />
    </div>
  )
}

