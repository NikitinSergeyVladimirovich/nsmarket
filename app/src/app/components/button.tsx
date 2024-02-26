import React, { ReactNode } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from "@mui/material/Link";

type BlockProps = {
    title: string,
    link?: string,
    children: ReactNode,
}

const CustomButton = ({
    title,
    link,
    children,
}: BlockProps) => {
    return (
        <Link
            href={`${link}`}
        >
            <Button
                variant="text"
                size="small"
                color="secondary"  
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    { children }
                    { title }
                </Stack>
            </Button>
        </Link>
    );
};

export default CustomButton;