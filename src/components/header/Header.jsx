import './Header.scss'

export const Header = () => {
	return (
		<header className="header">

			<form className="search-form">
				<input type="text" className='form-control' placeholder='Search product' />
				<button className='btn btn-primary'> Search </button>
			</form>

			<button className='btn btn-primary'> Add new </button>
		</header>
	)
}