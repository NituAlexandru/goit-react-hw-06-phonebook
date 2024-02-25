React Project: goit-react-hw-06-phonebook

This project is a phonebook application built with React and enhanced with Redux
Toolkit for state management. It provides a user-friendly interface for storing,
viewing, and filtering contact information.

Repository Setup Repository Name: goit-react-hw-06-phonebook

Submission Links:

Privacy: Private Homepage:
https://NituAlexandru.github.io/goit-react-hw-06-phonebook/

The application uses the following dependencies:

-@reduxjs/toolkit for Redux state management. -React and React DOM for building
the UI. -react-redux for integrating Redux with React components. -redux-persist
for persisting the Redux state in localStorage. -Various development tools like
eslint for linting, nanoid for generating unique IDs, and notiflix for
notifications.

Development Scripts: -start: Runs the app in development mode. -build: Builds
the app for production. -test: Runs the test watcher in an interactive mode.
-eject: Removes the single build dependency from your project. -lint:js: Lints
JavaScript and JSX files. Code Organization Each component is stored in a
separate folder containing both the React component file and its associated
style sheet. PropTypes are defined for all components to ensure proper usage of
props. Redux Toolkit Implementation Initial Redux State json Copy code {
"contacts": [], "filter": "" } Configuration Store: Created using
configureStore() from Redux Toolkit. Slice: Utilize createSlice() for creating
slice reducers and actions. Actions: Actions for adding and deleting a contact,
as well as updating the filter, are created automatically by the slice. Redux
Persist The contacts array is persisted in localStorage using Redux Persist to
ensure data persistence across sessions. React-Redux Integration Components are
connected to Redux logic using the react-redux library, enabling the application
to access and modify the Redux state in a React-friendly way. ESLint
Configuration The project adheres to the ESLint configuration specified by
react-app and react-app/jest for consistent coding standards and testing
practices.
