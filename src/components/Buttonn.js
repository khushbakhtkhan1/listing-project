import { Button } from '@mui/material';

export function Buttonn({ label }) {
    return (
        <Button type="submit" variant="contained" color="primary">
            {label}
        </Button>
    );
}
