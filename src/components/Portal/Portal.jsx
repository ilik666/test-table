import {Component} from "react";
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import ReactDOM from 'react-dom'

export default class Portal extends Component {
	el = document.createElement('div')

	componentDidMount() {
		document.body.appendChild(this.el)
	}

	componentWillUnmount() {
		document.body.removeChild(this.el)
	}

	render() {
		const {children} = this.props

		return ReactDOM.createPortal(
			<Provider store={store}>
				{children}
			</Provider>, this.el)
	}
}