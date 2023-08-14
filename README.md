# Universal Plastic Front End Test
The web app will be developed using React and the use of tailwind will be appreciated. We also encourage you to use the components that you can find here ( Shadcn/ui components ).

The app will have two screens:
 - Area selector
 - Weather City

![image](https://github.com/CristiianGB/Test-Frontend-Universal-Plastic/assets/107640313/73dc8ef2-892d-46c7-9992-8581c7ab2379)

( The styles have been respected but I have given my personal touch by changing the color palette to have fun while developing 😊). 

In the Area selector we are using the components:
  - Location
  - Area
  - Map
    
( The map has been developed using the leaflet.js library.🌿 URL:https://leafletjs.com/ ).

and in the Weather city element we use:
 - City
 - Weather Info
( to get the weather information we use the openweathermap API. 🌐 URL:https://openweathermap.org/ ).

The City component shows the name of a city and sets the corresponding latitude and longitude using the following array:

![image](https://github.com/CristiianGB/Test-Frontend-Universal-Plastic/assets/107640313/b0ea2236-5548-4678-a34a-3d84884e15a1)

And the API provides an object with the next structure:

  ![image](https://github.com/CristiianGB/Test-Frontend-Universal-Plastic/assets/107640313/e16f7d28-ad18-4234-affb-8e97ccfe1ef8)

After all that was done, there were only the last details like the Navbar, bug fixes, and some little extras ✔️.

Hope you like it, I had fun doing it!😁

# To Build Project

- npm install
- npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
