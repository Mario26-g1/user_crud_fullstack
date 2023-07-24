import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './formulario.css';

// eslint-disable-next-line react/prop-types
const Formulario = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo }) => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const handleCrearUsuario = () => {
    setMostrarFormulario(true);
  };

  const handleCloseFormulario = () => {
    setMostrarFormulario(false);
  };

  const submit = (data) => {
    if (updateInfo) {
      // update
      // eslint-disable-next-line react/prop-types
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      // crear
      createNewUser("/users", data);
    }

    reset({
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  return (
    <>
      {mostrarFormulario && (
        <div className="form__date">
          <button className="button__close" onClick={handleCloseFormulario}><i className='bx bx-x bx-sm'></i></button>
          <form className="form" onSubmit={handleSubmit(submit)}>
          <div>
        <label className="list" htmlFor="email">Email</label>
        <input {...register('email')} id="email" type="email" />
    </div>
    <div>
        <label className="list" htmlFor="password">Password</label>
        <input {...register('password')} id="password" type="password" />
    </div>
    <div>
        <label className="list" htmlFor="first_name">First name</label>
        <input {...register('first_name')} id="first_name" type="text" />
    </div>
    <div>
        <label className="list" htmlFor="last_name">Last name</label>
        <input {...register('last_name')} id="last_name" type="text" />
    </div>
    <div>
        <label className="list" htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} id="birthday" type="date" />
    </div>
    
    <button className="button">{updateInfo ? 'Update' : 'Agregar nuevo usuario'}</button>
   
          </form>
        </div>
      )}

      {!mostrarFormulario && (
        <button  className="button__hidden" onClick={handleCrearUsuario}> <i className='bx bx-plus bx-sm'></i>Crear nuevo usuario</button>
      )}
    </>
  );
};

export default Formulario;













