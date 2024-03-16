import Grid from '@mui/material/Grid';
import Block from './block';
import InputBase from '@mui/material/InputBase';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Link from "@mui/material/Link";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import CustomButton from './button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';
import Logo  from './logo.svg';
import Image from 'next/image';

const Header = () => {
    return (
        <Block>
            <Grid
                container
                xs={12}
                direction="row"
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2}
            >
                <Grid item xs={1}>
                    <Image src={Logo} />
                </Grid>
                <Grid item xs={1}>
                    <Button
                        color="primary"
                        size="large"
                    >
                        Каталог
                        <MenuIcon/>
                    </Button>
                </Grid>

                <Grid item xs={7}>
                    <InputBase
                        sx={{ ml: 1, flex: 1, border: '1px solid', borderRadius: 4, px: 2 }}
                        fullWidth
                        placeholder="Поиск"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                        spacing={6}
                    >
                        <Grid item>
                            <CustomButton title='Заказы'>
                                <ShoppingBagIcon/>
                            </CustomButton>
                        </Grid>
                        <Grid item>
                            <CustomButton title='избранное'>
                                <FavoriteBorderIcon/>
                            </CustomButton>
                        </Grid>
                        <Grid item>
                            <CustomButton title='корзина'>
                                <ShoppingCartIcon />
                            </CustomButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Block>
    );
};

export default Header;