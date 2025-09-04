import LoadSvg from "./LoadSvg";
function Card({ loading, movies, error }) {
  return (
    <div className="card">
      <div className="container" id="loadBox">
        <div className="card__title">Movies Portal</div>
        <div className="card__grid" id="movies-container">
          {loading && <LoadSvg />}

          {!loading &&
            !error &&
            movies.map((movie) => (
              <div key={movie.id} className="card__content">
                <div className="card__img">
                  <img src={movie.poster.url} alt="" />
                </div>
                <div className="card__info">
                  <h3 className="card__name">{movie.name}</h3>
                  <p className="card__rating">
                    Рейтинг :{" "}
                    {movie.rating?.kp ? movie.rating.kp.toFixed(1) : "Н/Д"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
