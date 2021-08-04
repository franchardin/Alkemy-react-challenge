//import Image from 'next/image'
import React, { useState } from 'react'
const axios = require('axios').default;
import styles from '../styles/Home.module.css'
import DisplayHero from './displayHero'
import DisplayHeroes from './displayHeroes'
import DisplayTeam from './displayTeam'
import Navbar from './nabvar'
import Searchbar from './searchbar'

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [superheroData, setSuperheroData] = useState([]);

    function searchHero() {
        axios.get(`https://superheroapi.com/api/10159471963432710/search/${searchText}/`)
        .then((res) => {
           // Code for handling the response
           
            let response = JSON.stringify(res.data.results);
            //setSuperheroData(response);
            setSuperheroData(JSON.parse(response));
            
        })
        .catch((error) => {
            //alert("Api call error: ", error)
            // Code for handling the error
        })
    }

    
  function doSearch(e) {
   
      const searchInput = document.querySelector("#inputSearch").value  
      console.log(searchInput)
      const searchHeroName = e.target.value;

      setSearchText(searchHeroName)
        if (searchHeroName.length === 0) {
          setSuperheroData([]);
        }
        if (searchHeroName.length > 2) {
            searchHero();
        }
  }
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
      
        <h1 className={styles.title}>
          Welcome to the <span><a href="https://superheroapi.com/" target="_blank">Superhero</a></span> team builder
        </h1>

        <p className={styles.description}>
          You can start by adding someone to your team
        </p>
        <Searchbar doSearch={doSearch} searchHero={searchHero} />
        
        <DisplayHeroes superheroData={superheroData}/>  
        <div className={styles.grid}>
          <DisplayTeam  />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Coded by Francisco Chardin
        </a>
      </footer>
    </div>
  )
}
