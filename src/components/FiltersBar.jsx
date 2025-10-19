import React from 'react'
import { Box, ToggleButton, ToggleButtonGroup, Paper } from '@mui/material'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import MovieIcon from '@mui/icons-material/Movie'
import useMoviesStore from './movieStore'

function FiltersBar() {
    const { filter, setFilter } = useMoviesStore();

    const handleFilterChange = () => {
       
            setFilter(!filter);
    };

    return (
        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <ToggleButtonGroup
                    value={filter}
                    exclusive
                    onChange={handleFilterChange}
                    aria-label="movie filter"
                    color="primary"
                >
                    <ToggleButton value="all" aria-label="show all movies">
                        <MovieIcon sx={{ mr: 1 }} />
                        All Movies
                    </ToggleButton>
                    <ToggleButton value="bookmarked" aria-label="show bookmarked movies">
                        <BookmarkIcon sx={{ mr: 1 }} />
                        Bookmarked
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
        </Paper>
    )
}

export default FiltersBar