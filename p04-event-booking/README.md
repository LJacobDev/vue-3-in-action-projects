# p04-event-booking

An application made to resemble an event booking process, with the intention of demonstrating various Vue concepts.

Section 5 of the video course uses this to explain components, props, events, fallthrough attributes, slots, named slots, conditional slots, and component variants.

Section 6 of the video course uses this application to explain json-server, the fetch API, making a loading state placeholder, getting and posting information with json-server and its db.json file as a mock back end.

Section 7 of the video course explains 'Optimistic UI', where there should be feedback that always lets the user know what is happening, rather than expecting them to wait on UI that stays static while a server interaction is underway.  This changes the booking process to show an immediate 'pending' status for each booking item, which then changes to 'confirmed' when the fetch() call to POST it to the server has an OK response.  If there is an error, the user is alerted, and the booking changes from pending to being removed from the list of bookings altogether.

Also, a booking can now only be made once, and if it is attempted to rebook something that has already been registered, it will notify the user that is is already booked and will not continue with the additional registration.

Section 7 continues to show how to use media queries in tailwind css to promote responsive design, breaks the App.vue into smaller subcomponents, and demonstrates how to use the lucide svg icon library to help apply visual indicators that bookings are pending or confirmed.

Section 8 demonstrates the use of composables in order to share state and functions between components, which also eliminates the need to propagate the many event emits throughout the components that were previously needed to carry out an event registration in response to clicking the register button.

An ErrorCard reusable component is made in order to give the BookingsList component the ability to show a message if something goes wrong with fetching bookings just like EventList does, and changes the retry button to be given a prop that defines a function to run depending on which context the retry button appears.  Now the user has more feedback about if something has gone wrong, and has ways to recover from it.


To run this, have both Vite dev server and json-server running.  Access the port that Vite is running on with your web browser, and the Vue application will communicate with json-server for event and bookings storage and retrieval.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run json-server for a mock back end API that stores event and booking data

```sh
npm run server
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
