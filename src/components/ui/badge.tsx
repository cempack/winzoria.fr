import * as React from "react"
import {cva, type VariantProps} from "class-variance-authority"

import {cn} from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                Administrateur: "border-red-500 bg-red-500 text-white",
                "Super-Modérateur": "border-yellow-500 bg-yellow-500 text-white",
                Modérateur: "border-blue-500 bg-blue-500 text-white",
                Helper: "border-green-500 bg-green-500 text-white",
                Animateur: "border-purple-500 bg-purple-500 text-white",
                Builder: "border-indigo-500 bg-indigo-500 text-white",
                Développeur: "border-pink-500 bg-pink-500 text-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {
}

function Badge({className, variant, ...props}: BadgeProps) {
    return (
        <div className={cn(badgeVariants({variant}), className)} {...props} />
    )
}

export {Badge, badgeVariants}
