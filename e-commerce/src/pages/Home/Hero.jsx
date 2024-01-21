import AutoplaySwipper from "../../utils/autoplaySwipper"

function Hero(){
    return(
        <>
        <section class="hero" id="carousel-hero">
            <AutoplaySwipper/>
            <div class="hero_content ">
                <div>
                    <div class="titulo mb-2 justify-content-center px-4 ">
                        <h1 class="p-font">Creado para la comodidad</h1>
                    </div>
                    <div class="subtitulo ">
                        <p class="t-font px-4">Explora nuestra nueva coleccion para verano</p>
                    </div>
                </div>
            </div>
        </section>  
        </>
    )
}

export default Hero