## arbitrary data endpoint / react test

#### Original Requirements + Comments

-	Deliver an endpoint that will provide the Scatter Plot data in JSON format
    - As data is static it's read/formatted on server start then served by Koa/Node.js.

-	Render a page that will display a Scatter Plot, with all the points that are provided in the CSV file
    - React app using rd3 to render all points. Obvious problems here are inability to navigate/manipulate plot, and no management of displaying too much data (e.g. relevant subset of data should be shown until you zoom in to see enough points.).

-	You can use a third-party component of your choice to draw the Scatter Plot
    - rd3 - I wasted quite a bit of time trying to find a library that would handle zoom/smart data handling but opted for this purely out forcing myself to stop looking.

-	Demonstrate a way to manage state in the ReactJS application
    - Redux + thunk to handle async actions.

-	Provide some tests
    - Jest / Enzyme. The tests here don't demonstrate much as I left them till the end of my allotted time but the next step would involve fleshing them out considerably.

-	Include some build steps to compile the application into a directory
    - Webpack for JS build, differing config for prod/dev. I decided not to bother implementing any loaders for css and just write a few bits in dist/index.css. This is fine for this tiny use case but I still ended up writing / adding more than I expected.

-	Optimise the API request by using caching, etc…
    - Simple cache header set in api controller. If data or formatting could differ in the request memoizing could've been an option. Or real life; API CDN.

-	Use some mechanism to show code quality and standards analysis output
    - Eslint, use with `npm run lint`.
