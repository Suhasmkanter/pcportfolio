// Example: Fetch images from Pexels using their API
const API_KEY = "bJT0U4PIJxV1tSAtBR8r00k0Kf3fN1aGqviV590iuxOWRRMFNi639o7Z";

async function getImages(query) {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=5`, {
        headers: {
            Authorization: API_KEY,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch from Pexels");
    }

    const data = await response.json();
    console.log(data.photos.map(photo => photo.src.original)); // log image URLs
}

getImages("nature"); // try with "city", "cats", etc.
