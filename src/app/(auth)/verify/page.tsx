import verifyUserCode from "@/utils/MAL/auth/verifyUserCode";
import { cookies } from "next/headers";
export default function page({ searchParams }: any) {
    const cookieStore = cookies();
    const codeVerifier = cookieStore.get("codeVerifier");
    const { code } = searchParams;
    const handleVerify =async () => {
        const resp = await verifyUserCode(codeVerifier?.value as string, code);
        console.log(resp);
    }
    handleVerify()
    return <div>Verify:</div>;
}
