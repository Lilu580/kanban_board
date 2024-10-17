# Kanban Task Manager

Kanban Task Manager — це веб-додаток, який дозволяє користувачам створювати, організовувати та відстежувати завдання за допомогою методології Kanban. Додаток дозволяє користувачам переміщати завдання між різними статусами, такими як "Відкрито", "В процесі" та "Завершено".

## Особливості

- Створення нових завдань з заголовком, описом, відповідальним та терміном виконання.
- Динамічне переміщення завдань між статусами за допомогою drag-and-drop.
- Статистика завдань за статусами

## Технології

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Бібліотеки**: react-beautiful-dnd для drag-and-drop функціональності, Axios для HTTP запитів

## Установка


```bash
git clone https://github.com/lilu580/kanban-task-manager.git
cd kanban-task-manager
npm install
node server.js
npm run dev