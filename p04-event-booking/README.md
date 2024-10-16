# p04-event-booking

An application made to resemble an event booking process, with the intention of demonstrating various Vue concepts.

Section 5 of the video course uses this to explain components, props, events, fallthrough attributes, slots, named slots, conditional slots, and component variants.

Section 6 of the video course uses this application to explain json-server, the fetch API, making a loading state placeholder, getting and posting information with json-server and its db.json file as a mock back end.

Section 7 of the video course explains 'Optimistic UI', where there should be feedback that always lets the user know what is happening, rather than expecting them to wait on UI that stays static while a server interaction is underway.  This changes the booking process to show an immediate 'pending' status for each booking item, which then changes to 'confirmed' when the fetch() call to POST it to the server has an OK response.  If there is an error, the user is alerted, and the booking changes from pending to being removed from the list of bookings altogether.

Also, a booking can now only be made once, and if it is attempted to rebook something that has already been registered, it will notify the user that is is already booked and will not continue with the additional registration.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run json-server for a mock API

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
