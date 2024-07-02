import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

export function DialogReply({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="md:max-w-[425px] max-w-[380px]">
                <DialogHeader>
                    <DialogTitle>Reply Comment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Textarea placeholder="Write Reply Comment" className="col-span-3" />
                </div>
                <DialogFooter>
                    <Button
                        className="bg-transparent text-black border-[1px]
               border-black hover:bg-black hover:text-white
               rounded-full w-full sm:w-auto"
                        onClick={() => setOpen(false)}
                    >
                        Reply
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
