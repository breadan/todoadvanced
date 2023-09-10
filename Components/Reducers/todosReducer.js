import { v4 as uuidv4 } from "uuid"; //uniq id

export default function reducer(currentTodos, action) {
  switch (action.type) {
    case "added": {
      const newToDo = {
        id: uuidv4(),
        title: action.payload.newTitle,
        description: action.payload.newDescription,
        isCompleted: false,
      };

      const updatedTodos = [...currentTodos, newToDo];

      //To save to storage    (2)
      localStorage.setItem("todos", JSON.stringify(updatedTodos));

      return updatedTodos;
    }

    case "deleted": {
      const updateTodos = currentTodos.filter((t) => {
     
        return t.id != action.payload.id;
      });
      //To save to storage (5)
      localStorage.setItem("todos", JSON.stringify(updateTodos));
      return updateTodos;
    }

    default: {
      throw Error("Unknown Action" + action.type);
    }
  }
  return [];
}
