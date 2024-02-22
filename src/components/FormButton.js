import { Button } from "@mui/material";

export function FormButton({ label, onClick, disabled, isSubmitting }) {
  const buttonLabel = isSubmitting ? "Loading..." : label;
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={onClick}
      disabled={disabled || isSubmitting}
    >
      {buttonLabel}
    </Button>
  );
}
