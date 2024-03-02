'use client';

import { useState } from 'react';
import { Box, FormControl, FormGroup, FormControlLabel, Checkbox, Typography, Slider, Button, Select, MenuItem, OutlinedInput, Chip } from '@mui/material';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

const FilterComponent = ({selectedFilters}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [releaseYearRange, setReleaseYearRange] = useState([1990, 2013]);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const genres = ['Action', 'Drama', 'Comedy', 'Sci-Fi']; // Example genres

    const handleFilterChange = (event) => {
        const term = event.target.name;
        const params = new URLSearchParams(searchParams);
        if (term) {
            const include = params.get('include')?.split(',') || [];
            if (event.target.checked) {
                include.push(term);
            } else {
                include.splice(include.indexOf(term), 1);
            }
            params.set('include', include.join(','));
        }

        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    };

    const handleGenreChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedGenres(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const applyFilters = () => {
        const queryParams = new URLSearchParams({
            ...selectedFilters,
            releaseYearStart: releaseYearRange[0],
            releaseYearEnd: releaseYearRange[1],
            genres: selectedGenres.join(','),
        });
        router.push(`/movies?${queryParams}`);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '90%', maxWidth: 720, bgcolor: 'background.paper', p: 2 }}>
            {/* Show Section */}
            <Box>
                <Typography variant="h6">Show:</Typography>
                <FormControl fullWidth>
                    <FormGroup>
                        {Object.keys(selectedFilters).map((filterName) => (
                            <FormControlLabel
                                control={<Checkbox checked={selectedFilters[filterName]} onChange={handleFilterChange} name={filterName} />}
                                label={filterName.replace(/_/g, ' ')}
                                key={filterName}
                            />
                        ))}
                    </FormGroup>
                </FormControl>
            </Box>

            {/* Filter Section */}
            <Box>
                <Typography variant="h6">Filter:</Typography>
                <FormControl fullWidth>
                    {/* Release Year */}
                    <Typography gutterBottom>Release Year</Typography>
                    <Slider
                        value={releaseYearRange}
                        onChange={(_, newValue) => setReleaseYearRange(newValue)}
                        valueLabelDisplay="auto"
                        min={1990}
                        max={2013}
                    />

                    {/* Genres */}
                    <Typography gutterBottom>Genres</Typography>
                    <Select
                        multiple
                        value={selectedGenres}
                        onChange={handleGenreChange}
                        input={<OutlinedInput id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={genre} value={genre}>
                                {genre}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button onClick={applyFilters} variant="contained" sx={{ mt: 3 }}>Apply Filters</Button>
            </Box>
        </Box>
    );
};

export default FilterComponent;
