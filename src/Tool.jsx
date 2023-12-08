import Header from "./components/header";
import { Label } from "./components/ui/label";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react";

const promptData = [
    {
        number: "1",
        prompt: "Sample prompt 1"
    },
    {
        number: "2",
        prompt: "Sample prompt 2"
    },
    {
        number: "3",
        prompt: "Sample prompt 3"
    },
    {
        number: "4",
        prompt: "Sample prompt 4"
    },
    {
        number: "5",
        prompt: "Sample prompt 5"
    }
]

export default function Tool () {

    const [loading, setLoading] = useState(false)

    const submitPrompt = (e, source) => {
        e.preventDefault();
        console.log(source)
    }

    const submitChatPrompt = (e, source) => {
        e.preventDefault();
        console.log(source)
    }

    return (
        <>
        <Header title = "Prompt Tune" />
        <div className="flex flex-col p-8 w-full h-[90vh]">
            <div className="border w-full py-4">
                <div className="flex flex-col gap-y-2 w-full">
                    <Label className="px-8 pt-2 text-xs text-gray-600">PROMPT</Label>
                    <form id="promptForm" className="px-4 h-full w-full">
                        <label htmlFor="prompt" className="sr-only">Enter your prompt</label>
                        <div className="relative h-full">
                            <textarea
                                id="prompt"
                                className="block w-full h-full resize-none bg-background px-4 py-2 pr-16 text-base focus:outline-none sm:text-base"
                                placeholder="Enter your prompt"
                                rows="1"
                                required
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        submitPrompt(e, "desktop");
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                onClick={(e) => submitPrompt(e, "desktop")}
                                className="absolute md:top-1 top-0 right-2.5 rounded-lg p-2"
                            >
                                {loading ? <ThreeDots fill="#1e293b" speed={0.75} className='rounded-r-md h-5 w-5' /> :
                                    <PaperPlaneIcon className='h-5 w-5 hover:text-gray-500' />}
                                <span className="sr-only">Send message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex h-full w-full">
                <div className="flex flex-col w-full h-full border">
                    <div className="w-full h-full border-b p-6">
                        Option 1
                    </div>
                    <div className="w-full h-full p-6">
                        Option 2
                    </div>
                </div>
                <div className="flex flex-col w-full h-full border">
                    <div className="flex w-full border-b">
                        <div className="flex w-full justify-between">
                            <div className="p-6">
                                <Label className="text-gray-600">PREVIEW</Label>
                            </div>
                            <div className="border-l p-6">
                                Prompt Selection
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 w-full items-center p-6">
                        Chat area
                    </div>
                    <div className="flex w-full border-t p-4">
                    <form id="promptForm" className="h-full w-full">
                        <label htmlFor="prompt" className="sr-only">Enter your prompt</label>
                        <div className="relative h-full">
                            <textarea
                                id="chatPrompt"
                                className="block w-full h-full resize-none bg-background px-4 py-2 pr-16 text-base focus:outline-none sm:text-base"
                                placeholder="Enter your prompt"
                                rows="1"
                                required
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        submitChatPrompt(e, "desktop");
                                    }
                                }}
                            />
                            <button
                                type="submit"
                                onClick={(e) => submitChatPrompt(e, "desktop")}
                                className="absolute md:top-1 top-0 right-2.5 rounded-lg p-2"
                            >
                                {loading ? <ThreeDots fill="#1e293b" speed={0.75} className='rounded-r-md h-5 w-5' /> :
                                    <PaperPlaneIcon className='h-5 w-5 hover:text-gray-500' />}
                                <span className="sr-only">Send message</span>
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}