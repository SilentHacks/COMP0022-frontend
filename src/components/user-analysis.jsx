import { Typography, Box } from '@mui/material';
import { StarRate as StarRateIcon, MovieFilter as MovieFilterIcon } from '@mui/icons-material';

export default function ViewersReactionAnalysis ({ data }) {
    return (
        <Box
            sx={{
                mt: 4,
                p: 2,
                backgroundColor: '#2D2D2D',
                borderRadius: '8px',
                boxShadow: 3
            }}
        >
            <Typography variant="h6" color="white" gutterBottom>
                Viewer Insights
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <StarRateIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="body1" color="white">
                    {data.ratingAnalysis}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MovieFilterIcon sx={{ color: 'secondary.main', mr: 1 }} />
                <Typography variant="body1" color="white">
                    {data.genreAnalysis}
                </Typography>
            </Box>
        </Box>
    );
};
