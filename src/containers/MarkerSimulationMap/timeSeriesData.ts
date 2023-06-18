export type timeSeriesDataType = Array<{
	lat: number;
	lng: number;
	timestamp: number;
}>

export const timeSeriesData: timeSeriesDataType = [
	{ lat: 19.07609, lng: 72.877426, timestamp: 1641043200 }, // Mumbai, India
	{ lat: 28.70406, lng: 77.102493, timestamp: 1641046800 }, // Delhi, India
	{ lat: 13.08268, lng: 80.270721, timestamp: 1641050400 }, // Chennai, India
	{ lat: 17.385044, lng: 78.486671, timestamp: 1641054000 }, // Hyderabad, India
	{ lat: 12.971599, lng: 77.594566, timestamp: 1641057600 }, // Bangalore, India
	{ lat: 22.572645, lng: 88.363892, timestamp: 1641061200 }, // Kolkata, India
	{ lat: 23.259933, lng: 77.412613, timestamp: 1641064800 }, // Bhopal, India
	{ lat: 26.846709, lng: 80.946159, timestamp: 1641068400 }, // Lucknow, India
	{ lat: 28.613939, lng: 77.209023, timestamp: 1641072000 }, // Noida, India
	// { lat: 25.204849, lng: 55.270782, timestamp: 1641075600 }, // Dubai, UAE
	// { lat: 51.507351, lng: -0.127758, timestamp: 1641079200 }, // London, UK
	// { lat: 40.712776, lng: -74.005974, timestamp: 1641082800 }, // New York, USA
	// { lat: 37.774929, lng: -122.419418, timestamp: 1641086400 }, // San Francisco, USA
	// { lat: -33.865143, lng: 151.2099, timestamp: 1641090000 }, // Sydney, Australia
	// { lat: -34.603722, lng: -58.381592, timestamp: 1641093600 }, // Buenos Aires, Argentina
	// { lat: 43.653225, lng: -79.383186, timestamp: 1641097200 }, // Toronto, Canada
	// { lat: 55.755825, lng: 37.617298, timestamp: 1641100800 }, // Moscow, Russia
	// { lat: 35.689487, lng: 139.691711, timestamp: 1641104400 }, // Tokyo, Japan
	// { lat: 48.856613, lng: 2.352222, timestamp: 1641108000 }, // Paris, France
	// { lat: 41.902782, lng: 12.496366, timestamp: 1641111600 }, // Rome, Italy
];
