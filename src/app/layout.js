import {AppRouterCacheProvider} from '@mui/material-nextjs/v14-appRouter';
import {Inter} from "next/font/google";
import "../styles/globals.css";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../styles/theme';

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Movie Website",
    description: "Movie dashboard for COMP0022",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
