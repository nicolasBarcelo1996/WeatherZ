import React from 'react'
import './All.css'



const SearchBar = props => {
    return (
        <div >
            <form  onSubmit={props.getCity}>
                <input type="text" 
                name="city" 
                className="myForm"
                placeholder="Search"
                autoComplete="on"
                />
            </form>
        </div>
    )
}

export default SearchBar
