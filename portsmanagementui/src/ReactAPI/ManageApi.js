import axios from 'axios';
//require('dotenv').config();

const serverURL = process.env.REACT_APP_SERVER_API_URL;

export function GetShip(id) {
    console.log(serverURL);
    axios.get(`${serverURL}/Ship/Get/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}

export async function GetShips() {
    var result;
    axios.get(`${serverURL}/Ship/Get`)
        .then(res => {
            console.log(res);
            result = res.data;
        })
    console.log(result);
    return result;
}

export function UpdateShips(ship) {
    console.log(ship);
    axios.post(`${serverURL}/Ship/Save`, ship)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }));
}

export function DeleteShip(id) {
    axios.delete(`${serverURL }/Ship/Delete/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
}
