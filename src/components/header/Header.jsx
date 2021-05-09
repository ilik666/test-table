import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import './Header.scss'

export const Header = () => {
	const [term, setTerm] = useState('')
	const history = useHistory()

	const handleSearchValue = (e) => {
		setTerm(e.target.value)
	}
	const handleUrl = (e) => {
		e.preventDefault()
		history.push(`?search=${term.trim()}`)

		// setTerm('')
	}
	return (
		<header className="header">

			<form className="search-form" onSubmit={handleUrl}>
				<input type="text" onChange={handleSearchValue} value={term} name='search' className='form-control'
							 placeholder='Search product'/>
				<button className='btn btn-primary'> Search</button>
			</form>

			<button className='btn btn-primary'> Add new</button>
		</header>
	)
}