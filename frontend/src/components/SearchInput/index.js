import PropTypes from 'prop-types'
import './style.scss'

const SearchInput = ({ onSearch }) => {

    const handleSearchKeyWordChange = (searchKeyWord) => { 
        onSearch(searchKeyWord)
    }

    return (
        <div className="form-number mb-4 col-12 search-input">
            <input 
                type="text" 
                className="form-control custom-input-text" 
                placeholder="Perform search...." 
                onChange={ (e) => { handleSearchKeyWordChange(e.target.value) } }
            />
        </div>
    )
}

SearchInput.propTypes = {
    onChange : PropTypes.func
}

export default SearchInput
