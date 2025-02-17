## Front-end Code Challenge - Cocktail Wiki

This nextjs app is a simple web application to show cocktails from thecocktaildb.com

### Installing & Running the app
System Requirements : Please refer to this page https://nextjs.org/docs/app/getting-started/installation#system-requirements 

After you download the code to your computer, install dependancies with following command
```bash
npm install
# or
yarn install
```  

To run the project in development mode   
```bash
npm run dev
# or
yarn dev
```  
To run tests in the project
```bash
npm run test
# or
yarn test
```    

## About the project

### 3rd Party libraries, tools used

**Tailwind & DaisyUI used for frontend styling and UI**
https://tailwindcss.com/
https://daisyui.com/components/

**For testing** 
Jest testing framework and React testing library used. 

**Icons**
Icons used from google material icon library and a custom Icon component has been implemented using an SVG icon sprite. 
https://fonts.google.com/icons

**Logo**
Adobe illustrator was used to design a Simple logo and favicon for the project and https://favicon.io used to generate the favicon files. 

### Features
**Navigation**
A responsive navigation has been implemented with brand logo and link to favourites page and search form. On mobile, the navigation links are shown as icons where favourite icon linked to the favourites page and search icon will display the search form. 

**Footer**   
Simple footer used for the application. 

#### Random Cocktails Component
This is in the homepage and it will load 5 random cocktails to the page when the page loads and the refresh button will load a fresh set of random cocktails. The component has been written in a way the count (5) can be customised. Each cocktail will show the image, category and name

#### Search page
This page will handle the search functionality and it will give results based on a query for cocktail names. 

### Other Features

 - Fully responsive
 - Dark mode/Light mode based on device mode ( automatic )