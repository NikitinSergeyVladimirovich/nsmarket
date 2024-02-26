import Grid from '@mui/material/Grid';
import React, { ReactNode } from "react";
import Box from "@mui/material/Box";

type BlockProps = {
    children: ReactNode,
}

const Block = ({
    children,
}: BlockProps) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            py={1}
        >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    backgroundColor: 'rgb(255, 255, 255, 0.7)',
                }}
                xs={10}
                md={10}
                lg={8}
                xl={8}
                py={2}
                px={2}
            >
                { children }
            </Grid>
        </Box>
    );
};

export default Block;