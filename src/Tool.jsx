import Header from "./components/header";
import { Label } from "./components/ui/label";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";
import { PaperPlaneIcon } from "@radix-ui/react-icons"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "./components/ui/button";

const promptData = [
    "Sample prompt 1",
    "Sample prompt 2",
    "Sample prompt 3",
    "Sample prompt 4",
    "Sample prompt 5"
]

export default function Tool () {

    const [loading, setLoading] = useState(false)
    const [chatLoading, setChatLoading] = useState(false)
    const [messages, setMessages] = useState([
        { text: "Hey there! How may I assist you?", sender: "Bot" },
      ]);
    
    const [option1, setOption1] = useState({
        text: "Enter prompt to generate options",
        id: -1
    })
    const [option2, setOption2] = useState({
        text: "Enter prompt to generate options",
        id: 0
    })
    const submitPrompt = (e) => {
        e.preventDefault();
        setLoading(true)
        //TODO: Add API call here to load 5 prompt options.
        const resp = "response"
        console.log(resp)
        setOption1({
            text: promptData[0],
            id: 0
        })
        setOption2({
            text: promptData[1],
            id: 1
        })
        setLoading(false)
    }

    const submitChatPrompt = (e,) => {
        e.preventDefault();
        setChatLoading(true) 
    }

    const handleSelect = (id) => {
        console.log(id)
        console.log(option1.id)
        console.log(option2.id)
        console.log(option1.id === option2.id)
        if (id === 1) {
            if (option2.id < 5) {
                if (option2.id + 1 != option1.id && option2.id + 1 < 5) {
                    setOption2({
                        text: promptData[option2.id + 1],
                        id: option2.id + 1
                    })
                }
                else if (option2.id + 2 != option1.id && option2.id + 2 < 5) {
                    setOption2({
                        text: promptData[option2.id + 2],
                        id: option2.id + 2
                    })
                }
            }
            
        }
        if (id === 2) {
            if (option1.id < 5) {
                if (option1.id + 1 != option2.id && option1.id + 1 < 5) {
                    setOption1({
                        text: promptData[option1.id + 1],
                        id: option1.id + 1
                    })
                }
                else if (option1.id + 2 != option2.id && option1.id + 2 < 5) {
                    setOption1({
                        text: promptData[option1.id + 2],
                        id: option1.id + 2
                    })
                }
            }
            
        }
    }

    return (
        <>
        <Header title = "Prompt Tune" />
        <div className="flex flex-col p-8 w-full h-[90vh]">
            <div className="border rounded-md h-full">
                <div className="w-full h-[18%] py-4 border-b">
                    <div className="flex flex-col gap-y-2 w-full">
                        <Label className="px-8 pt-2 text-xs text-primary/50">PROMPT</Label>
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
                                            submitPrompt(e);
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    onClick={(e) => submitPrompt(e)}
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
                <div className="flex h-[82%] w-full">
                    <div className="flex flex-col w-full h-full">
                        <p className="px-6 pt-6 text-primary/50">Please choose one of the two options</p>
                        <div className="w-full h-full p-6 flex flex-col gap-y-4">
                            <Button className="h-full w-full" variant="outline" onClick={() => handleSelect(1)}>
                                <div>
                                    {option1.text}
                                </div>
                            </Button>
                            <Button className="h-full w-full" variant="outline" onClick={() => handleSelect(2)}>
                                <div>
                                    {option2.text}
                                </div>
                            </Button>
                        </div>
                        <div className="p-6 flex flex-col gap-y-2">
                            <Label className="text-xs text-primary/50">TUNED PROMPT</Label>
                            <p>{promptData[0].prompt}</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full h-full border-l">
                        <div className="flex w-full border-b">
                            <div className="flex w-full justify-between">
                                <div className="p-6">
                                    <Label className="text-primary/50">PREVIEW</Label>
                                </div>
                                <div className="p-4">
                                    <Select>
                                        <SelectTrigger className="w-[280px]">
                                            <SelectValue placeholder="Select prompt" />
                                        </SelectTrigger>
                                        <SelectContent className="max-w-sm">
                                            <SelectGroup>
                                            <SelectLabel>Prompts</SelectLabel>
                                            {promptData.map((prompt) => (
                                                <SelectItem key={prompt.number} value={prompt.number}>
                                                    <p>{prompt.prompt}</p>
                                                </SelectItem>
                                            ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </div>
                            </div>
                        </div>
                        <div className="flex flex-col flex-1 w-full items-center p-6">
                            <div className="flex flex-col gap-y-4 w-full">
                                {messages.map((message) => (
                                    message.sender === "Bot" ? 
                                    <div key={message.id} className="flex items-center gap-x-4 justify-start whitespace-pre-wrap">
                                        <Avatar className="h-9 w-9 border border-primary">
                                            <AvatarImage src="" />
                                            <AvatarFallback>B</AvatarFallback>
                                        </Avatar>
                                        <p className="bg-secondary text-primary px-6 py-2 rounded-lg">{message.text}</p>
                                    </div> 
                                    :
                                    <div key={message.id} className="flex items-center gap-x-4 justify-end whitespace-pre-wrap">
                                        <Avatar className="h-9 w-9 border border-primary">
                                            <AvatarImage src="" />
                                            <AvatarFallback>U</AvatarFallback>
                                        </Avatar>
                                        <p className="bg-primary text-secondary px-6 py-2 rounded-lg">{message.text}</p>
                                    </div> 
                                ))} 
                            </div>
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
                                            submitChatPrompt(e);
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    onClick={(e) => submitChatPrompt(e, "desktop")}
                                    className="absolute md:top-1 top-0 right-2.5 rounded-lg p-2"
                                >
                                    {chatLoading ? <ThreeDots fill="#1e293b" speed={0.75} className='rounded-r-md h-5 w-5' /> :
                                        <PaperPlaneIcon className='h-5 w-5 hover:text-gray-500' />}
                                    <span className="sr-only">Send message</span>
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}