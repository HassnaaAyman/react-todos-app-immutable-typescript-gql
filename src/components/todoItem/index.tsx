import React from "react";
import { TodoProps } from "../../infrastructure/interface/index.interface";


const Todo:React.FC<TodoProps> = ({item}) => {
  return <>
       <p>{item}</p>
       </>;
};

export default React.memo(Todo);
