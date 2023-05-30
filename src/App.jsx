import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import Card2 from './Card2.jsx';
import './Card.css'
import './Card2.css'


export default function App() {

  const [imagePath, setImagePath] = useState([]);

  const [cardText, setCardText] = useState("");

  const [name, setName] = useState("");

  const [surname, setSurname] = useState("");

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        else {
          throw new Error("Error fetching data");
        }
      })
      .then((data) => {
        setImagePath(data.results[0].picture.large);

        setName(`${data.results[0].name.first}`);

        setSurname(`${data.results[0].name.last}`)

        setCardText(
          `${data.results[0].name.first} lives in ${data.results[0].location.state}, ${data.results[0].location.country}.
           At ${data.results[0].dob.age} years of age, ${data.results[0].name.first} has become a world-renowned photographer.`
        );

        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      })

  }, []);

  return (
    // <Card isLoaded={isLoaded} image={imagePath} text={cardText} name={name} surname={surname} />
    <Card2 isLoaded={isLoaded} image={imagePath} text={cardText} name={name} surname={surname} />

  )

}


