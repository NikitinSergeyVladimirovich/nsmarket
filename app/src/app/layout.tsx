import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Block from "@/app/components/block";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stack
          spacing={4}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container xs={12}>

              <Grid xs={12}>
                <Header />
              </Grid>
              <Grid xs={12}>
                <Block>
                  {children}
                </Block>
              </Grid>
              <Grid xs={12}>
                <Footer />
              </Grid>
            </Grid>

          </Box>

        </Stack>
      </body>
    </html>
  )
}