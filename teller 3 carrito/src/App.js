import React, { Fragment, useState } from "react";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import Producto from "./componentes/Producto";
import Carrito from "./componentes/Carrito";

function App() {
  // Crear listado de productos
  const [productos, guardarProductos] = useState([
    {
      id: 1,
      nombre: "Camisa ReactJS",
      precio: 50,
      imagen:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=hunters-race-MYbhN8KaaEc-unsplash.jpg"
    },
    {
      id: 2,
      nombre: "Camisa VueJS",
      precio: 40,
      image:
        "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxw"
    },
    {
      id: 3,
      nombre: "Camisa Node.js",
      precio: 30,
      image:
        "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=andrew-neel-HqtYwlY9dxs-unsplash.jpg"
    },
    {
      id: 4,
      nombre: "Camisa Angular",
      precio: 20,
      image:
        "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=benjamin-voros-TnNo84AJJ5A-unsplash.jpg"
    }
  ]);

  // State para un carrito de compras
  const [carrito, agregarProducto] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito carrito={carrito} agregarProducto={agregarProducto} />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
