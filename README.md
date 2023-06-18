# Google Maps Marker Simulation

This project is a Marker Simulation web application built using React and Google Maps API. It allows you to upload time
series data in JSON format and visualize the marker's path on a Google Map.

## Getting Started

1. Clone the repository to your local machine
   using `git clone https://github.com/mohitsaladiya/google-maps-marker-simulation`.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Create a `.env` file in the project root folder and add the `GOOGLE_MAPS_API_KEY` variable with your Google Maps API
   key. This key is required to use the Google Maps API.

```plaintext
GOOGLE_MAPS_API_KEY=your_api_key
```

## Usage

To use this application, you need to upload time series data in JSON format. The data should have a specific format, as
shown in the example below:

```json
[
    {
        "lat": 18.5204,
        "lng": 73.8567,
        "timeStamp": 1640480400
    },
    {
        "lat": 18.5205,
        "lng": 73.8568,
        "timeStamp": 1640480460
    },
    {
        "lat": 18.5206,
        "lng": 73.8569,
        "timeStamp": 1640480520
    },
    {
        "lat": 18.5207,
        "lng": 73.857,
        "timeStamp": 1640480580
    },
    {
        "lat": 18.5208,
        "lng": 73.8571,
        "timeStamp": 1640480640
    }
]
```

To upload the data, simply click on the 'Add Markers' button and select the JSON file from your computer. Once the data
is uploaded, you will see the marker's path on the map.

## Vite and TypeScript

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses TypeScript.

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### `yarn lint`

Lints the project files using ESLint.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://vitejs.dev/guide/tests.html) for more information.

### `yarn preview`

Builds and serves the app in preview mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

### `yarn start`

Alias for `yarn dev`.

## Testing with Jest

This project includes unit tests using Jest.

### `yarn test`

Launches the test runner and runs all tests.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/) and [React documentation](https://reactjs.org/).

To learn TypeScript, check out the [TypeScript documentation](https://www.typescriptlang.org/).

For testing with Jest, refer to the [Jest documentation](https://jestjs.io/).
