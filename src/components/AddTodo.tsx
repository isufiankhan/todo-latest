'use client'

import { NewTodo } from "@/lib/drizzle"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import { useState } from "react"

const AddTodo = () => {
const [data, setData] = useState<NewTodo | null>(null)
const { refresh } = useRouter();

const handleSubmit = async() => {
    try {
        if(data){
            const res = await fetch("/api/todo",{
                method: "POST",
                body: JSON.stringify({
                    task: data.task
                }),
            })
            console.log(res.ok)
            refresh();
        }
    } catch (error) {
        console.log(error)
    }
   
}

  return (
    <div>
        <form className="w-full flex gap-3">
            <input 
            type="text" 
            className="px-5 py-3 rounded-full w-full border outline-secondary"
            onChange={(e)=> setData({task: e.target.value})}
            />
            <button type="button" className="shrink-0 p-4 rounded-full bg-gradient-to-b from-primary to-secondary" onClick={handleSubmit} >
                <Image src={"/Vector.png"} alt="vector" width={20} height={20} />
            </button>
        </form>
    </div>
  )
}

export default AddTodo