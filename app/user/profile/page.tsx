import Image from "next/image";
import ProfileHeader from './../../components/ProfileHeader';

export default function UserProfilePage() {
    return (
        <div>
            <ProfileHeader />
            { /* Container de most famous post*/ }
            <div className="flex flex-col items-left bg-neutral-700 min-h-screen px-6">
                {/* Conteúdo do perfil do usuário */}
                <p className="py-2 text-xl text-white opacity-50">Most famous post</p>    
                { /* Linha Divisoria */ }
                <div className="w-full h-[2px] bg-white opacity-50"></div>
            </div>
            
        </div>
    );
}