'use client';

import {useState} from 'react';
import {
    Box,
    FormControl,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Typography,
    Slider,
    Button,
    Select,
    MenuItem,
    OutlinedInput,
    Chip
} from '@mui/material';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

const FilterComponent = ({selectedFilters, minYear, maxYear, genres}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [releaseYearRange, setReleaseYearRange] = useState([minYear, maxYear]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [sort, setSort] = useState('release_date');
    const [sortOrder, setSortOrder] = useState('desc');

    const sortOptions = [
        {value: 'title', label: 'Title'},
        {value: 'release_date', label: 'Release Date'},
        {value: 'rating', label: 'Rating'}
    ];

    const sortOrderOptions = [
        {value: 'asc', label: 'Ascending'},
        {value: 'desc', label: 'Descending'},
    ];

    const handleFilterChange = (event) => {
        const term = event.target.name.toLowerCase();
        const params = new URLSearchParams(searchParams);
        if (term) {
            const include = params.get('include')?.split(',') || [];
            if (event.target.checked) {
                include.push(term);
            } else {
                const index = include.indexOf(term);
                if (index > -1) {
                    include.splice(index, 1);
                }
            }
            params.set('include', include.join(','));
        }

        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    };

    const handleGenreChange = (event) => {
        const {
            target: {value},
        } = event;
        setSelectedGenres(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const applyFilters = () => {
        const params = new URLSearchParams(searchParams);
        if (releaseYearRange[0] !== minYear || releaseYearRange[1] !== maxYear)
            params.set('release_year', releaseYearRange.join(','));
        else params.delete('release_year');

        if (selectedGenres.length > 0) params.set('genres', selectedGenres.join(','));
        else params.delete('genres');

        params.delete('page');

        params.set('sort', sort);
        params.set('sort_order', sortOrder);

        router.replace(`${pathname}?${params.toString()}`,{scroll: false});
    };

    const clearGenres = () => {
        setSelectedGenres([]);
        const params = new URLSearchParams(searchParams);
        params.delete('genres');
        params.delete('page');
        router.replace(`${pathname}?${params.toString()}`, {scroll: false});
    };

    const handleSortChange = (event) => {
        setSort(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '90%',
            maxWidth: 720,
            bgcolor: 'background.paper',
            p: 2
        }}>
            {/* Show Section */}
            <Box>
                <Typography variant="h6">Show:</Typography>
                <FormControl fullWidth>
                    <FormGroup>
                        {Object.keys(selectedFilters).map((filterName) => (
                            <FormControlLabel
                                control={<Checkbox checked={selectedFilters[filterName]} onChange={handleFilterChange}
                                                   name={filterName}/>}
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
                        min={minYear}
                        max={maxYear}
                    />

                    {/* Genres */}
                    <Typography gutterBottom>Genres</Typography>
                    <Select
                        multiple
                        value={selectedGenres}
                        onChange={handleGenreChange}
                        input={<OutlinedInput id="select-multiple-chip"/>}
                        renderValue={(selected) => (
                            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value}/>
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
                    <Button onClick={clearGenres} variant="outlined" sx={{mt: 1}}>Clear Genres</Button>
                </FormControl>
            </Box>

            <Box>
                <Typography variant="h6">Sort by:</Typography>
                <FormControl fullWidth sx={{mb: 2}}>
                    <Select value={sort} onChange={handleSortChange}>
                        {sortOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Typography variant="h6">Sort order:</Typography>
                <FormControl fullWidth>
                    <Select value={sortOrder} onChange={handleSortOrderChange}>
                        {sortOrderOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Button onClick={applyFilters} variant="contained" sx={{mt: 3}}>Apply Filters</Button>
        </Box>
    );
};

export default FilterComponent;
