import React from "react";

function DBorder({children}: { children: React.ReactNode }) {
    return (
        <div className="d-border">
            <div className="d-border-center">
                    {children}
            </div>
        </div>
    )
}

export default DBorder
