import { Typography } from "@mui/material";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from "react";
import zagluska from "./zagluska.svg";
import Image from "next/image";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

type BlockProps = {
    uuid: string,
    title: string,
    link?: string,
    price?: string,
    oldPrice?: string,
    discription?: string,
}

const Card = ({
    uuid,
    title,
    link,
    price,
    oldPrice,
    discription,
}: BlockProps) => {
    return (
        <a href={`product/${uuid}`}>
        <Box>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                gap={1}
            >
                <Grid
                    sx={{
                        background: '#EEE',
                        borderRadius: 2,
                        position: "relative",
                        paddingBottom: "100%",
                        overflow: "hidden",
                        width: 1,
                        height: 1,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            height: 1,
                            width: 1,
                        }}
                    >
                        <Box
                            sx={{
                                width: 1,
                                height: 1,
                                position: "absolute"
                            }}
                        >
                            {(link ?
                                <img
                                    src={link}
                                    alt=""
                                    style={ {
                                        objectFit: "contain",
                                        mixBlendMode: "multiply",
                                        outline: 'none',
                                        border: 'none',
                                        height: "100%",
                                        width: "100%",
                                    } }
                                />
                                :
                                <Image
                                    src={zagluska}
                                    alt=""
                                    style={ {
                                        objectFit: "contain",
                                        mixBlendMode: "multiply",
                                        outline: 'none',
                                        border: 'none',
                                        height: "100%",
                                        width: "100%",
                                    } }
                                />
                            )}
                        </Box>
                        <IconButton size="small" sx={{ right: 0, position: "absolute" }}> 
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1">
                        { title }
                    </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex',  justifyContent: 'center', alignItems: 'center' }} >
                    <Typography variant="h5" color={'#006933'} sx={{ fontWeight: '600'}}>
                        { price }₽
                    </Typography>
                    {(oldPrice && 
                        <Typography color={'#8a8784'} variant="body2" sx={{ textDecoration: "line-through" }}>
                            { oldPrice }₽
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Box>
        </a>
    );
};

export default Card;