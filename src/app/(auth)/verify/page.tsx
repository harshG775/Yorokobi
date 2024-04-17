import { verifyUserCode } from "@/utils/MAL/auth/PKCE";
export default function page({ searchParams }: any) {
    const { code, state } = searchParams;
    const handleVerify = async () => {
        const resp = await verifyUserCode(state, code);
        console.log(resp);
    };
    handleVerify();
    return <div>Verify:</div>;
}
