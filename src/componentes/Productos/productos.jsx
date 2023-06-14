import './productos.css'

function productos() {
    const ejemploproducto = "https://image.similarpng.com/very-thumbnail/2021/08/Graphics-card-isolated-on-transparent-background-PNG.png";
  return (
    <div>
    <h2>OFERTA DEL DIA!!!</h2>
        <img className='producto' src={ejemploproducto} alt="ejemplo" />
    </div>
  )
}

export default productos