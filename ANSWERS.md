1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

PropTypes are used for data validation (only data that you're passing around as props) at the time your component is being built. It's important to check your data becouse JS is a dynamic language and variables are loose (could accomodate any type of data).


2. Describe a life-cycle event in React?

Every time we extend the React Base Class we gain access to React Component Lifecycle. Using methods provided from the React API we can tap into the lifecycle of a component an gain control over when things happen during the component lifecycle (Mounting->Updating->Un-Mounting).


3. Explain the details of a Higher Order Component?

HOC is an advanced React pattern, basiclly it's a component that recieves other component as an argument. HOC are used to share logic and functionality between components. But each component mounted by way of HOC is it's own stateful component.


4. What are three different ways to style components in React? Explain some of the benefits of each.

- we can use inline styling: specificity (if you want to re-write some general style from libraries, but same as with plain HTML it's better not to use it);

- we can import css/less/sass files: usually we have them ready to use when re-writting site in React, good to use for basic styling which applies for the whole styling (reset, all styling for App container or body/html etc.), for someone it will be just easier to use it becase the team is already now how to use it.
- we can use libraries (bootstrap, reactstrap, materialize etc.): it's super fast styling if you're already now how to use this library.

- we can create styled-components: reusability, keep our styling separatly from functionality, code is super clean, easy for debugging.