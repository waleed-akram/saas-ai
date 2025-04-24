"use client"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Form from "next/form"

const schema = z.object({
  name: z.string().min(1, "Name is required!"),
  password: z
    .string()
    .min(1, "Password is required!")
    .max(12, "Password cannot be more than 12 characters!"),
});

type FormData = z.infer<typeof schema>;

// let test = useForm();

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <label className="block text-center">name</label>
        <input {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <label>password</label>
        <input {...register("password")} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
