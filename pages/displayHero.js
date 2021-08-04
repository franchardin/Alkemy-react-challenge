import Head from 'next/head'
import React, { useState } from 'react'
import styles from '../styles/DisplayHero.module.css'

export default function displayHero(props) {

  const { data } = props;
  const [display, setDisplay] = useState({display: 'none'});
  const [isModalDisplayed, setIsModalDisplayed] = useState({display: 'none'});
  const [superheroTeam, setSuperheroTeam] = useState([])

  function toggleHeroDetails() {

    if(isModalDisplayed.display == 'block') {
      setIsModalDisplayed({display: 'none'})
    } else{
      setIsModalDisplayed({display: 'block'})
    } 
  }

  function addHero() {
    setSuperheroTeam((superheroTeam) => [
      ...superheroTeam,
      data,
    ]),
    console.log(superheroTeam)
  }

  return (
    
      <div  className={styles.heroCard} 
        onMouseEnter={e => {
          setDisplay({display: 'block'});
      }}  
      onMouseLeave={e => {
          setDisplay({display: 'none'})
      }}>
      <div className={styles.left} style={display} onClick={toggleHeroDetails}>?</div>
      <div className={styles.right} style={display} onClick={addHero}>+</div>
        <div>
        
          <div>
            <img src={data.image.url} alt="`${data.name}-image`"></img>
          </div>
          <h1>{data.name}</h1>
          <div className={styles.heroDetailsModal} style={isModalDisplayed}>
            <h5>{data.name}</h5>
            <div>{data.biography['full-name']}</div>
            <p><i>{data.biography.aliases}</i></p>
            <div>Eyes color: {data.appearance.["eye-color"]}</div>
            <div>Hair color: {data.appearance.["hair-color"]}</div>
            <div>Height: {data.appearance.height[1]}</div>
            <div>Weight: {data.appearance.weight[1]}</div>
            <div className={styles.work}>Work: {data.work.occupation}</div>
          </div>
          
          <div className={styles.heroPowerstats}>
            <h5>Stats</h5>
            <div>Intelligence: {data.powerstats.intelligence}</div>
            <div>Strength: {data.powerstats.strength}</div>
            <div>Speed: {data.powerstats.speed}</div>
            <div>Durability: {data.powerstats.durability}</div>
            <div>Power: {data.powerstats.power}</div>
            <div>Combat: {data.powerstats.combat}</div>
          </div>
        </div>
      </div>
  )
}
    
    
