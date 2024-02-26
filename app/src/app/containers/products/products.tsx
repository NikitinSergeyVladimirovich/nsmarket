import React from "react";
import Card from "@/app/components/card"
import { Grid } from "@mui/material";

const Products = () => {
    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            xs={12}
        >
            <Grid item xs={2}>
                <Card 
                    title="Телефон"
                    price="100000"
                />
            </Grid >
            <Grid item xs={2}>
                <Card 
                    title="Планшет"
                    price="100000"
                />
            </Grid >
            <Grid item xs={2}>
                <Card 
                    title="TV"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
        </Grid>
    );
};

export default Products;