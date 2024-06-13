import { Todo } from "@/lib/drizzle";

const getData = async () => {

    try {
        const res = await fetch(process.env.URL + "/api/todo", {
            method: "GET",
            cache: 'no-store',
            headers: {
                "Content-Type": "application/json"
            }
        },);
        if (!res.ok) {
            throw new Error("Failed to fetch data!")
        }
        const result = await res.json()
        return result
    } catch (error) {
        console.log(error)
    }
}

    

const TodoList = async () => {

    const res: { data: Todo[] } = await getData();
    console.log(res)
    return (
        <div className="h-[400px] max-h-[400px] overflow-auto mb-4 scrollbar-thumb-primary  scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded-full">
            {res.data.map((items) => {
                return (
                    <div className="bg-gray-100 py-4 px-4 flex items-center rounded-lg gap-x-3 my-3">
                        <div className="h-3 w-3 bg-secondary rounded-full"></div>
                        <p className="text-lg font-medium">{items.task}</p>
                    </div>)
            })}

        </div>
    )
}

export default TodoList