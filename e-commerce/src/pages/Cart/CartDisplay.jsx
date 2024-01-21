import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { CartItem } from "./CartItem";

function CartDisplay() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const ruta = state ? JSON.stringify(state.id) : useState(localStorage.getItem("id"));
    const [data] = useFetch(ruta ? `products?id=${ruta}` : null);
    
    const [cartData, setCartData] = useState(state || {});

    useEffect(() => {
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }, [cartData]);

    useEffect(() => {
        const storedCartData = localStorage.getItem('cartData');
        if (storedCartData) {
            setCartData(JSON.parse(storedCartData));
        }
    }, []);
    

    return (
        <section className="purchases">
            <div className="container shop-item mb-5 px-4 py-5">
                <h1 className="p-font my-5 fw-bolder">Resumen de la compra</h1>
                {Object.keys(cartData).length > 0 ? (
                    <div className="row" id="shop-list">
                        {data && data.map(({ id, img, precio }) => (
                            <CartItem 
                                key={id}
                                id={id}
                                img={img}
                                cantidad={JSON.stringify(cartData.cantidad)}
                                talla={JSON.stringify(cartData.talla)}
                                precio={precio}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="fw-bold text-center">
                        <p className="display-5">No hay productos en la canasta.</p>
                    </div>
                )}
                <Button className="mt-5" onClick={() => navigate("/")}>
                    Seguir comprando
                </Button>
            </div>
        </section>
    );
}

export default CartDisplay;

