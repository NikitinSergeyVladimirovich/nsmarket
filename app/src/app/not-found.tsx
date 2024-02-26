import Typography from '@mui/material/Typography';
import Image from 'next/image';
import NotFoundIcon from '../../public/404.svg';
import Grid from '@mui/material/Grid';

const NotFound = () => {
    return (
        <>
            <Grid
                container
                direction={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item>
                    <Typography variant='h1'>404</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h4'>Извините страница не найдена</Typography>
                </Grid>
                <Grid item sx={{
                    mr: 10
                }}>
                    <Image src={NotFoundIcon} />
                </Grid>
            </Grid>
        </>
    );
}

export default NotFound;