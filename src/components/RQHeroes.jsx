import axios from 'axios'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useQuery } from 'react-query'
import NavBar from './Navbar'

const fetchRQHeroes = () => {
  return axios.get("http://localhost:8080/superheroes");
}

// stale time mane eto somoyer maje ei component e gele ar req hobe na
// refetchOnMount false mane  second time ei component e gele refetch hobe na
// refetchOnMount 'always' mane  
// refetchOnWindowFocus => true / false / 'always'
// refetchInterval => false / mili seconds
// enabled => based on event fire api req
// select => data transformation er jonno
// custom query hook
// query by id

const RQHeroes = () => {

  const onSuccess = (data) => {
    console.log('when data fetching is success than call this function')
    console.log(data, 'data')
  }
  
  const onError = (error) => {
    console.log('when error happend in req than call this function')
    console.log(error, 'error')
  }

  const {isLoading, isSuccess, data, isError, error} = useQuery('superheroes', fetchRQHeroes, {
    refetchOnMount: 'always',
    onSuccess,
    onError, 
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