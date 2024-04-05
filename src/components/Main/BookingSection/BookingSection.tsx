"use client";

import ContentWrapper from "@/components/UI/ContentWrapper/ContentWrapper";
import HandwrittenText from "@/components/UI/HandwrittenText/HandwrittenText";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import FormPopUp from "./FormPopUp/FormPopUp";
import { z as zod } from "zod";
import BookingForm from "./BookingForm/BookingForm";
import { ErrorsObject, FormData } from "@/lib/FormTypes";

const schema = zod.object({
    name: zod
        .string()
        .min(2, { message: "Name must be at least 2 characters long" }),
    phone: zod
        .string()
        .min(10, {
            message: "Phone number must be at least 10 characters long",
        })
        .refine(
            (value) => {
                return value.split('').every(number => !Number.isNaN(number));
            },
            {
                message: "Invalid phone number format",
            }
        ),
    date: zod.string().refine(
        (val) => {
            return !!val;
        },
        { message: "Date is required" }
    ),
});

const BookingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [validationErrors, setValidationErrors] = useState<ErrorsObject>(
        {} as ErrorsObject
    );
    const [isFormReset, setIsFormReset] = useState(false);

    const onSubmit = async (data: FormData) => {
        try {
            const validatedData = schema.parse(data);
            setIsModalOpen(true);
        } catch (error) {
            if (error instanceof zod.ZodError) {
                const fieldErrors: ErrorsObject = {} as ErrorsObject;
                error.errors.forEach((err) => {
                    if (err.path) {
                        fieldErrors[err.path[0] as keyof FormData] =
                            err.message;
                    }
                });
                setValidationErrors(fieldErrors);
            }
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmSubmission = () => {
        setIsFormReset(true);
        setIsModalOpen(false);
        setValidationErrors({} as ErrorsObject);
    };

    return (
        <section className="booking">
            <ContentWrapper containerStyle="flex flex-col gap-4 justify-center items-center min-h-screen">
                <div className="flex flex-col items-center">
                    <HandwrittenText text="book a table" isWhite={true} />
                    <h2 className="section-title text-white">book a table</h2>
                </div>
                <BookingForm
                    isFormReset={isFormReset}
                    setIsFormReset={setIsFormReset}
                    onSubmit={onSubmit}
                    validationErrors={validationErrors}
                />
            </ContentWrapper>
            {isModalOpen && (
                <FormPopUp
                    onClose={handleCloseModal}
                    onConfirm={handleConfirmSubmission}
                />
            )}
        </section>
    );
};

export default BookingSection;
