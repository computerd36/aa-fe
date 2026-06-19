import React from "react";
import { StatusType } from "../resources";
import { StatusIconComponent } from "./StatusIconComponent";


interface StatusEntryComponentProps {
    name: string;
    status: StatusType
}

export const StatusEntryComponent: React.FC<StatusEntryComponentProps> = ({ name, status }) => {
    return (
        <div className="bg-zinc-800 p-4 rounded-lg shadow-md flex flex-row items-center justify-between">
            <span className="text-md md:text-lg xl:text-xl text-zinc-200">{name}</span>
            <StatusIconComponent
                status={status}
                className="w-8 h-8"
            />
        </div>
    )
}