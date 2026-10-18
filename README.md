# Homework 5 - Simple Product Dashboard

A small React application built with Vite to practice components, props, state, events, list rendering and composition.
## How to run

npm install
npm run dev

## File Organization

- 'src/main.jsx' - Entry point. Renders the 'App' component into the page.
- 'src/App.jsx' - Root component. Holds the 'showProducts' and 'name' state, renders the heading the controlled name input, the greeting, the toggle button, and shows 'ProductList' only when 'showProducts' is true.
- 'src/components/ProductList.jsx' - Defines the static product array abd renders one 'Product' per item using '.map()', with 'id' as the key.
- 'src/components/Product.jsx' - Reusable, stateless component that displays a product's title and price using props, wrapped in 'Card'.
- 'src/components/Card.jsx' - Layout component that renders any 'children' inside a styled box (border,padding,margin).

##Challenges

- After removing the default Vite files, 'main.jsx' still imported the deleted 'index.css' , which caused an import error. I fixed it by remoiving that import.
- My files were not saved in Vs code , so the browser was running old code. I learned to save my files and turned on Auto save.
- I got a blank page because I wrote '<div> style ={{...}}' instead of '<div style={{...}}>', and I used 'setProducts' instead of 'showProducts' in the button text.I fixed both after checking the code.
- Understanding the difference between props and state, and making the input a controlled input.
