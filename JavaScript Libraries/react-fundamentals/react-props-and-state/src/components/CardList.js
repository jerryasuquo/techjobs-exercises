import React from "react";

export default function CardList(props) {
  const { myFriends } = props;
  const myFriendsList = myFriends.map((friend, index) => {
    return (
      <div key={friend.id} id="cards-div">
        <img src={`https://robohash.org/${friend.id}`} alt="footballar" />
        <h2 className="tc">{friend.name}</h2>
        <p className="tc uname">{friend.username}</p>
        <p className="tc email">{friend.email}</p>
        <p className="tc website">{friend.website}</p>
      </div>
    );
  });

  return <div id="card-container">{myFriendsList}</div>;
}
