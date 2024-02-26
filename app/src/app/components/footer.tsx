import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Block from './block';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from "@mui/material/Link";
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <Block>
            <Grid container xs={12} justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={4}>
                    © Nikitin Sergey, { new Date().getFullYear() }
                </Grid>
                <Grid container item xs={4} justifyContent={'center'}>
                    📚 Made for educational purposes only
                </Grid>
                <Grid container item xs={4} justifyContent={'end'}>
                    <Grid
                        item
                        xs={1}
                    >
                        <Link
                            href="mailto:serega06503043@gmail.com"
                        >
                            <IconButton size={'large'}>
                                <AlternateEmailIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                    >
                        <Link
                            href="https://github.com/NikitinSergeyVladimirovich"
                        >
                            <IconButton size={'large'}>
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={1}
                    >
                        <Link
                            href="https://t.me/seregaNiki"
                        >
                            <IconButton size={'large'}>
                                <TelegramIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Block>
    );
};

export default Footer;