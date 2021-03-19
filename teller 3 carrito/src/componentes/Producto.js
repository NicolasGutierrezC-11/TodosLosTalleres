import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { CardActionArea, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const Producto = ({ producto, carrito, agregarProducto, productos }) => {
  const { nombre, precio, id, imagen } = producto;
  const classes = useStyles();

  // Agregar producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => producto.id === id)[0];
    agregarProducto([...carrito, producto]);
  };

  // Elimina un producto del carrito
  const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);

    // Colocar los productos en el state
    agregarProducto(productos);
  };

  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      <Grid container justify="center" spacing={5} className={classes.root}>
        <Grid item xl={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardContent>
                <Typography>{nombre}</Typography>
              </CardContent>
              <CardMedia component="img" Key={id} image={`${imagen}`} />
              <CardContent>
                <CardActions disableSpacing>
                  <Typography>${precio} Dolares</Typography>
                  <p
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded
                    })}
                  >
                    {productos ? (
                      <Button
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                        size="small"
                      >
                        Comprar
                      </Button>
                    ) : (
                      <Button
                        size="small"
                        type="button"
                        onClick={() => eliminarProducto(id)}
                      >
                        Eliminar
                      </Button>
                    )}
                  </p>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Producto;
