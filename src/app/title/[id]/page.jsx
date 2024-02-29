import {Avatar, Card, CardContent, Chip, Grid, Typography} from '@mui/material';
import Slideshow from "@/components/slideshow";
import ViewersReactionAnalysis from "@/components/user-analysis";
import MovieRating from "@/components/rating";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies`);
    const movies = await res.json();
    return movies.map((movie) => ({id: movie.id.toString()}));
}

async function getData(id) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/movies/${id}`
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.error(error);
        return {notFound: true};
    }
}

const mockAnalysisData = {
    ratingAnalysis: "Users who generally give low ratings to movies have rated this movie higher than their average.",
    genreAnalysis: "Fans of Sci-Fi and Action genres have shown a particular interest in this movie."
};

export default async function MoviePage({params}) {
    const movie = await getData(params.id);
    movie.vote_average = 3.5;
    movie.vote_count = 100;
    const hasReviews = true;

    return (
        <div>
            <Card sx={{maxWidth: '100%', backgroundColor: '#2D2D2D'}}>
                {movie.backdrop_path && (<Slideshow movie={movie}/>)}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="white">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        Release Date: {movie.release_date}
                    </Typography>
                    <Typography variant="body2" color="white" sx={{my: 2}}>
                        {movie.overview}
                    </Typography>
                    <Typography variant="body2" color="gray">
                        Director: {movie.directors.map((director) => director.name).join(', ')}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{mb: 2}}>
                        Stars: {movie.actors.slice(0, 3).map((actor) => actor.name).join(', ')}
                    </Typography>
                    <div className="flex flex-wrap gap-2 my-2">
                        {movie.genres.map((genre) => (
                            <Chip label={genre} key={genre} color="primary"/>
                        ))}
                    </div>
                    <div className="flex items-center mt-5">
                        <MovieRating value={movie.vote_average} />
                        <Typography variant="body2" color="white" sx={{ml: 1}}>
                            {movie.vote_average.toFixed(1)} {hasReviews ? `(${movie.vote_count} votes)` : '(predicted)'}
                        </Typography>
                    </div>

                    <Typography gutterBottom variant="h6" component="div" color="white" sx={{ mt: 2 }}>
                        Top Cast
                    </Typography>
                    <Grid container spacing={2}>
                        {movie.actors.slice(0, 5).map((actor) => (
                            <Grid item xs={4} sm={2} key={actor.id}>
                                <Avatar
                                    alt={actor.name}
                                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                    sx={{ width: 56, height: 56, mb: 1 }}
                                />
                                <Typography variant="body2" color="white">
                                    {actor.name}
                                </Typography>
                                <Typography variant="caption" color="gray">
                                    as {actor.character_name}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
            <ViewersReactionAnalysis data={mockAnalysisData} />
        </div>
    );
}
