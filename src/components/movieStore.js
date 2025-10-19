import { create } from 'zustand';
import db from '../db/db.json';

const useMoviesStore = create((set, get) => ({
    // all movies from db.json
    movies: db.movies,       // all movies
    filter: false,           // bookmark filter
    bookmarkedCount: db.movies.filter(movie => movie.bookmarked).length,
    // Set filter state
    setFilter: (value) => set({ filter: value }),
    // Get a movie by ID, respecting the filter
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
