import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import Formulario from "./components/Formulario";
import UserCard from "./components/UserCard";
import { URL_API } from "../url";

function App() {
  const [updateInfo, setUpdateInfo] = useState()

  const urlUser = URL_API.url

  // const baseUrl = 'https://users-crud.academlo.tech/'
  const baseUrl = `${urlUser}`

  const [users, 
    getAllUser, 
    createNewUser,
    deleteUserById, 
    updateUserById] 
    = useFetch(baseUrl);

  useEffect(()=>{
    getAllUser('/users')
  }, [])

  console.log(users)

  return (
    <>
      <div className="div__section">
        <h1 className="users"><i className='bx bxs-user-account'></i>Users</h1>
        <Formulario
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={ updateUserById}
        setUpdateInfo={setUpdateInfo}
        
        />
        <div className="card__section">
          {
            users?.map(user=>(
              <UserCard
              key ={user.id}
              user={user} 
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}/>
              
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
