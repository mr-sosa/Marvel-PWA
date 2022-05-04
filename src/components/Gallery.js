import { React, useState, useEffect } from 'react';
import { Card } from './Card';
const API_RICK_MORTHY = 'https://rickandmortyapi.com/api/character/?page=';
const API_MARVEL = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=5883e75221d02069cbda071407a739e6&hash=826c493a3bb3c91794e8c6bf8b90e775';

async function getDataAll(page) {
  const result = await fetch(API_RICK_MORTHY + page);
  const data = await result.json();
  //console.log('result', data.results);
  return data.results;
}

export const Gallery = (props) => {
    const { page } = props;
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        var offset = (page-1)*20;
        fetch(API_MARVEL+'&offset='+offset)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(res => setCharacters(res.data.results))
    });

    return (
        <div className='gallery-container'>
            {characters.map((elm, index) => (
              <Card
                key={index}
                name={elm.name}
                url={elm.thumbnail.path + '.' + elm.thumbnail.extension}
                description={elm.description}
                link={elm.urls[0].url}
            ></Card>
            ))}
        </div>
    );
}