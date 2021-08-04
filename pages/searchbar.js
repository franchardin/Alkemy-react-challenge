import React, { useState } from 'react'
import styles from '../styles/Searchbar.module.css'


export default function Searchbar(props) {
    const { searchHero, doSearch} = props;
    /*
    const [searchText, setSearchText] = useState('');

    function searchHero() {
        axios.get(`https://superheroapi.com/api/10159471963432710/search/${searchText}/`)
        .then((response) => {
            console.log("respuesta", JSON.stringify(response))
            // Code for handling the response
        })
        .catch((error) => {
            //alert("Api call error: ", error)
            // Code for handling the error
        })
    }

    function doSearch(e) {
        const searchHeroName = e.target.value;

        setSearchText(searchHeroName)
        if (searchHeroName.length > 2) {
            searchHero();
        }
    }*/

  return (
    <div className={styles.searchbar}>
        <input 
            id="inputSearch" 
            className={styles.searchInput} 
            placeholder="Type in your hero name" 
            onChange={doSearch} 
            value={props.searchText}
        />
    </div>
  )
}

