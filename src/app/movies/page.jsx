import {Box, Card, CardMedia, CardContent, Typography} from '@mui/material';
import Link from 'next/link';

export default async function MoviePage() {
    const movies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?` + new URLSearchParams({
        limit: 100,
        offset: 0,
    })).then((res) => res.json());

    const categories = {
        'Action': movies.slice(0, 10),
        'Drama': movies.slice(10, 20)
    };

    return (
        <Box sx={{
            bgcolor: '#121212',
            color: '#fff',
            p: 3,
            overflowY: 'auto',
            maxWidth: '80vw',
        }}>
            {Object.entries(categories).map(([category, moviesInCategory]) => (
                <Box key={category} sx={{mb: 5}}>
                    <Typography variant="h5" gutterBottom sx={{mb: 2, color: '#e0e0e0'}}>
                        {category}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: 2,
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                    }}>
                        {moviesInCategory.map((movie) => (
                            <Card
                                key={movie.id}
                                sx={{
                                    width: 140,
                                    flexShrink: 0,
                                    bgcolor: '#1e1e1e',
                                    overflow: 'hidden',
                                    borderRadius: '4px',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform .3s',
                                        boxShadow: '0 4px 20px 0 rgba(255, 255, 255, 0.25)',
                                    }
                                }}
                            >
                                <Link href={`/movies/${movie.id}/`}>
                                    <CardMedia
                                        component="img"
                                        height="210"
                                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                        sx={{
                                            transition: 'transform .3s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                            },
                                        }}
                                    />
                                </Link>
                                <CardContent sx={{padding: '8px'}}>
                                    <Typography gutterBottom variant="body2" component="div"
                                                sx={{color: '#fff', fontWeight: 'bold'}}>
                                        {movie.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: '#bdbdbd', fontSize: '10px'}}>
                                        Release: {new Date(movie.release_date).toLocaleDateString()}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: '#bdbdbd', fontSize: '10px'}}>
                                        Revenue: ${movie.revenue ? movie.revenue.toLocaleString() : 'N/A'}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            ))}
        </Box>
    );
}
