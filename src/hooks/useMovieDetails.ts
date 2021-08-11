import React, {useEffect, useState} from 'react';
import movieDB from 'api/movieDB';
import {
  Cast,
  MovieCreditsInterface,
  MovieFullInterface,
} from 'interfaces/deatilsMovie.interface';

interface MovieDetailsState {
  isLoading: boolean;
  detailsMovie?: MovieFullInterface;
  cast: Cast[];
}
const useMovieDetails = (id: number) => {
  const [movieDetailsState, setmovieDetailsState] = useState<MovieDetailsState>(
    {
      isLoading: true,
      detailsMovie: undefined,
      cast: [],
    },
  );
  const getDetailsMovie = async () => {
    const detailsMoviePromise = movieDB.get<MovieFullInterface>(`/${id}`);
    const castPromise = movieDB.get<MovieCreditsInterface>(`/${id}/credits`);
    const [detailsMovie, cast] = await Promise.all([
      detailsMoviePromise,
      castPromise,
    ]);
    setmovieDetailsState({
      isLoading: false,
      detailsMovie: detailsMovie.data,
      cast: cast.data.cast,
    });
  };

  useEffect(() => {
    getDetailsMovie();
  }, []);
  return {
    ...movieDetailsState,
  };
};

export default useMovieDetails;
