import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Poltek from "@/Images/rename.png";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import "@/Pages/Auth/style.css"
import { motion } from 'framer-motion';



export default function Register() {
    const transition = {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
        };

    const { data, setData, post, processing, errors, reset } = useForm({
        nim: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
       <div className="flex items-center justify-center h-screen">
            <motion.div className="bg-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}></motion.div>
                <motion.div className="absolute inset-y-0 lg:right-0 w-full lg:w-2/4 sm:w-full bg-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 2 }}
                transition={transition}>
            <div className="max-w-md w-full  mt-10 lg:mr-20 mr-7 mx-auto p-7 bg-white dark:bg-boxdark rounded-md shadow-default border border-stroke dark:border-strokedark rounded-[25px]">
                <Head title="Register" />
                <form onSubmit={submit}>
                <div className="flex justify-center mb-2 ">
                    <div className="h-16 w-20   flex items-center justify-center">
                        <img src={Poltek} className="h-20 w-20 rounded-t-[10px] p-1 " alt="Logo" />
                    </div>
                </div>
                    <div>
                        <InputLabel htmlFor="name" value="Nim/No Telp" />
                        <TextInput
                            id="nim"
                            name="nim"
                            value={data.nim}
                            className=" block w-full h-1/3"
                            autoComplete="nim"
                            isFocused={true}
                            onChange={(e) => setData("nim", e.target.value)}
                            required
                        />

                        <InputError message={errors.nim} className="mt-2" />
                    </div>
                    <div className="mt-1">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className=" block w-full h-1/3 "
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className=" block w-full h-1/3"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-1">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className=" block w-full h-1/3"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-1">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className=" block w-full h-1/3"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-1">
                        <label htmlFor="role" className="block text-gray-700 h-1/3">
                            Role:
                        </label>
                        <select
                            id="role"
                            value={data.role}
                            onChange={(e) => setData("role", e.target.value)}
                            className=" block w-full h-1/3"
                        >
                            <option value="" disabled>
                                Select a role
                            </option>
                            <option value="talent">Talent</option>
                            <option value="company">Company</option>
                        </select>
                        {errors.role && (
                            <div className="text-red-500">{errors.role}</div>
                        )}
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route("login")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </form>{" "}
            </div>
        </motion.div>
        </div>
    );
}
