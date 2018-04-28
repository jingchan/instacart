## Instacart Shopper Challenge

# Part 1: Shopper Applicants

### Running the webserver
```
npm i
npm start
``` 
Then the page should be visible at http://localhost:3000/


### Tradeoffs and considerations

1. We use `create-razzle-app` to provide an initial scaffold for the project.  We chose `razzle.js` due to being light and simple, which should match this use case.  It also provides Hot Module Reloading (HMR) which allows for quicker feedback loops for the layout, which will make designing easier.

2. We add assets directly to the git repository due to the limited time of this challenge.  In a production setting we would avoid adding large binary data to the repo to prevent bloat.

