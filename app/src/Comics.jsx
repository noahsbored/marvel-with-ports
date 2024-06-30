import React, { useEffect, useState } from 'react';
import md5 from 'md5';

const Comics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const ts = '1';
    const publicKey = '6844622a9f70a43d99efc5f70803549f';
    const privateKey = '6c71b156f9570c13e44e44b693ea5284768431d2';
    const hash = md5(ts + privateKey + publicKey);

    const fetchComics = async () => {
      const response = await fetch(`https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
      const data = await response.json();

      if (data.data && data.data.results) {
        setComics(data.data.results);
      }
    };

    fetchComics();
  }, []);

  return (
    <div>
      <h2>Comics Page</h2>
      <div className="comics-list">
        <ul>
          {comics.map(comic => (
            <li key={comic.id}>{comic.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comics;
