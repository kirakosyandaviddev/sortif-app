import React, { useRef, useState } from 'react';

interface VerificationInputsProps {
    length: number;
    onComplete: (code: string[] | string) => void;
};

export const VerificationInputs: React.FC<VerificationInputsProps> = ({ length, onComplete }) => {

    const [code, setCode] = useState([...Array(length)].map(() => ""));
    const inputs = useRef<(HTMLInputElement | null)[]>([]);

    const processInput = (e: React.ChangeEvent<HTMLInputElement>, slot: number) => {
        const num = e.target.value;
        if (/[^0-9]/.test(num)) return;
        const newCode = [...code];
        newCode[slot] = num;
        setCode(newCode);
        if (slot !== length - 1) {
            inputs?.current[slot + 1]?.focus();
        };
        if (newCode.every(num => num !== "")) {
            onComplete(newCode.join(''));
        };
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, slot: number) => {
        if (e.keyCode === 8 && !code[slot] && slot !== 0) {
            const newCode = [...code];
            newCode[slot - 1] = "";
            setCode(newCode);
            inputs?.current[slot - 1]?.focus();
        };
    };

    return (
        <div className="flex justify-between gap-3 w-full">
            {code.map((num, idx) => {
                return (
                    <input
                        key={idx}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={num}
                        autoFocus={!code[0].length && idx === 0}
                        onChange={e => processInput(e, idx)}
                        onKeyUp={e => onKeyUp(e, idx)}
                        ref={ref => inputs.current.push(ref)}
                        className="text-size_30 sm:text-size_48 font-inter-semi text-center w-16 h-16 sm:w-20 sm:h-20 block py-2.5 px-2 focus:bg-white text-gray900
                                    outline-none placeholder:black border border-gray900 rounded-lg"
                    />
                );
            })}
        </div>
    );
};