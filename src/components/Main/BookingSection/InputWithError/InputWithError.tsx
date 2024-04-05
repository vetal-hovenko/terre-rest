import React, { forwardRef } from "react";

interface InputWithErrorProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    placeholder: string;
}

const InputWithError = forwardRef<HTMLInputElement, InputWithErrorProps>(
    function InputWithError({ error, ...rest }, ref) {
        return (
            <div className="relative">
                <input
                    {...rest}
                    ref={ref}
                    className="shadow appearance-none w-full py-2 px-3 focus:outline-none focus:shadow-outline booking-input border-b-gray-400 border-b-[1px]"
                />
                {error && (
                    <p className="text-red-500 text-xs italic absolute">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

InputWithError.displayName = "InputWithError";

export default InputWithError;
