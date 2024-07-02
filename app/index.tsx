import React, { useState } from "react";
import { VStack } from "@/components/ui/vstack";
import { FormControl } from "@/components/ui/form-control";
import { Input, InputField, InputIcon } from "@/components/ui/input";
import { AddIcon } from "@/components/ui/icon";
import { defaultTodos } from "@/constants/todo";
import TodoContainer, { Todo } from "@/components/app-components/TodoContainer";
import shortid from "shortid";

const Home = () => {
  const [item, setItem] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const addTodo = (task: string) => {
    const lastTodo = todos[todos.length - 1];

    if (lastTodo.task !== "") {
      setTodos([
        ...todos,
        {
          id: Number(shortid.generate()),
          task: task,
          completed: false,
        },
      ]);
      setItem("");
    }
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <VStack className="flex-1 bg-secondary-100 lg:bg-secondary-0 ">
      <VStack className="pt-6 pb-10 lg:my-24 lg:mx-32 rounded-md bg-secondary-100">
        <FormControl>
          <Input variant="underlined" size="md" className={`mx-6 my-2`}>
            <InputField
              placeholder="What do to?"
              value={item}
              onChangeText={(value) => setItem(value)}
              onSubmitEditing={() => addTodo(item)}
            />
            <InputIcon as={AddIcon} className="cursor-pointer h-3 w-3" />
          </Input>
        </FormControl>
        {todos.map((todo: Todo, index: number) => (
          <TodoContainer
            key={index}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </VStack>
    </VStack>
  );
};

export default Home;
