import React from "react";
import { NewRoomForm} from './NewRoomForm';

export const House = (props) => {
    const { house, updateHouse } = props;

    const deleteRoom = (roomId) => {
        const updatedHouse = {
            ...house, 
            rooms: house.rooms.filter((x) => x._id !== roomId)
        };
        updateHouse(updatedHouse);
    } //For this function we are assigning a new variable the value of a new object.  We spread the house that is passed in to ln 5.  We take all the values from it except those we explicitly declare afterwards, so rooms on ln 10 is going to be updated to a different value, the different value is really going to be the same value - the room we are filtering out.  Then we take that house and send it to our updateHouse method.

    const addNewRoom = (room) => updateHouse({...house, rooms: [...house.rooms, room]}); //Any time we update props or state we want to add a new object or array, never modify the existing one.  This new array takes all the values from the old array and adds the new room to it.
    
    const rooms = () => (
        <ul>
            {house.rooms.map((room, index) => (
                <li key={index}>
                    <label> {`${room.name} Area: ${room.area}`}</label>
                    <button className="btn btn-outline-dark" onClick={(e) => deleteRoom(room._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return (
        <div>
          <h1>{house.name}</h1>
          {
              rooms({ rooms, houseId: house._id, deleteRoom}) //rooms is a function that takes the following props.
          }
          <NewRoomForm addNewRoom={addNewRoom} />
        </div>
    );
};