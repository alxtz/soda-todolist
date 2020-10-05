# Screenshots

## ![](https://i.imgur.com/9Niq80f.png)

## ![](https://i.imgur.com/j8T7hll.png)

## ![](https://i.imgur.com/GFA0mTq.png)

![](https://i.imgur.com/cwvIEgx.png)

# How to Start the project

1. there are 2 yarn projects in this repo, go inside `packages/todolist-server` and `packages/todolist-web` and both run `yarn install` + `yarn dev`
2. **[Important]** Note that `packages/todolist-server` depends on a Postgres DB with a db with name `todolist_db` running, initially I planned to have a docker image for it, but there was too little time left(so if you want to test, you'll need to create that DB `todolist_db` manually, typeorm would automatically run the migrations once started)

# Frontend Specs

- [x] Able to have a input box to create a todo item
- [x] In the input box, should be able to give is_favorite, content, is_complete
- [x] Should be able to click add and create an item, then the input box would be cleared
- [x] Should be able to reload the entire app whenever first visited or call any api
- [x] Should be able to view the is_complete, is_favorite, content, comments of already created todo items
- [x] Should be able to delete todo
- [x] Should be able to edit the is_complete, is_favorite of already created todo items
- [x] Able to have my tasks as the default view mode
- [ ] Should be able to delete comment
- [ ] Should be able to switch to in progress and completed view modes

# Backend Spec

- [x] POST /create_item
      ![](https://i.imgur.com/4mi6YW8.png)
- [x] GET /items
      ![](https://i.imgur.com/gVFlwlp.png)
- [x] POST /set_complete_status (complete/uncomplete)
      ![](https://i.imgur.com/8UUZOFF.png)
- [x] POST /set_favorite_status (true/false)
      ![](https://i.imgur.com/GzhlEjN.png)
- [x] POST /edit_item
      ![](https://i.imgur.com/vzza37p.png)
- [x] POST /create_comment
      ![](https://i.imgur.com/RpIPa2e.png)
- [x] DELETE /item
      ![](https://i.imgur.com/xaPOY62.png)
- [x] DELETE /comment
      ![](https://i.imgur.com/r7hV1sT.png)

# Implementation

- For the `todolist-server`, I'm trying to implment a small API service that's built upon a postgres DB + TypeORM, with all the API endpoints been implemented in `packages/todolist-server/src/api.ts`
- TypeORM is just like any other ORM libs, which provides model generating, migration supports and have the ability to define entities as JS objects with TS types built in
- In the development mode, I'm opening up the `synchronize: true` option to make the migration run everytime when the server starts, but in production mode we should be running those separately
  ![](https://i.imgur.com/W8c0TwG.png)
- Diagram for the Comment and Todo table
  ![](https://i.imgur.com/xhDfIEz.png)
- For the frontend part, I'm using ejected create-react-app with TypeScript and ESLint setup, so that the backend type definitions are more easily ported
- Also using redux as a global state management tool + emotion for CSS-IN-JS styling
