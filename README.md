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
- [x] GET /items
- [x] POST /set_complete_status (complete/uncomplete)
- [x] POST /set_favorite_status (true/false)
- [x] POST /edit_item
- [x] POST /create_comment
- [x] DELETE /item
- [x] DELETE /comment

# Implementation

- [ ] Use docker & docker-compose to start up the entire stack
- React
- Node.js
