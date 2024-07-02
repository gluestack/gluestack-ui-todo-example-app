import React from "react";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { CheckIcon, CloseIcon, Icon } from "@/components/ui/icon";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
} from "@/components/ui/checkbox";

export interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const TodoContainer = ({
  todo,
  toggleTodo,
  deleteTodo,
  ...props
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}) => {
  return (
    <HStack
      {...props}
      className="px-6 py-2 hover:bg-secondary-100 rounded-md justify-between items-center"
    >
      <Pressable onPress={() => toggleTodo(todo.id)}>
        <HStack className="gap-2">
          <Checkbox
            size="sm"
            aria-label={todo.task}
            isChecked={todo.completed}
            value={todo.task}
          >
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
          </Checkbox>
          <Text
            className={`text-sm ${todo.completed ? "line-through" : "no-underline"}`}
          >
            {todo.task}
          </Text>
        </HStack>
      </Pressable>
      <Pressable onPress={() => deleteTodo(todo.id)}>
        <Icon
          as={CloseIcon}
          className="h-3 w-3 color-primary-50 hover:color-red-400"
        />
      </Pressable>
    </HStack>
  );
};

export default TodoContainer;
