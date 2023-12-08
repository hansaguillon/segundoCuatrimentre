export function getItems()
{
    const itemsFronStorage = JSON.parse(window.localStorage.getItem("todo-list"));
    return itemsFronStorage || [];
}