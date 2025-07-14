import React, { useState } from "react";

import { Input } from "@/components/input";

export default function Home() {
  const [inputValue, setInputValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)



  const isValidURL = (input: string) => {
    try {
      const url = new URL(input)
      return url.protocol === 'http:' || url.protocol ==='https:'
    }
    catch {
      return false
    }
  }

  const handleSubmit = (e: React.FormEvent) => { // 'e' is the event object
    e.preventDefault() // Stop the browser from reloading the page, without this the page would reload and you would lose your state
    
    if (isValidURL(inputValue)) {
      setIsLoading(true)
      
    }




  }

  return (
    <div className="flex flex-grow items-center justify-center overflow-hidden">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-xl p-6 transform transition-all hover:shadow-3xl">
        <h3>URL Shortener</h3>
        <Input name="Enter URL" placeholder="enter url" title="Enter URL" value={inputValue} onChange={setInputValue} />
      </form>
    </div>
  );
}
