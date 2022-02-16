import React from "react";

interface ChartDatePickerCardProps {
    chartDate: "12m" | "30d" | "7d";
    onChange: (date: "12m" | "30d" | "7d") => void;
}

export const ChartDatePickerCard: React.FC<ChartDatePickerCardProps> = ({
    chartDate,
    onChange,
}) => {

    return (
        <div className="border border-lightgray rounded-lg text-size_14 font-inter-med text-gray700">
            <button className={`py-2.5 px-4 hover:bg-lightGray2 ${chartDate === "12m" && "bg-lightGray2"}`} onClick={() => onChange("12m")}>
                12 months
            </button>
            <button className={`py-2.5 px-4 border-x hover:bg-lightGray2 ${chartDate === "30d" && "bg-lightGray2"}`} onClick={() => onChange("30d")}>
                30 days
            </button>
            <button className={`py-2.5 px-4 hover:bg-lightGray2 ${chartDate === "7d" && "bg-lightGray2"}`} onClick={() => onChange("7d")}>
                7 days
            </button>
        </div>
    );
};