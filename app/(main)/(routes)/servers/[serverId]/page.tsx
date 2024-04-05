import ServerPage from "@/components/server-view";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function ServerIdPage() {
    const profile = await currentProfile();

    if (!profile) {
        return redirect("/");
    }

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if (!server) {
        return redirect(`/`);
    }
    
    return (
        <ServerPage
            id={server.id}
            imageUrl={server.imageUrl}
            name={server.name}
        />
    );
};