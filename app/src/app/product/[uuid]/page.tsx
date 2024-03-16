'use client';

import { useEffect } from 'react';
import { NextPage } from "next";
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useRouter } from "next/router";

const Product: NextPage = ({params}: {params: {uuid: string }}) => {
    // const { data } = useGetProducts(params.uuid);
    const handleFavorite = () => {
        console.log('fav');
    };

    const handleBasket = () => {
        console.log('Basket');
    };

    return (
        <Grid container>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                sx={{
                    pb: 2,
                }}
            >
                <Grid item>
                    <Typography variant="h5">
                        Наушники Apple 2 asadasd as
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        onClick={() => handleFavorite}
                        variant="outlined"
                        startIcon={<FavoriteBorderIcon />}
                    >
                        Избранные
                    </Button>
                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
            >
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item>
                            <img
                                src="https://fikiwiki.com/uploads/posts/2022-02/1644865303_51-fikiwiki-com-p-skachat-kartinki-khoroshego-kachestva-59.jpg"
                                alt=''
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        direction="column"
                        sx={{
                            background: "#EEE",
                            borderRadius: 2,
                            padding: 2
                        }}
                    >
                        <Grid item sx={{ pb: 2 }}>
                            <Typography variant="h4">
                                3200 ₽
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                size="large"
                                variant="outlined"
                                onClick={() => handleBasket}
                            >
                                В корзину
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;