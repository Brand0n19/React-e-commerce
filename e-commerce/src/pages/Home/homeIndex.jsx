import Hero from "./Hero"
import AboutUs from "./aboutUs"
import SaleDiscount from "./saleDiscount"
function Home(){
    return(
        <>
            <Hero/>
            <SaleDiscount peticion={"products?discount=1"}/>
            <AboutUs/>
        </>
    )
}

export default Home