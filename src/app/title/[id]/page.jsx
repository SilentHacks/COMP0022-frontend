import {Avatar, Card, CardContent, Chip, Grid, Rating, Typography} from '@mui/material';
import Slideshow from "@/components/slideshow";
import ViewersReactionAnalysis from "@/components/user-analysis";

export async function generateStaticParams() {
    return [
        {id: 'tt0111161'},
        {id: 'tt0068646'},
        {id: 'tt0071562'}
    ];
}

async function getData(id) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=images,ratings,genres,credits`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        // Extract director and stars from credits
        const director = data.credits.crew.find((member) => member.job === 'Director');
        const stars = data.credits.cast.slice(0, 3).map((actor) => actor.name).join(', ');
        return {...data, director: director ? director.name : '', stars};
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

    return (
        <div>
            <Card sx={{maxWidth: '100%', backgroundColor: '#2D2D2D'}}>
                {movie.images.backdrops.length > 0 && (<Slideshow movie={movie}/>)}
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
                        Director: {movie.director}
                    </Typography>
                    <Typography variant="body2" color="gray" sx={{mb: 2}}>
                        Stars: {movie.stars}
                    </Typography>
                    <div className="flex flex-wrap gap-2 my-2">
                        {movie.genres.map((genre) => (
                            <Chip label={genre.name} key={genre.id} color="primary"/>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <Rating name="read-only" value={movie.vote_average / 2} readOnly/>
                        <Typography variant="body2" color="white" sx={{ml: 1}}>
                            {movie.vote_average.toFixed(1)}
                        </Typography>
                    </div>

                    <Typography gutterBottom variant="h6" component="div" color="white" sx={{ mt: 2 }}>
                        Top Cast
                    </Typography>
                    <Grid container spacing={2}>
                        {movie.credits.cast.slice(0, 5).map((actor) => (
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
                                    as {actor.character}
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
