import { forwardRef, ForwardedRef } from "react";

export const Featured = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className="relative min-h-screen bg-white">
            Featured
        </div>
    );
});