export default function Card() {
  return (
    <>
      <div className="card">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          width="100px"
          height="100px"
        />
        <p>Bulbasaur</p>
        <div className="row">
          <div className="type">Fire</div>
          <div className="type2">Flying</div>
        </div>
      </div>
    </>
  );
}
