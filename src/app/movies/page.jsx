import {Box, Typography, Grid} from '@mui/material';
import MovieCard from '@/components/movie-card';
import Pagination from '@/components/pagination';

export default async function MoviePage({searchParams}) {
    const currentPage = Number(searchParams?.page) || 1;
    // const totalPages = await fetchInvoicesPages(query);
    const totalPages = 10;
    const perPage = 12;

    const movies = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies?` + new URLSearchParams({
        limit: perPage,
        offset: (currentPage - 1) * perPage,
    })).then(res => res.json());

    const settings = {
        showFullReleaseDate: true,
        showStarRating: false,
        showGenres: true,
        showTagline: false,
        showStars: true,
        showDirectors: false,
        showBudget: false,
        showRevenue: true,
    };

    return (
        <Box sx={{
            bgcolor: '#121212',
            color: '#fff',
            p: 3,
            overflowY: 'auto',
            maxWidth: '100%',
            mx: 'auto',
        }}>
            <Grid container spacing={2}>
                {movies.map((movie, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <MovieCard movie={movie} {...settings} />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 3}}>
                <Pagination totalPages={totalPages}/>
            </Box>
        </Box>
    );
}
