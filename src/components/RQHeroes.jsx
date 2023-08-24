import axios from 'axios'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useQuery } from 'react-query'
import NavBar from './Navbar'

const fetchRQHeroes = () => {
  return axios.get("http://localhost:8080/superheroes");
}

const RQHeroes = () => {
  const {isLoading, isSuccess, data, isError, error} = useQuery('superheroes', fetchRQHeroes, {
    cacheTime: 5000,
    staleTime: 10000
  })

  let content = null;
  if(isLoading) {
    content = <h2>Loading.....</h2>
  }

  if(isError) {
    content = <div>{error.message}</div>
  }

  if(isSuccess) {
    content = <div>
      <ul>
      {data?.data.map(hero => <li key={hero.id}>{hero.name}</li>)}
      </ul>
    </div>
  }
  
  return (
    <>
      <NavBar />
      <Container>
        { content }
    </Container>
    </>
  )
}

export default RQHeroes