import {React, useState, useEffect} from 'react';
import {getUsers} from '../services/users.js'

    
function UsersPagination(){
    const [users, setUsers] = useState([]);

    useEffect( async () => {
        const {data} = await getUsers();
        setUsers(data) //De esta manera hacemos destructuring trayendo solo data de la respuesta  del fetch
    }, []);    

    const roles = {1: "Administrador", 2: "Usuario"} //Esto permite la escalabilidad del proyecto por si llegan a haber más roles no tener que estar validando con un if o un ternario

    return(
        <>
            <div className="col-lg-10 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Usuarios en el sistema</h5>
                    </div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Nombre</td>
                                    <td>Apellido</td>
                                    <td>Email</td>
                                    <td>Rol</td>
                                    <td>Acciones</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return(
                                            <tr>
                                                <td>{user.name}</td>
                                                <td>{user.lastname}</td>
                                                <td>{user.email}</td>
                                                <td>{roles[user.rol] }</td>
                                                <td>
                                                    Ver
                                                </td>
                                            </tr>
                                            )
                                        } 
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersPagination;
