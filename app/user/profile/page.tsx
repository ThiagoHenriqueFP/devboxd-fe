import Image from "next/image";
import ProfileHeader from './../../components/ProfileHeader';
import PostCover from "@/app/components/PostCover";
import { Button } from "@/app/components/VariantButton";

export default function UserProfilePage() {
    return (
        <div>
            <ProfileHeader />
            { /* Container de most famous post*/ }
            <div className="flex flex-col items-start bg-neutral-700 min-h-screen px-6">
                
                <p className="py-2 text-xl text-white opacity-50">Most famous post</p>    
                <div className="w-full h-[2px] bg-white opacity-50"></div>
                
                { /* Container para TODOS os cards (Most Famous Posts) */ }
                <div className="flex justify-center gap-4 mt-4 mb-2 overflow-x-auto w-full">
                    
                    {/* CARD INDIVIDUAL: Envolve a capa e o título */}
                    <div className="flex flex-col items-center"> 
                        <PostCover 
                            sizeClasses="w-[150px] h-[150px]" 
                            src="/profile-picture.jpg"
                            alt="Profile Picture"
                        />
                        <p className="text-white mt-2 text-center text-sm">PROJECT TITLE</p>        
                    </div>

                     {/* CARD INDIVIDUAL: Envolve a capa e o título */}
                    <div className="flex flex-col items-center"> 
                        <PostCover 
                            sizeClasses="w-[150px] h-[150px]" 
                            src="/profile-picture.jpg"
                            alt="Profile Picture"
                        />
                        <p className="text-white mt-2 text-center text-sm">PROJECT TITLE</p>        
                    </div>

                     {/* CARD INDIVIDUAL: Envolve a capa e o título */}
                    <div className="flex flex-col items-center"> 
                        <PostCover 
                            sizeClasses="w-[150px] h-[150px]" 
                            src="/profile-picture.jpg"
                            alt="Profile Picture"
                        />
                        <p className="text-white mt-2 text-center text-sm">PROJECT TITLE</p>        
                    </div>

                     {/* CARD INDIVIDUAL: Envolve a capa e o título */}
                    <div className="flex flex-col items-center"> 
                        <PostCover 
                            sizeClasses="w-[150px] h-[150px]" 
                            src="/profile-picture.jpg"
                            alt="Profile Picture"
                        />
                        <p className="text-white mt-2 text-center text-sm">PROJECT TITLE</p>        
                    </div>
                </div>
                { /* Fim do container de cards */ }
                { /* Fim do container de most famous post */ }

                {/* Linha Divisoria */}
                <div className="w-full h-0.5 bg-white opacity-50"></div>

                { /* Container de recent posts */ }
                <div className="flex flex-col w-full mt-4 mb-6">
                    
                    {/* NOVO CONTAINER: Título e Botão*/}
                    <div className="flex justify-between items-center w-full"> 
                        <p className="py-2 text-xl text-white opacity-50">Recent posts</p> 
                        <Button variant="quinternary" className="text-xl py-0.5 px-3 opacity-50"> all </Button>
                    </div>
                    {/* Linha Divisoria */}
                    <div className="w-full h-[2px] bg-white opacity-50 mt-2"></div>
                </div>

            </div>
        </div>
    );
}