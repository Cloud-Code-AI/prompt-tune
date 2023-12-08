import Header from "./components/header";

export default function Tool () {
    return (
        <>
        <Header title = "Prompt Tune" />
        <div className="flex flex-col p-8 w-full h-[90vh]">
            <div className="border w-full p-4">
                <p>Main Prompt</p>
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
                                Preview
                            </div>
                            <div className="border-l p-6">
                                Prompt Selection
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 w-full items-center p-6">
                        Chat area
                    </div>
                    <div className="flex w-full border-t p-6">
                        Input area
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}