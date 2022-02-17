import React, { useState } from "react";
import { AccountSettingsForm, AvatarIcon, IMAPSettingsForm, PrimaryButton } from "../../components";
import { UploadCloudIcon } from "../../environment";
import { AppLayout } from "../../layouts";


export const Settings: React.FC = () => {
    const [settingsType, setSettingsType] = useState<"Profile" | "IMAP">("Profile");
    const [companyLogo, setCompanyLogo] = useState<string>("/assets/SortifLogo_MD.png");

    const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files?.length > 0) {
            setCompanyLogo(URL.createObjectURL(e.target.files[0]))
        }
    };

    return (
        <AppLayout>
            <div className="flex flex-col max-w-7xl w-full mt-16 py-8 md:pb-12 md:pt-14 px-5">
                <div className="w-full pb-7 border-b border-gray200 mb-8 text-size_24 sm:text-size_30 font-inter-med text-gray900">
                    Settings
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-10">
                    <div className="flex flex-row lg:flex-col gap-2">
                        <PrimaryButton
                            title="Profile"
                            bgInherit
                            className={`${settingsType === "Profile" && "settings_profile_sm_btn"} rounded-md px-3 py-2 text-size_14`}
                            onClick={() => setSettingsType("Profile")}
                        />
                        <PrimaryButton
                            title="IMAP"
                            bgInherit
                            className={`${settingsType === "IMAP" && "settings_profile_sm_btn"} rounded-md px-3 py-2 text-size_14`}
                            onClick={() => setSettingsType("IMAP")}
                        />
                    </div>
                    <div className="flex flex-col w-full max-w-5xl w-full">
                        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5 w-full pb-5 border-b border-gray200 mb-7">
                            <div className="flex flex-col gap-1">
                                <span className="text-size_18 font-inter-med text-gray900">Settings</span>
                                <span className="text-size_14 font-inter-reg text-gray500">Update your information photo and details here.</span>
                            </div>
                            <div className="flex gap-3">
                                <PrimaryButton
                                    title="Cancel"
                                    bgInherit
                                    className="rounded-lg px-4 py-2.5 text-size_14 border border-lightGray hover:bg-gray100 transition-colors"
                                />
                                <PrimaryButton
                                    title="Save"
                                    type="submit"
                                />
                            </div>
                        </div>
                        <div className="pb-5 border-b border-gray200 mb-5">
                            <div className="flex flex-col lg:flex-row gap-3 justify-between w-full max-w-4xl">
                                <div className="text-size_14 font-inter-med text-gray700">
                                    Account Settings
                                </div>
                                <AccountSettingsForm />
                            </div>
                        </div>
                        <div className="pb-5 border-b border-gray200 mb-5">
                            <div className="flex flex-col lg:flex-row gap-3  justify-between w-full max-w-4xl">
                                <div className="flex flex-col text-size_14">
                                    <span className="font-inter-med text-gray700">
                                        Company logo
                                    </span>
                                    <span className="font-inter-reg text-gray500">
                                        Update your company logo and then <br /> choose where you want it to display.
                                    </span>
                                </div>
                                <label className="flex flex-col lg:flex-row justify-between gap-4 max-w-lg w-full cursor-pointer">
                                    <div className="mt-4">
                                        <AvatarIcon
                                            src={companyLogo}
                                            size={40}
                                        />
                                    </div>
                                    <div className="flex flex-col items-center p-4 max-w-xs w-full rounded-lg border border-lightGray hover:bg-gray100 transition-colors">
                                        <UploadCloudIcon />
                                        <div className="mt-3 mb-1 text-size_14">
                                            <span className="text-purple700 font-inter-med mr-1">Click to upload</span>
                                            <span className="text-gray500 font-inter-reg">or drag and drop</span>
                                        </div>
                                        <span className="text-size_12 font-inter-reg text-gray500">
                                            SVG, PNG, JPG or GIF (max. 800x400px)
                                        </span>
                                    </div>
                                    <input
                                        type="file"
                                        hidden
                                        accept={"image/png, image/jpg, image/svg, image/gif"}
                                        onChange={handleFilesChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex flex-col lg:flex-row gap-3  justify-between w-full max-w-4xl">
                                <div className="text-size_14 font-inter-med text-gray700">
                                    IMAP Settings
                                </div>
                                <IMAPSettingsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout >
    );
};