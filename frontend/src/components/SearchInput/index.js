import PropTypes from 'prop-types'
import { useState } from 'react'
import './style.scss'

const SearchInput = ({ onSearch }) => {

    const [searchKey, setSearchKey] = useState('')

    const handleSearchKeyWordChange = (e) => {
        console.log(e)
        setSearchKey(e) 
        onSearch(searchKey)
    }

    return (
        <div className="form-number mb-4 col-12 search-input">
            <input 
                type="text" 
                className="form-control custom-input-text" 
                placeholder="Perform search...." 
                value={searchKey}
                onChange={ (e) => { handleSearchKeyWordChange(e.target.value) } }
            />
        </div>
    )
}

SearchInput.propTypes = {
    onChange : PropTypes.func
}

export default SearchInput
