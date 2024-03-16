"use client";

import React from "react";
import Card from "@/app/components/card"
import { Grid } from "@mui/material";
import { useGetProducts } from '@/app/hooks/swr';

const Products =  () => {
    const { data: products } = useGetProducts();

    return (
        <Grid
            container
            justifyContent='center'
            alignItems='center'
            gap={2}
        >
            { products && products.products.map(i => 
                (<Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
                    <Card
                        uuid={i.uuid}
                        title={i.name}
                        price={i.price}
                        oldPrice={i.discounted_price}
                        link={i.image}
                        discription={i.discription}
                    />
                </Grid >))
            }
            <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    title="Телефон"
                    price="100000"
                />
            </Grid >
            <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    title="Планшет"
                    price="100000"
                />
            </Grid >
            <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    title="TV"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    link="https://avatars.mds.yandex.net/get-mpic/4957996/img_id7977010936884316373.jpeg/190x250"
                    title="Наушники"
                    price="100000"
                    oldPrice="239"
                />
            </Grid>
            <Grid item  xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    link={"https://avatars.mds.yandex.net/get-mpic/4415357/img_id7805516102045143066.jpeg/190x250"}
                    title="Наушники"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
            <Grid item  xs={12} sm={5} md={4} lg={3} xl={2}>
                <Card 
                    title="Наушники"
                    price="100000"
                />
            </Grid>
        </Grid>
    );
};

export default Products;