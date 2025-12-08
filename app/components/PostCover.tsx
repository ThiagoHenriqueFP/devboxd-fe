import Image from "next/image";
interface PostCoverProps {
  sizeClasses: string; 
  src: string;
  alt: string;
}

export default function PostCover({ sizeClasses, src, alt }: PostCoverProps) {
    return (
        <div 
            className={`
                relative 
                rounded-xl 
                overflow-hidden
                shadow-lg 
                bg-gray-600
                ${sizeClasses}
            `}
        >
            <Image 
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"    
            /> 
        </div>
    );
}