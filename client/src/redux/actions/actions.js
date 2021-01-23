import {GET_CONTACTS} from "./actionTypes"
import axios from "axios"

export const getContacts = () => dispatch => {
    axios.get('/contacts/getting')
    .then(res=>dispatch({type:GET_CONTACTS, payload:res.data}))
    .catch(err=>console.log(err))
}

export const addContacts = (newContact) => dispatch => {
    axios.post('/contacts/addContact', newContact)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const deleteContact = (idContct) => dispatch => {
    axios.delete(`/contacts/deleto/${idContct}`)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}

export const editContact = (idContct, updtdCntct) => dispatch => {
    axios.put(`/contacts/update/${idContct}`, updtdCntct)
    .then(res=>dispatch(getContacts()))
    .catch(err=>console.log(err))
}