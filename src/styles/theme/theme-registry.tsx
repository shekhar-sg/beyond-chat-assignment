"use client"
import {AppRouterCacheProvider} from "@mui/material-nextjs/v13-appRouter";
import {Box, ThemeProvider, Toolbar} from "@mui/material";
import materialTheme from "@/styles/theme/index";
import type {ReactNode} from "react";
import {NextAppProvider} from "@toolpad/core/nextjs";
import {ShoppingCart} from "@mui/icons-material";

interface ThemeRegistryProps {
    children: ReactNode;
}

export const NAVIGATION = [
    // ...
    {
        segment: 'orders',
        title: 'Orders',
        icon: <ShoppingCart/>,
    },
    // ...
];


const ThemeRegistry = (props: ThemeRegistryProps) => {
    const {children} = props
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={materialTheme}>
                <Box component={"main"} display={'flex'}>
                    <NextAppProvider navigation={NAVIGATION}>
                        {children}
                    </NextAppProvider>
                    <Box width={200} bgcolor={'red'}>
                        <Toolbar sx={{
                            bgcolor: 'white',
                        }}>

                        </Toolbar>

                    </Box>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};

export default ThemeRegistry;