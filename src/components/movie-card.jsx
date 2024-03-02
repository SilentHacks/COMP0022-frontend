import {Card, CardMedia, CardContent, Typography, Chip} from '@mui/material';
import Link from 'next/link';

export default function MovieCard ({ movie, settings }) {
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
                {settings.Release_Date && (
                    <Typography variant="body2" color="text.secondary">
                        Full Release Date: {new Date(movie.release_date).toLocaleDateString()}
                    </Typography>
                )}
                {settings.Star_Rating && <Typography variant="body2" color="text.secondary">Star Rating: {movie.rating}</Typography>}

                {/*{settings.Genres && <Typography variant="body2" color="text.secondary">Genres: {movie.genres.join(', ')}</Typography>}*/}
                {   settings.Genres &&
                    <div className="flex flex-wrap gap-2 my-2">
                    {movie.genres.map((genre) => (
                        <Chip label={genre} key={genre} color="primary" size="small"/>
                    ))}
                </div>
                }

                {settings.Tagline && <Typography variant="body2" color="text.secondary">Tagline: {movie.tagline}</Typography>}
                {settings.Stars && <Typography variant="body2" color="text.secondary">Stars: {movie.actors.slice(0, 3).join(', ')}</Typography>}
                {settings.Directors && <Typography variant="body2" color="text.secondary">Director(s): {movie.directors.join(', ')}</Typography>}
                {settings.Budget && <Typography variant="body2" color="text.secondary">Budget: ${movie.budget.toLocaleString()}</Typography>}
                {settings.Revenue && <Typography variant="body2" color="text.secondary">Revenue: ${movie.revenue.toLocaleString()}</Typography>}
            </CardContent>
        </Card>
    );
};
