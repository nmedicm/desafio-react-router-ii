import pikachu from "/src/assets/pikachu.png"

const Home = () => {
    return(
        <>
        <div className="home-body">
            <h1>Bienvenido maestro pokemón</h1>
            <img src={pikachu}></img>
        </div>    
        </>
    )
}

export default Home