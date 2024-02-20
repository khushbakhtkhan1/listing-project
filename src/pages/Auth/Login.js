import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputt } from '@/components/Inputt';
import { Buttonn } from '@/components/Buttonn';
import Header from '@/components/header';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }).nonempty({ message: "Password is required" }),
});

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Inputt name="email" control={control} errors={errors} />
                <Inputt name="password" control={control} errors={errors} />
                <Buttonn label="Submit" />
            </form>
        </>
    );
}
