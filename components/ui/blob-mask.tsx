import { cn } from "@/lib/utils";
import React from "react";

interface BlobMaskProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 1 | 2 | 3 | 4 | 5;
}

export function BlobMask({ className, variant = 1, children, ...props }: BlobMaskProps) {
    const blobClasses = {
        1: "[border-radius:60%_40%_30%_70%/60%_30%_70%_40%]",
        2: "[border-radius:40%_60%_70%_30%/40%_50%_60%_50%]",
        3: "[border-radius:41%_59%_43%_57%/47%_43%_57%_53%]",
        4: "[border-radius:73%_27%_45%_55%/40%_47%_53%_60%]",
        5: "[border-radius:50%_50%_20%_80%/25%_80%_20%_75%]",
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden inline-block aspect-square transition-all duration-500",
                blobClasses[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
