import { API_URL } from "../constants";

export function getTodos() {
  return fetch(API_URL).then((res) => res.json());
}

export function createTodo(item) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function updateTodo(item) {
  return fetch(API_URL + "/" + item.id, {
    method: "PUT",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function deleteTodo(id) {
  return fetch(API_URL + "/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
