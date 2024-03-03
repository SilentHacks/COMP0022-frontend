'use client';

import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';

// Customizing the Rating component
const CustomRating = styled(Rating)({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: 'white', // Changing the color of the empty (outline) star
    }
});

export default function MovieRating({ value, size }) {
    return (
        <CustomRating
            name="read-only"
            value={value ?? 0}
            readOnly
            precision={0.5}
            size={size}
        />
    );
}
