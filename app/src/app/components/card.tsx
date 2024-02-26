import React from "react";
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";

type BlockProps = {
    title: string,
    link?: string,
    price?: string,
    oldPrice?: string,
    discription?: string,
}

const Card = ({
    title,
    link,
    price,
    oldPrice,
    discription,
}: BlockProps) => {
    return (
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
            >
                <Grid
                    sx={{
                        background: '#EEE',
                        w: 10,
                        h: 5,
                    }}
                    width={10}
                    height={10}
                >
                    asd
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        { title }
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" color={'#006933'} sx={{ fontWeight: '600'}}>
                        { price }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Card;