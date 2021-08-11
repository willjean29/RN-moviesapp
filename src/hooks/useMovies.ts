import React, {useEffect, useState} from 'react';
import movieDB from 'api/movieDB';
import {Movie, MovieInterface} from 'interfaces/movieDb.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}
const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  const getAllMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieInterface>('/now_playing');
    const popularPromise = movieDB.get<MovieInterface>('/popular');
    const topRatedPromise = movieDB.get<MovieInterface>('/top_rated');
    const upcomingPromise = movieDB.get<MovieInterface>('/upcoming');
    const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setMoviesState({
      nowPlaying: nowPlaying.data.results,
      popular: popular.data.results,
      topRated: topRated.data.results,
      upcoming: upcoming.data.results,
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  useEffect(() => {
    getAllMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
