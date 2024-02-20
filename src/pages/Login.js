import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from "./header"; 
import '../styles/style.css'; 

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
    password: z.string().min(8, { message: "Password must be at least 6 characters long" }).nonempty({ message: "Password is required" }),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
});

const onSubmit = (data) => {
    console.log(data);
};
const handleEdit = () => {
    reset({
    email: '',
    password: '',
    });
};

return (
    <>
    <Header />
<form onSubmit={handleSubmit(onSubmit)}>
    <input
    {...register("email")}
    placeholder="Email"
    type="email"
    className={errors.email ? 'error' : ''}
    />
    {errors.email && <p>{errors.email.message}</p>}

    <input
    {...register("password")}
    placeholder="Password"
    type="password"
    className={errors.password ? 'error' : ''}
    />
    {errors.password && <p>{errors.password.message}</p>}

    <input type="submit" />
    <p className='or'>OR</p>
    <button type="button" onClick={handleEdit}>Edit</button> 
    </form>
    </>
);
}
