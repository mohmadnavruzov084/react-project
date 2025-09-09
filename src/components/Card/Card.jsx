import LoadSvg from "../../assets/LoadSvg.svg?react";

import styles from "./card.module.scss";
function Card({ loading, movies, error }) {
  return (
    <div className={styles.card}>
      <div className={styles.container} id="loadBox">
        <h1 className={styles.card__title}>Movies Portal</h1>
        <div className={styles.card__grid} id="movies-container">
          {loading && <LoadSvg className={styles.spinner} />}

          {error && <p className={styles.error}>{error}</p>}

          {!loading && !error && movies.length === 0 && (
            <div className={styles.noResults}>Фильмы не найдены</div>
          )}

          {!loading &&
            !error &&
            movies.map((movie) => (
              <div key={movie.id} className={styles.card__content}>
                <div className={styles.card__img}>
                  <img
                    src={movie.poster?.url}
                    alt={movie.name}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x450/333/fff?text=No+Image";
                    }}
                  />
                </div>
                <div className={styles.card__info}>
                  <h3 className={styles.card__name}>{movie.name}</h3>
                  <div className={styles.card__rating}>
                    Рейтинг:{" "}
                    {movie.rating?.kp ? movie.rating.kp.toFixed(1) : "Н/Д"}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
