export interface ServerProps {
    id: string;
    imageUrl: string;
    name: string;
}

export default function ServerPage({
    id,
    imageUrl,
    name
}: ServerProps) {
    return (
        <div>
            <p>
              Server ID: {id}    
            </p>
            <p>
              Server Name: {name}   
            </p>
        </div>
    );
};