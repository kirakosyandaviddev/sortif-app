import React, { useState } from "react";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import { PrimaryInput } from ".";
import { SearchIcon } from "../environment";

export const InvoiceFilterBar: React.FC = () => {

    const [searchValue, setSearchValue] = useState<string>('');
    const [costValue, setCostValue] = useState<string>('');
    const [custumer, setCostumer] = useState<string>('');
    const [dateValue, setDateValue] = React.useState<Date | null>(new Date());

    return (
        <div className="flex justify-center xl:justify-start items-center w-full gap-3">
            <div className="xl:min-w-lg xl:w-full">
                <PrimaryInput
                    name="searchInput"
                    label="Search for Contact Name"
                    onBlur={() => { }}
                    icon={SearchIcon}
                    value={searchValue}
                    placeholder="Search"
                    onChange={(e) => setSearchValue(e.target.value)}
                    inputClassName="outline-blue"
                />
            </div>
            <div className="hidden xl:flex flex-col gap-1">
                <span className="text-size_14 font-inter-med text-gray700">
                    Cost
                </span>
                <FormControl sx={{ width: '192px' }}>
                    <Select
                        value={costValue}
                        onChange={(e) => setCostValue(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value=""> - </MenuItem>
                        <MenuItem value={50}>10-50$</MenuItem>
                        <MenuItem value={100}>50-100$</MenuItem>
                        <MenuItem value={500}>100-500$</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="hidden xl:flex flex-col gap-1.5">
                <span className="text-size_14 font-inter-med text-gray700 ">
                    Date
                </span>
                <FormControl sx={{ width: '192px' }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <MobileDatePicker
                            inputFormat="MM/dd/yyyy"
                            value={dateValue}
                            onChange={(e) => setDateValue(e)}
                            toolbarTitle={false}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </FormControl>
            </div>
            <div className="hidden xl:flex flex-col gap-1.5">
                <span className="text-size_14 font-inter-med text-gray700 ">
                    Customer
                </span>
                <div>
                    <FormControl sx={{ width: '192px' }}>
                        <Select
                            value={custumer}
                            onChange={(e) => setCostumer(e.target.value)}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value=""> - </MenuItem>
                            <MenuItem value={10}>Olivia Rhye</MenuItem>
                            <MenuItem value={20}>Lana Steiner</MenuItem>
                            <MenuItem value={30}>Demi Wilkinson</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    )
}