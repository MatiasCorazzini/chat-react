"use client"

import { ActionToolTip } from "../action-tooltip"; 

import { Plus } from "lucide-react";

export function NavigationAction() {
    return (
        <div>
            <ActionToolTip
                side="left"
                align="center"
                label="Add a server"
            >
               <button
                    className="group flex items-center"
                >
                    <div 
                    className="
                        flex mx-3 h-[48px] w-[48px] 
                        rounded-[28px]
                        group-hover:rounded-[16px] 
                        transition-all
                        overflow-hidden
                        items-center
                        justify-center
                        bg-background 
                        dark:bg-neutral-700
                        group-hover:bg-emerald-500
                    ">
                        <Plus 
                            className="group-hover:text-white transition"
                            size={28}
                        />                                      
                    </div>
                </button> 
            </ActionToolTip>            
        </div>
    );
}