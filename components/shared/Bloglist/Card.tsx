import { Button } from '../../ui/button';
import Link from 'next/link';

interface CardProps {
    post: {
        id: number;
        title: string;
        body: string;
    };
}

const Card: React.FC<CardProps> = ({ post }) => {
    return (
        <div className="p-4 group relative flex flex-col justify-between min-h-[380px] w-full max-w-[400px] overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[270px]">
            <Link href={`/bloglist/${post.id}`}>
                <div className="flex flex-col">
                    <h1 className="text-xl font-semibold">{post.title}</h1>
                    <p className="pt-3 text-base text-gray-500">{post.body.slice(0, 130)}...</p>
                </div>
                <div className="mt-7 w-full">
                    <Button
                        size='lg'
                        asChild
                        className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full w-full"
                    >
                        <Link href={`/bloglist/${post.id}`}>
                            Read More
                        </Link>
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default Card;
