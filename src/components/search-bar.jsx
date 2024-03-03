'use client';

import {Box, TextField} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useDebouncedCallback} from 'use-debounce';

export default function SearchBar() {
    const searchParams = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((term) => {
        console.log(`Searching... ${term}`);

        const params = new URLSearchParams(searchParams);

        params.set('page', '1');

        if (term) params.set('query', term);
        else params.delete('query');

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <Box sx={{width: '100%', marginBottom: '20px'}}>
            <TextField
                fullWidth
                label="Search for movies..."
                variant="outlined"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
                InputLabelProps={{
                    style: {color: '#aaa'}, // Lighter text for label
                }}
                inputProps={{style: {color: 'white'}}}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <MagnifyingGlassIcon
                                className="left-3 top-1/2 h-[18px] w-[18px] text-gray-500 peer-focus:text-gray-900"/>
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
        </Box>
    )
}
