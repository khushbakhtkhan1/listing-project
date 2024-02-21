import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@/components/FormInput";
import { FormButton } from "@/components/FormButton";
import Header from "@/components/Header";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .nonempty({ message: "Password is required" }),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          control={control}
          errors={errors}
          type="email"
          placeholder="Email Address"
        />
        <FormInput
          name="password"
          control={control}
          errors={errors}
          type="password"
          placeholder="Password"
        />
        <FormButton
          label="Submit"
          onClick={handleSubmit(onSubmit)}
          disabled={Object.keys(errors).length > 0}
          isSubmitting={isSubmitting}
        />
      </form>
    </>
  );
}
