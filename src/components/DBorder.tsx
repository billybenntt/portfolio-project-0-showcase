import React from "react";
import {jetBrainsMono} from "@/styles/fonts/fonts";

function DBorder({children}: { children: React.ReactNode }) {
    return (
        <div className={`d-border ${jetBrainsMono.className}`}>
            <div className="d-border-center">
                    {children}
            </div>
        </div>
    )
}

export default DBorder
