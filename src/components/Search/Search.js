import './Search.css'
import React from 'react'
import img from './search.svg'

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <>
            <div className="search">
                <input type="search" placeholder='Поиск'/>
                <img src={img} alt="search"/>
            </div>
            <button className='btn-search'>Найти</button>
        </>)
    }

}



export default Search;