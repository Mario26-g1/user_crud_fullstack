/* eslint-disable react/prop-types */

const UserCard = ({ user, deleteUserById, setUpdateInfo }) => {
    const handleDelete = () =>{
        deleteUserById('/users', user.id)

    }

    const handleUpdate = () =>{
      setUpdateInfo(user)
    }
  return (
    <article className="card__article">
      <h2 className="card__name">{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <hr />
        <li className="card__list">
          <span className="card">Email</span><br />
          <span className="card__email">{user.email}</span>
        </li>
        <li className="card__list">
          <span className="card">Birthday</span><br />
          <span className="card__birt">{user.birthday}</span>
        </li>
        <hr />
      </ul>
      <button className="card__button eliminar" onClick={handleDelete}><i className='bx bx-trash bx-sm'></i></button>
      <button className="card__button update" onClick={handleUpdate}><i className='bx bx-edit bx-sm'></i></button>
    </article>
  );
};

export default UserCard;
