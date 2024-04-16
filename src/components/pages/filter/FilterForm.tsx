"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

// function DropDown(props: { title: string; children: React.ReactNode }) {
//     const { title, children } = props;
//     return (
//         <div>
//             <button className="[&+div]:focus:block">{title}</button>
//             <div className="hidden">{children}</div>
//         </div>
//     );
// }

export default function FilterForm() {
    return (
        <div>
            {/* <DropDown title="Select">
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
            </DropDown> */}
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>
                    Place content for the popover here.
                </PopoverContent>
            </Popover>
        </div>
    );
}
