import React from 'react'
import { Card, CardContent, CardActions, Typography, IconButton, Box } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import useMoviesStore from './movieStore'

function MovieCard({ id }) {

    const { getMovieById } = useMoviesStore();
    let movie = getMovieById(id);

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            {movie ? (
                <>
                    <CardContent>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {movie.title}-{movie.year}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                        <IconButton
                            onClick={() => useMoviesStore.getState().toggleBookmark(id)}
                            color={movie.bookmarked ? 'primary' : 'default'}
                            aria-label={movie.bookmarked ? 'unbookmark' : 'bookmark'}
                        >
                            {movie.bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                        </IconButton>
                    </CardActions>
                </>
            ) : null}
        </Card>
    )
}

export default MovieCard