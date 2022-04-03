import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
    const { name, username, email, address, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        const path = `/friend/` + id;
        navigate(path)
    }
  return (
      <div>
          
          <h1>Name:{name}</h1>
          <Link to={'/friend' + id}>Show Detail</Link>
      <button onClick={showFriendDetail} className="bg-green-500 rounded text-white fw-1xl p-2">
        {username} id: {id}
      </button>
      <p>Email: {email}</p>
      <p>
        <small>Address: {address.street}</small>
      </p>
    </div>
  );
};

export default Friend;
