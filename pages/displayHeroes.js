import Head from 'next/head'
import React from 'react'
import styles from '../styles/DisplayHeroes.module.css'
import DisplayHero from './displayHero'

export default function displayHeroes(props) {

  const { superheroData } = props;
  
    return (
      <>
      {superheroData && superheroData.length > 0 ? 
        <div className={styles.heroesContainer}>
          {superheroData.map(superhero => 
            <DisplayHero data={superhero} />
          )}
        </div>
        : <></>
        }
      </>
  )
}