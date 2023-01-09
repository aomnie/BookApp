import { ADD_BOOK, EDIT_BOOK,CHANGE_DONE } from "../Constants/action-types";

export const addBook = ( payload)=>{
console.log(payload,"action")
return {
    type:ADD_BOOK,
    payload:payload
}
}


export const editBook = (payload) => {
  console.log(payload, "action");
  return {
    type: EDIT_BOOK,
    payload: payload,
  };
};

export const changeDone = (payload) => {
  console.log(payload, "action");
  return {
    type: CHANGE_DONE,
    payload: payload,
  };
};