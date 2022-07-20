import React, {useState, useEffect} from 'react'


function App(){
    const [displayDog, setDisplayDog] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            setDisplayDog(data.message);
            setIsLoaded(true);
          });
      },
       []);
       if (!isLoaded) return <p>Loading...</p>;
       return <div><img src={displayDog} alt ="dogCeo" /></div>
}
export default App;