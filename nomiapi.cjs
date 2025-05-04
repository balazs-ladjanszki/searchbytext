const nominatimUrl = "https://nominatim.openstreetmap.org/search";

async function searchPlaces(keyword, lat, lon, radius = 1000) {
  const params = new URLSearchParams({
    format: "json",
    q: keyword, // Search term like "restaurant", "cafe"
    lat: lat, // Latitude
    lon: lon, // Longitude
    radius: radius, // Search radius (in meters) - Not officially supported
  });

  try {
    const response = await fetch(`${nominatimUrl}?${params.toString()}`);
    const data = await response.json();
    
    console.log(`📍 ${keyword}s Nearby:`, data);
    data.forEach(place => {
      console.log(`📌 ${place.display_name} at (${place.lat}, ${place.lon})`);
    });
  } catch (error) {
    console.error("Error fetching Nominatim data:", error);
  }
}

// Example: Search for "restaurant" near Eiffel Tower
searchPlaces("cafe", 47.48586859638348, 19.076136843961468);