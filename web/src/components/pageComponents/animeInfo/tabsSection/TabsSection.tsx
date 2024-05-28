import Tabs from "@/components/ui/tabs/Tabs";
import Overview from "./sections/Overview";
import Relations from "./sections/Relations";
import Characters from "./sections/Characters";
import Staff from "./sections/Staff";
import { InfoType } from "@/types/aniListTypes";

export default function TabsSection({ info }: { info: InfoType }) {
    // console.log(info);
    return (
        <Tabs
            tabData={[
                {
                    title: "overview",
                    render: <Overview />,
                },
                {
                    title: "relations",
                    render: <Relations id={"21"}/>,
                },
                {
                    title: "characters",
                    render: <Characters />,
                },
                {
                    title: "staff",
                    render: <Staff />,
                },
            ]}
        />
    );
}
