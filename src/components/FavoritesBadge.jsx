import React from 'react'
import { Badge, Chip, Box } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import useMoviesStore from './movieStore'

function FavoritesBadge() {
    const { bookmarkedCount } = useMoviesStore();

    return (
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
            <Badge
                badgeContent={bookmarkedCount}
                color="error"
                max={99}
            >
                <Chip
                    icon={<FavoriteIcon />}
                    label="Favorites"
                    color="primary"
                    variant="outlined"
                />
            </Badge>
        </Box>
    )
}

export default FavoritesBadge
