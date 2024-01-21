import { Form } from "react-bootstrap";
import useFetch from "../../../hooks/useFetch";
import Products from "../../../utils/productFill";


const ProductList = ({peticion, title}) => {
    const [product, loading, error] = useFetch(peticion);

    return (

        <section className="products pb-md-5">
            <div className="products-content py-4 ">
                <div className="container py-4 px-3 my-5 text-center">
                    {
                        title ? (

                        <div>
                            <h1 className="display-4 p-font fw-bolder">
                                {title}
                            </h1>
                            <p className="lead s-font fw-normal mb-0">
                                Todos los <span className="text-lowercase">{title}</span> de la tienda
                            </p>
                        </div>
                        ) : (

                            <div>
                            <h1 className="display-4 p-font fw-bolder">
                                Productos
                            </h1>
                            <p className="lead s-font fw-normal mb-0">
                                Todos los Productos de la tienda
                            </p>
                            </div>

                        )

                    }
                </div>
            </div>

            <div className="products_items container-lg px-4 mt-md-4 rounded px-md-3">
                <div className="justify-content-between row">
                    {
                        title && 
                        <h2 className="col-5 display fw-bold py-4 t-font ">
                            Productos
                        </h2>
                    }
                </div>          
                <div className="products-items py-4">
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
                        <div className="row card-dad justify-content-between">
                        {product.map(({ id, nombre, img, tipo, discount, precio }) => (
                            <Products
                            key={id}
                            id={id}
                            nombre={nombre}
                            img={img}
                            tipo={tipo}
                            discount={discount}
                            precio={precio}
                            />
                        ))}
                        </div>
                    )}
                </div>               
            </div>
        </section>

    );
}

export default ProductList