import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

export function FormInput({ name, control, errors, type, placeholder }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          placeholder={placeholder}
          type={type}
          error={errors[name] ? true : false}
          helperText={
            errors[name] && (
              <span style={{ color: "red" }}>{errors[name].message}</span>
            )
          }
        />
      )}
    />
  );
}
