"use client";

import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import InputWithError from "../InputWithError/InputWithError";
import { ErrorsObject } from "@/lib/FormTypes";

type FormData = {
    name: string;
    phone: string;
    date: string;
};

interface BookingFormProps {
    validationErrors: ErrorsObject;
    onSubmit: (data: FormData) => Promise<void>;
    isFormReset: boolean;

    setIsFormReset: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingForm = ({
    onSubmit,
    validationErrors,
    isFormReset,
    setIsFormReset
}: BookingFormProps) => {
    const { handleSubmit, control, reset } = useForm<FormData>();

    useEffect(() => {
        if (isFormReset) {
            reset();
            setIsFormReset(false);

        }
    }, [isFormReset, reset, setIsFormReset]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-lg flex flex-col gap-8"
        >
            <div>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <InputWithError
                            {...field}
                            placeholder="your name"
                            error={validationErrors.name}
                        />
                    )}
                />
            </div>
            <div>
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <InputWithError
                            {...field}
                            placeholder="your phone"
                            type="tel"
                            error={validationErrors.phone}
                        />
                    )}
                />
            </div>
            <div>
                <Controller
                    name="date"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <InputWithError
                            {...field}
                            placeholder="date"
                            type="date"
                            error={validationErrors.date}
                        />
                    )}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-custom-green hover:scale-[101%]"
                >
                    submit
                </button>
            </div>
        </form>
    );
};

export default BookingForm;
