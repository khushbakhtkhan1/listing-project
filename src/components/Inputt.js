import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

export function Inputt({ name, control, errors }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    placeholder={name === "email" ? "Email" : "Password"}
                    type={name === "email" ? "email" : "password"}
                    error={errors[name] ? true : false}
                    helperText={errors[name] && <span style={{ color: 'red' }}>{errors[name].message}</span>}
                />
            )}
        />
    );
}
