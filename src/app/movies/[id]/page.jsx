import {Avatar, Card, CardContent, Chip, Grid, Typography} from '@mui/material';
import Slideshow from "@/components/slideshow";
import ViewersReactionAnalysis from "@/components/user-analysis";
import MovieRating from "@/components/rating";

export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/ids`);
    const data = await res.json();
    return data.map((id) => ({id: id.toString()}));
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

export default async function MoviePage({params}) {
    const movie = await getData(params.id);

    const userAvgRating = +movie.avg_user_rating.toFixed(1);
    const movieAvgRating = +movie.average_rating.toFixed(1);

    let ratingAnalysis = ""
    if (movieAvgRating > userAvgRating)
        ratingAnalysis = `Users generally give <strong>low ratings</strong> to movies of this genre (${userAvgRating}), but have rated this movie <strong>higher than their average</strong> (${movieAvgRating}).`
    else if (movieAvgRating < userAvgRating)
        ratingAnalysis = `Users generally give <strong>high ratings</strong> to movies of this genre (${userAvgRating}), but have rated this movie <strong>lower than their average</strong> (${movieAvgRating}).`
    else
        ratingAnalysis = "Users have rated this movie <strong>similar to their average</strong> for movies of this genre."

    const genreAnalysis = `People who liked this movie also like watching ${movie.correlated_genres.map((genre) => '<strong>' + genre + '</strong>').join(' and ')} movies.`

    const data = {ratingAnalysis: ratingAnalysis, genreAnalysis: genreAnalysis};

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
                        <MovieRating value={movie.average_rating} />
                        <Typography variant="body2" color="white" sx={{ml: 1}}>
                            {(movie.average_rating ?? 0).toFixed(1)} {`(${movie.num_reviews} votes)`}
                        </Typography>
                    </div>
                    <div className="flex items-center mt-5">
                        <MovieRating value={movie.predicted_rating} />
                        <Typography variant="body2" color="white" sx={{ml: 1}}>
                            {(movie.predicted_rating ?? 0).toFixed(1)} (predicted)
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
            <ViewersReactionAnalysis data={data} />
        </div>
    );
}
