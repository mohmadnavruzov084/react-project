import { useState, useEffect } from "react";
function GetDataMovies({ children }) {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    try {
      setloading(true);
      seterror(null);

      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }?page=1&limit=12&selectFields=name&selectFields=description&selectFields=poster&selectFields=rating&selectFields=year`,
        {
          headers: { "X-API-KEY": import.meta.env.VITE_API_KEY },
        }
      );
      const data = await response.json();

      if (data?.docs?.length === 0) {
        seterror("Фильмы не найдены");
      } else {
        setmovies(data.docs || []);
      }
    } catch (error) {
      console.log(error);
      seterror("Что-то пошло не так... Попробуйте позже😥");
    } finally {
      setloading(false);
    }
  }

  return children({ movies, loading, error });
}

export default GetDataMovies;
