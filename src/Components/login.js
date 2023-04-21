import axios from "axios"
import { useState } from "react"


const Login = () => {
  const [name, setName] = useState ('')
  const [pasword, setPassword] = useState ('')
  const handleNameChange = (e) => {
    console.log(e);
    setName(e.target.value)
  }
  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }
  const handleDelete = (name, password) => {
console.log(name, password);
axios({
  method:'delete',
  url:'https://api.themoviedb.org/3/account?api_key=cdcb78f44f696533bef8086793f8c791&session_id=ce680bd26b6356bf5d8673b99e780e5406250817',
  data:{
    name: name,
    pasword: pasword
  }
}).then(function(response){
  console.log(response.data.results);
})
  }
  const handleSubmit =() => {
console.log(name, pasword);
axios({
  method:'get',
  url:'https://api.themoviedb.org/3/account?api_key=cdcb78f44f696533bef8086793f8c791&session_id=ce680bd26b6356bf5d8673b99e780e5406250817',
  data:{
    name: name,
    pasword: pasword
  }
}).then(function(response){
  console.log(response.data.results);
})
  }
return(
  <div>
<form>
  <label>Nama</label>
    <input type="text" value={name} onChange={handleNameChange}/>
    <label>password</label>
    <input type="password" value={pasword} onChange={handlePassChange} />
    <input type="submit" onClick={handleSubmit} value='login' />
    <input type='submit' onClick={handleDelete} value={'logout'}/>
  </form>
  </div>
  
)
}

export default Login