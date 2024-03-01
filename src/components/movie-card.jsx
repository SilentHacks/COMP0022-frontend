import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';
import Link from 'next/link';

export default function MovieCard ({ movie, showFullReleaseDate, showStarRating, showGenres, showTagline, showStars, showDirectors, showBudget, showRevenue }) {
    return (
        <Card sx={{
            maxWidth: 345,
            bgcolor: '#1e1e1e',
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform .3s',
                boxShadow: '0 4px 20px 0 rgba(255, 255, 255, 0.25)',
            }
        }}>
            <Link href={`/movies/${movie.id}/`} passHref>
                <CardMedia
                    component="img"
                    height="140"
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {new Date(movie.release_date).getFullYear()} | {movie.runtime} min
                </Typography>
                {showFullReleaseDate && (
                    <Typography variant="body2" color="text.secondary">
                        Full Release Date: {new Date(movie.release_date).toLocaleDateString()}
                    </Typography>
                )}
                {showStarRating && <Typography variant="body2" color="text.secondary">Star Rating: {movie.rating}</Typography>}
                {showGenres && <Typography variant="body2" color="text.secondary">Genres: {movie.genres.join(', ')}</Typography>}
                {showTagline && <Typography variant="body2" color="text.secondary">Tagline: {movie.tagline}</Typography>}
                {showStars && <Typography variant="body2" color="text.secondary">Stars: {movie.actors.slice(0, 3).join(', ')}</Typography>}
                {showDirectors && <Typography variant="body2" color="text.secondary">Director(s): {movie.directors.join(', ')}</Typography>}
                {showBudget && <Typography variant="body2" color="text.secondary">Budget: ${movie.budget.toLocaleString()}</Typography>}
                {showRevenue && <Typography variant="body2" color="text.secondary">Revenue: ${movie.revenue.toLocaleString()}</Typography>}
            </CardContent>
        </Card>
    );
};
