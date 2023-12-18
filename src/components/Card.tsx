export default function Card() {
  return (
    <>
      <div className="card">
        <h4>Pokemon</h4>
        <img src="../assets/bulbasaur.png" />
        <p>Bulbasaur</p>
        <div className="row">
          <div className="type">Fire</div>
          <div className="type2">Flying</div>
        </div>
      </div>
    </>
  );
}
