import Proptypes from "prop-types"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Products = ({
    id,
    nombre,
    img,
    tipo,
    discount,
    precio
}) => {
    const navigate = useNavigate();

    return (
        <div className={
            discount ? "col-12 col-sm-6 sale-card col-md-4 my-3" : "col-12 col-sm-6 product-card col-md-4 my-3"
        }>
            <div className={
                discount ? "card text-center " :
                "card text-center product-content"
            } style={{ width: '100%' }} >
                <div className="img-dad border-bottom" >
                    <img src={img} className="card-img-top " alt={tipo}/>                  
                </div>
                <div className="card-body">
                    <h5 className="card-title s-font">{nombre}</h5>
                    <p className="card-text t-font">S/. {precio}</p>
                    <Button className="btn carrito-btn s-font btn-primary"
                    onClick={() => {navigate(`/productos/${id}`); console.log(id)}}
                    >
                        Ver
                    </Button>
                </div>
            </div> 
        </div>
    )
}
    //comprobar el contenido de cada uno
    Products.prototypes = {
        precio: Proptypes.number.isRequired,
        tipo : Proptypes.string.isRequired,
        nombre : Proptypes.string.isRequired,
        img : Proptypes.string
    }

    Products.defaultProps = {
        img : '../../src/assets/images/no-t-shirt.jpeg',
    }


export default Products;