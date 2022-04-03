import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FreindDetail = () => {
    const friendId = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(() => {
     const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setFriend(data));
    }, [])
    return (
      <div>
            <h1>This is Friend Detail page: { friendId}</h1>
      </div>
    );
};

export default FreindDetail;