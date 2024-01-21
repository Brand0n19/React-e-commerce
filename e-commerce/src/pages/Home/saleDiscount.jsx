import Products from "../../utils/productFill";
import useFetch from "../../hooks/useFetch";

function SaleDiscount({peticion}){

    const [product, loading, error] = useFetch(peticion);

    return(
        <section class="sale py-5">
            <div class="container ">
          <h2 class="p-font mb-5 fw-bold">Discount</h2>
                {
                    loading ? (
                        <div>
                            <h4>Cargando ....</h4>
                        </div>
                    ) : error ? (
                        <div>
                            <h4>Ocurrió un error al cargar los productos.</h4>
                        </div>
                    ) : (
                        
                        <div class="row px-2 sale-product sale-dad ">
                            {product.map(({ id, nombre, img, tipo, discount, precio }) => (
                            <Products
                                key={id}
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
        </section>

    );
}

export default SaleDiscount