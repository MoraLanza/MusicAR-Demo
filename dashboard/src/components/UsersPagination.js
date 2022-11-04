import {React} from 'react';

    
function UsersPagination(){
    const url = `http://localhost:3000/api/users`;
    const users = fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // setUsers(data.Search);
        })
        .catch(err => {
            console.log(err);
        });

    // React.useEffect(() => {
	// }, []);

    console.log(users)

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
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lidia</td>
                                <td>Paiva</td>
                                <td>lidia@gmail.com</td>
                                <td>
                                    Ver
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

export default UsersPagination;
