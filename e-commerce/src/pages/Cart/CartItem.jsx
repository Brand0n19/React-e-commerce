export const CartItem = ({
    id,
    img,
    color,
    talla,
    cantidad,
    precio
}) => {
  return (
    <div class="col-12 border-top border-bottom" id={id}>
      <div class="row justify-content-between align-items-center">
          <div class="col imagen">
              <img class="img-fluid" width="50%" src={img} alt=""/>
          </div>
          <div class="col-5 content text-center s-font">
              <p><span class="fw-bolder">Color: </span>{color}</p>
              <p><span class="fw-bolder">Talla: </span>{talla}</p>
          </div>
          <div class="col-2 cost text-center s-font">
              S/. {precio}
          </div>
          <div class="col-1 quantity text-center s-font">
              {cantidad}
          </div>
      </div>
    </div>
  );
};
