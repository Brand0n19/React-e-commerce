import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import AlertInfo from "../../../utils/alertInfo";
import { useNavigate } from "react-router-dom";

const ProductDescription = ({
    id,
    nombre,
    detalle,
    img,
    color,
    precio

}) => {

    const [talla, setTalla] = useState(''); 
    const [cantidad, setCantidad] = useState(1);
    const [showAlert, setShowAlert] = useState({ variant: '', title: '', content: '' });
    const navigate = useNavigate();



    const handleTallaChange = (e) => {
        setTalla(e.target.value);
    };

    const handleCantidadChange = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (talla && cantidad > 0) {
            setShowAlert({
                variant: 'success',
                title: 'Compra exitosa',
                content: `Talla: ${talla}, Cantidad: ${cantidad}`
            });

            setTimeout(() => {
                setTalla('');
                setCantidad(1);
                setShowAlert({ variant: '', title: '', content: '' });
            }, 1000);



        } else {
            setShowAlert({
                variant: 'danger',
                title: 'Error',
                content: 'Por favor, selecciona la talla y la cantidad antes de comprar'
            });
        }
    };

    useEffect(() => {
        if (showAlert.variant === 'success') {
            setTimeout(() => {
                navigate("/card", {
                    state: {
                      id,
                      cantidad,
                      talla
                    },
                  });
            }, 1000); 
        }
    }, [showAlert.variant, navigate]);
    return(
        <>                     
            <div class="col-md-6" >
                <img src={img} class="img-fluid" alt=""/>
            </div>
            <div class="col-md-5 my-4 my-md-auto">
                <h1 class="product-name fw-bolder mb-5 t-font">{nombre}</h1>
                <p class="mb-3 s-font">{detalle}</p>
                <p class="mb-3 s-font"><span class="fw-bolder">Color:</span> {color}</p>
                <p class="mb-3 s-font fw-bolder price">S/. {precio}</p>
                <form action="" class="form" id="formBuy" onSubmit={handleSubmit}>
                    <div class="row justify-content-between align-items-center">
                        <div class="input-group mb-3 s-font">
                            <select 
                                class="form-select" 
                                id="inputGroupSelect01" 
                                value={talla}
                                onChange={handleTallaChange}
                            required>
                            <option selected>Talla</option>
                            <option value="L">L</option>
                            <option value="M">M</option>
                            <option value="S">S</option>
                            </select>
                        </div>
                        <div class="row m-0 justify-content-between">
                            <div class="col p-0">
                                <input 
                                    type="number" 
                                    class="fomr-control text-center"                                    
                                    name="" 
                                    id="cantidad" 
                                    value={cantidad}
                                    onChange={handleCantidadChange}
                                    min="1" 
                                    max="10"
                                />
                            </div>
                            <div class="col p-0">
                                <Button class="btn m-0 fw-bold comprar-btn" type="submit" >
                                    Comprar
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="s-font mt-3" id="show-alert">
                            <AlertInfo
                                variant={showAlert.variant}
                                title={showAlert.title}
                                content={showAlert.content}
                            />
                </div>
            </div> 
    
        </>
    )
}

export default ProductDescription