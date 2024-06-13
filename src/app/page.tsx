import AddTodo from "@/components/AddTodo";
import TodoList from "../components/TodoList";
export default function Home() {
  return (
   <main className="bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center">
    <div className="px-3 py-4 bg-white/50 rounded-xl w-full max-w-md">
      <TodoList />
      <AddTodo />

    <div className="w-1/2 h-1.5 bg-black/80 rounded mx-auto mt-6"></div>
    </div>

   </main>
  );
}
