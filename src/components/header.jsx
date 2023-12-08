
import UserNav from "@/components/userNav"
import { ModeToggle } from "./modeToggle"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
export default function Header (props) {
    return (
        <div className="border-b w-full">
            <div className="flex px-4 py-4 md:hidden items-center w-full">
                <div className="ml-14 flex items-center justify-between w-full">
                <h2 className="text-sm font-semibold">{props.title}</h2>
                <div className="ml-auto flex items-center gap-x-2">
                    <Label className="whitespace-nowrap">OpenAI Key</Label>
                    <Input placeholder="Enter your OpenAI key"/>
                    <UserNav />
                    <ModeToggle/>
                </div>
                </div>
            </div>
            <div className="hidden md:flex h-16 items-center px-8">
                <h2 className="text-lg font-semibold">{props.title}</h2>
                <div className="ml-auto flex items-center gap-x-4">
                    <Label className="whitespace-nowrap">OpenAI Key</Label>
                    <Input placeholder="Enter your OpenAI key"/>
                    <UserNav />
                    <ModeToggle/>
                </div>
            </div>
        </div>
    )
}