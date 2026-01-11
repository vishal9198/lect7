import { atom, atomFamily, selector } from "recoil";
import { TODOS } from "../../todos";
export const todosFamily = atomFamily({
  key: "todoAtomFamily",
  default: function (id) {
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        return TODOS[i];
      }
    }
  },
});
