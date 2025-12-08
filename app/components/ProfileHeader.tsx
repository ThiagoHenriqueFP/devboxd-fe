import Image from "next/image";
import { Button } from "@/app/components/VariantButton";
import { useUserContext } from "@/context/contexts/UserContext";

export default function ProfileHeader() {
    const context = useUserContext()
    const USERNAME = context.user?.username || "João Banana" ;
    const PROFILE_PIC_URL = "/profile-picture.jpg";
    const USER_BIO =  "User bio user bio";
    const POSTS_COUNT = 33;
    const FOLLOWERS_COUNT = 120;
    const FOLLOWING_COUNT =  150;

    return (
        <div className="w-full bg-neutral-700 text-white pt-6 pb-4 px-6 border-neutral-800">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden">
                        <Image
                            src={PROFILE_PIC_URL}
                            alt="Profile Picture"
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    {/* Username + Edit Button */}
                    <div className="flex flex-col mt-5">
                        <div className="flex items-center gap-2">
                            <h2 className="text-xl font-semibold">{USERNAME}</h2>

                            <Button variant="quarternary" className="text-xs py-0.5 px-3">
                                Edit Profile
                            </Button>
                        </div>
                        {/* User Bio */}
                        <p className="text-neutral-400 text-sm">{USER_BIO}</p>
                    </div>
                </div>

                {/* Botões de Post, Followers e Following */}
                <div className="flex items-center gap-10 text-right mt-5">
                    <div className="flex flex-col items-center">
                        <Button variant="quinternary" className="text-xl py-0.5 px-3"> {POSTS_COUNT} </Button>
                        <p className="text-neutral-400 text-xs">posts</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <Button variant="quinternary" className="text-xl py-0.5 px-3"> {FOLLOWERS_COUNT} </Button>
                        <p className="text-neutral-400 text-xs">followers</p>
                    </div>

                    <div className="flex flex-col items-center">
                       <Button variant="quinternary" className="text-xl py-0.5 px-3"> {FOLLOWING_COUNT} </Button>
                        <p className="text-neutral-400 text-xs">following</p>
                    </div>
                </div>
            </div>

            {/* Linha Divisoria */}
            <div className="w-full h-[2px] bg-white opacity-50 mt-6"></div>
        </div>
    );
}
