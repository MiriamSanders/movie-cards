import { create } from 'zustand';
import db from '../db/db.json';

const useMoviesStore = create((set, get) => ({
    movies: db.movies,
    filter: false,
    bookmarkedCount: db.movies.filter(movie => movie.bookmarked).length,
    setFilter: (value) => set({ filter: value }),
    getMovieById: (id) => {
        const movie = get().movies.find(m => m.id === id);
        if (!movie) return undefined;
        if (get().filter && !movie.bookmarked) return undefined;
        return movie;
    },
    toggleBookmark: (id) => {
        set(state => {
            const updatedMovies = state.movies.map(movie =>
                movie.id === id ? { ...movie, bookmarked: !movie.bookmarked } : movie
            );
            return {
                movies: updatedMovies,
                bookmarkedCount: updatedMovies.filter(movie => movie.bookmarked).length
            };
        });
    }
}));

export default useMoviesStore;
