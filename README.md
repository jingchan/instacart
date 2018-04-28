## Instacart Shopper Challenge

# Part 1: Shopper Applicants

### Running the webserver
```
npm i   # Ensure dependencies are installed
npm start   
``` 
Then the page should be visible at http://localhost:3000/


### Tradeoffs and considerations

1. We use `create-razzle-app` to provide an initial scaffold for the project.  We chose `razzle.js` due to being light and simple, which should match this use case.  It also provides Hot Module Reloading (HMR) which allows for quicker feedback loops for the layout, which will make designing easier.

2. We add assets directly to the git repository due to the limited time of this challenge.  In a production setting we would avoid adding large binary data to the repo to prevent bloat.

3. Note: Had random bad disk reads/permissions while working on original (Windows) computer, had to switch over to another computer (Mac) which took some time.

4. Using color #43b02a for CTA to match the color palette of logo

5. Added rest of application form as well as console output.  Some tradeoffs were made for styling to ensure that pressing 'enter' on the information form would result in a 'submit' rather than a 'back'.

# Part 2: Applicant Analysis

```
npm i  # Ensure dependencies are installed
node stats.js 2014-07-14 2014-07-20
```
