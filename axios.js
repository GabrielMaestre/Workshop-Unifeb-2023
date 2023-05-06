import axios from "axios";

axios.post('http://localhost:8080/teste', {
 nome: 'Gabriel',
 qi: -1
})
.then(function (response) { console.log(response.data); })
.catch(function (error) { console.log(error); });