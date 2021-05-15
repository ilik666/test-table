import {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
    el = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.el);
        document.body.classList.add('show-modal');
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
        document.body.classList.remove('show-modal');
    }

    render() {
        const {children} = this.props;

        return ReactDOM.createPortal(children, this.el);
    }
}
