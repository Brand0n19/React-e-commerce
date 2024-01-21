import { useParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import useFetch from "../../../hooks/useFetch";

function ProductPage(){
    const {id} = useParams();
    const peticion = `products?id=${id}`;
    const [product, loading, error] = useFetch(peticion);

    return(      
            <section class="shop">
                <div class="container shop-item my-5 px-4 py-5">
                   {
                        loading ? (
                            <div>
                                <h4 className="text-center display-4">Cargando ....</h4>
                            </div>
                        ) : error ? (
                            <div>
                                <h4 className="text-center display-4">Uy no encontramos los productos!!</h4>
                            </div>
                        ) : (
                            <div class="row justify-content-between" id="shop-content"> 
                            {product.map(({     
                                id,
                                nombre,
                                detalle,
                                img,
                                color,
                                precio }) => (
                                <ProductDescription
                                    key={id}
                                    id={id}
                                    nombre={nombre}
                                    detalle={detalle}
                                    img={img}
                                    color={color}
                                    precio={precio}
                                />
                            ))}
                            </div>
                    )}
                </div>
            </section>

    )
    
}

export default ProductPage