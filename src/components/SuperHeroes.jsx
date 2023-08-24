import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Navbar";

const SuperHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8080/superheroes").then((data) => {
      setIsLoading(false);
      setHeroes(data.data);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <NavBar />
      <Container>
        <ul>
          {heroes.map((hero) => (
            <li key={hero.id}>{hero.name}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default SuperHeroes;
