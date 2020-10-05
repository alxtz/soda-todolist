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

- [x] POST /create_item (create a new todo item, can also set the initial is_favorite and is_complete status)
      ![](https://i.imgur.com/4mi6YW8.png)
- [x] GET /items (query for all the todo items)
      ![](https://i.imgur.com/gVFlwlp.png)
- [x] POST /set_complete_status (set the complete/uncomplete status for a given todo item)
      ![](https://i.imgur.com/8UUZOFF.png)
- [x] POST /set_favorite_status (set the fav/unfav status for a given todo item)
      ![](https://i.imgur.com/GzhlEjN.png)
- [x] POST /edit_item (edit the text content for a given todo item)
      ![](https://i.imgur.com/vzza37p.png)
- [x] POST /create_comment (create a comment under a given todo item)
      ![](https://i.imgur.com/RpIPa2e.png)
- [x] DELETE /item (delete a todo item, would also cascade delete all the related comments)
      ![](https://i.imgur.com/xaPOY62.png)
- [x] DELETE /comment (delete a comment)
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

# TODOs
1. Tab filtering feature (FE)
2. Edit a todo item (integrate /edit_item in FE)
3. Attach file to an item (might need to use another storage service like aws s3, and implement access control)
4. Add deadline to an item (FE + BE)
5. Consider how to more easily test and deploy this project, the node.js server & react spa should be able to wrap inside a alpine docker image, while having postgresql run on another image (in development, use with docker-compose), while on production use cloud services for the actual db
