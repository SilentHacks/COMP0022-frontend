'use client';

import {useState} from 'react';
import {CardMedia, IconButton} from "@mui/material";
import {ArrowBackIosRounded, ArrowForwardIosRounded} from '@mui/icons-material';

export default function Slideshow({movie}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % movie.images.backdrops.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + movie.images.backdrops.length) % movie.images.backdrops.length);
    };
    return (
        <div className="relative">
            <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/original${movie.images.backdrops[currentImageIndex].file_path}`}
                alt={`Image ${currentImageIndex + 1}`}
                sx={{width: '100%'}}
            />
            <IconButton
                onClick={handlePrevImage}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.8)'
                    }
                }}>
                <ArrowBackIosRounded/>
            </IconButton>
            <IconButton
                onClick={handleNextImage}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    transform: 'translateY(-50%)',
                    color: 'white',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '&:hover': {
                        backgroundColor: 'rgba(0,0,0,0.8)'
                    }
                }}>
                <ArrowForwardIosRounded/>
            </IconButton>
        </div>
    );
}
