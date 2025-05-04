const overpassUrl = "https://overpass-api.de/api/interpreter";
//47.48586859638348, 19.076136843961468
const query = `
[out:json];
node
  ["amenity"="restaurant"]
  (around:200, 47.48586859638348, 19.076136843961468);
out;
`;

fetch(overpassUrl, {
  method: "POST",
  body: query
})
  .then(response => response.json())
  .then(data => {
    console.log("Restaurants Nearby:", data.elements);
    data.elements.forEach(place => {
      console.log(`📍 ${place.tags.name || "Unnamed"} at (${place.lat}, ${place.lon})`);
    });
  })
  .catch(error => console.error("Error fetching Overpass data:", error));