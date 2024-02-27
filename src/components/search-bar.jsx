'use client';

import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import {useState} from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // Example data - replace this with your actual data source
    const movies = [
        "Action Movie",
        "Drama Movie",
        "Comedy Movie",
        "Fantasy Movie",
    ];

    const handleSearch = async (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (!value.trim()) {
            setSearchResults([]);
            return;
        }
        // Here, you would fetch and filter data from your API or dataset
        // For demonstration, using the static movies array
        const filteredResults = movies.filter(movie =>
            movie.toLowerCase().includes(value.toLowerCase())
        ).map(movie => ({title: movie, image: '/path/to/image', description: 'Movie description'})); // Adapt this map based on your data
        setSearchResults(filteredResults);
    };

    return (
        <Box sx={{width: '100%', marginBottom: '20px'}}>
            <TextField
                fullWidth
                label="Search for movies..."
                variant="outlined"
                onChange={handleSearch}
                value={searchTerm}
                InputLabelProps={{
                    style: {color: '#aaa'}, // Lighter text for label
                }}
                inputProps={{style: {color: 'white'}}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" sx={{ color: 'white' }}/>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#666', // Lighter border
                        },
                        '&:hover fieldset': {
                            borderColor: 'white', // Highlight on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#bbb', // More visible border on focus
                        },
                    },
                }}
            />
            {searchResults.length > 0 && (
                <Box sx={{
                    position: 'relative',
                    background: '#1e1e1e',
                    padding: '10px',
                    borderRadius: '4px',
                    marginTop: '10px'
                }}>
                    <List>
                        {searchResults.map((movie, index) => (
                            <ListItem
                                button
                                component="a"
                                href={movie.link}
                                key={index}
                                sx={{
                                    borderBottom: '1px solid #333',
                                    '&:hover': {
                                        backgroundColor: '#333' // Darker background on hover for better visibility
                                    }
                                }}>
                                <ListItemAvatar>
                                    <Avatar variant="square" src={movie.image} alt={movie.title}/>
                                </ListItemAvatar>
                                <ListItemText primary={movie.title} secondary={movie.description}
                                              sx={{
                                                  '.MuiListItemText-secondary': {
                                                      color: '#ccc' // Light grey for better visibility against the dark background
                                                  }
                                              }}/>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            )}
        </Box>
    )
}
