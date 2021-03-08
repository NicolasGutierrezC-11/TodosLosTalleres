import React, { useEffect, useState} from 'react';

export default function UsoHooks() {

  /* NOMBRE */
  const [usuario, setusuario] = useState({
    Nombre: ""
  });
  const handlechange = (evento) => {
    const { name, value } = evento.target;
    setusuario({ ...usuario, [name]: value });
  };

  useEffect(() => {
    console.log(usuario);
  }, [usuario]);

  /* APELLIDOS */

  const [apellidos, setapellidos] = useState({
    Nombre: ""
  });
  const apellido = (evento) => {
    const { name, value } = evento.target;
    setapellidos({ ...apellidos, [name]: value });
  };

  useEffect(() => {
    console.log(apellidos);
  }, [apellidos]);

  /* EMAILS */
  
  const [emails, setemails] = useState({
    Nombre: ""
  });
  const email = (evento) => {
    const { name, value } = evento.target;
    setemails({ ...emails, [name]: value });
  };

  useEffect(() => {
    console.log(emails);
  }, [emails]);


  /* TELEFONOS */

  const [telefonos, settelefonos] = useState({
    Nombre: ""
  });
  const telefono = (evento) => {
    const { name, value } = evento.target;
    settelefonos({ ...telefono, [name]: value });
  };

  useEffect(() => {
    console.log(telefonos);
  }, [telefonos]);
    
  /* DIRECCIONES */

  const [direcciones, setdirecciones] = useState({
    Nombre: ""
  });
  const direccion = (evento) => {
    const { name, value } = evento.target;
    setdirecciones({ ...direcciones, [name]: value });
  };

  useEffect(() => {
    console.log(direcciones);
  }, [direcciones]);

  /* ESCRIBES */
  const [escribes, setescribes] = useState({
    Nombre: ""
  });
  const escribe = (evento) => {
    const { name, value } = evento.target;
    setescribes({ ...escribes, [name]: value });
  };

  useEffect(() => {
    console.log(escribes);
  }, [escribes]);
  
 /* RETURN */

  return (
    <>
      <div id="cente">
      <div id="letras">
          <h1>PONTE EN CONTACTO</h1>
        </div>
        <p>
          <input
            onChange={handlechange}
            name="Nombre"
            id="nombre"
            placeholder="  Nombre"      
          />
          <input
            onChange={apellido}
            name="Nombre"
            id="apellidos"
            type="text"
            placeholder="  Apellidos"
          />
        </p>  
        <p>
          <input
            onChange={email}
            name="Nombre"
            id="email"
            type="text"
            placeholder="  Email"
          />
          <input
            onChange={telefono}
            name="Nombre"
            id="telefono"
            type="text"
            placeholder="  Telefono"
          />
        </p>
        <p>
          <input
            onChange={direccion}
            name="Nombre"
            id="direccion"
            type="text"
            placeholder="  Direccion"
            size="46"
          />
        </p>
        <textarea
          onChange={escribe}
          name="Nombre"
          id="escribir"
          placeholder=" Escribe tu mensaje aqui"
          rows="3"
          cols="48"
        ></textarea>  
        <p>
          <button onClick = {() => alert(`Gracias por escribirnos:  
                                        Nombre: ${usuario.Nombre} ${apellidos.Nombre}
                                        Email: ${emails.Nombre} 
                                        Telefono: ${telefonos.Nombre}
                                        Direccion: ${direcciones.Nombre}  
                                        Sugerencias: ${escribes.Nombre}`)} id="boton" >ENVIAR</button>
        </p>
      </div>
    </>
  );
}
