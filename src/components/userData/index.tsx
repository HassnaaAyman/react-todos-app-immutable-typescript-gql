import React, { useState } from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import update from 'immutability-helper';

const USER_DATA = gql`
  {
    users {
      name
      email
    }
  }
`;


const UserData = () => {
  const { loading, data, error } = useQuery(USER_DATA);
  const [userData] = useState<any>({})
 
  const newState = update(userData , {$apply : ()=> {
    let x  = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        x = element
      }
    }
    return x
  }})
  
  console.log(newState);
  

return( <div>
    <h1>{newState.map((item:any)=><span>{item.name}</span>)}</h1>
    <p>{newState.map((item:any)=>item.email)}</p>
  </div>);
};

export default UserData;
