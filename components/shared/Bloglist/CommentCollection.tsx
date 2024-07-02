import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

function CommentCollection({ name, body, key, setOpen }: { name: string, body: string, key: string, setOpen: (open: boolean) => void }) {
    return (
        <section className="py-6 text-base bg-white rounded-lg mb-6 md:mb-8 lg:mb-10" key={key}>
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 ">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </p>
                    <p className="text-sm text-gray-600">{name}</p>
                </div>
            </div>
            <p>{body}</p>
            <div className="flex items-center mt-4 space-x-4">
                <button
                    type="button"
                    className="flex items-center gap-2 font-medium text-sm text-gray-500 hover:underline"
                    onClick={() => setOpen(true)}
                >
                    <IoChatboxEllipsesOutline size={20} />
                    Reply
                </button>
            </div>
        </section>
    )
}


export default CommentCollection