"use client"
import { redirect_MAL_ToVerify } from "@/actions/actions";
export default function Page() {
    const handleClick = () => {
        redirect_MAL_ToVerify();
    }
    return (
        <div onClick={handleClick}> click</div>
    )
}
