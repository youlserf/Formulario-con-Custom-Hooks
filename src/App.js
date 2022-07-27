import React, {useState, useEffect} from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';

export default function App() {


  const initialstate = {nombre: "", email: "", password: ""};
  const [usuario, setUsuario] = useState(initialstate);    
  
  //CAPTURAR VALORES
  const handleInputChange = (e)=>{
      
      setUsuario({
          ...usuario, 
          [e.target.name]: e.target.value
      });
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(usuario);
    try {
       
    }
    catch(error){
        console.log(error);
    }
  }

  return (
    <div className='container row justify-content-center'>
    <form className='col-auto' onSubmit={handleSubmit} method="post">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Usuario</label>
        <input type="text" className="form-control" name="nombre" value={usuario.nombre} onChange={handleInputChange} id="exampleInputEmail1"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail2" className="form-label">Email</label>
        <input type="email" className="form-control" name="email" value={usuario.email} onChange={handleInputChange} id="exampleInputEmail2"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail3" className="form-label">Password</label>
        <input type="password" className="form-control" name="password" value={usuario.password} onChange={handleInputChange} id="exampleInputEmail3"/>
      </div>
      <p><input type="submit" className="btn btn-primary form-control" value="Enviar"></input></p>
      </form>
      
    </div>
  );
}
