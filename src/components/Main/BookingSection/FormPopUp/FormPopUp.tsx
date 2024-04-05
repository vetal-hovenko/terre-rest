"use client";

import React from "react";

interface FormPopUpProps {
    onClose: () => void;
    onConfirm: () => void;
}

const FormPopUp = (props: FormPopUpProps) => {
    const { onClose, onConfirm } = props;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="font-medium leading-6 text-gray-900 regular-text">
                            Confirm Submission?
                        </h3>
                    </div>
                    <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            onClick={onConfirm}
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-custom-green text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto regular-text"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={onClose}
                            type="button"
                            className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto regular-text"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPopUp;
