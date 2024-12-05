import { ReactNode } from "react";

export default function Layout(
    { children }: { children: ReactNode }
) {

    return (
        <div>
            <div>with search bar </div>
            {children}
        </div>
    )
}