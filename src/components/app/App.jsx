import './App.scss';
import {ProductTables} from "../product-table/ProductTable";
import {Header} from "../header/Header";

export const App = () => {
	return (
		<div className="container">
			<Header/>
			<ProductTables/>
		</div>
	);
}

