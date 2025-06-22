export async function fetchImage(query: string): Promise<string> {
  try {
    // Try Unsplash first
    const unsplashRes = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
        query
      )}`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_API_KEY}`,
        },
      }
    );
    const unsplashData = await unsplashRes.json();
    if (unsplashData?.urls?.regular) {
      return unsplashData.urls.regular;
    }
    throw new Error("Unsplash failed");
  } catch (err) {
    // Fallback to Pixabay
    try {
      const pixabayRes = await fetch(
        `https://pixabay.com/api/?key=${
          import.meta.env.VITE_PIXABAY_API_KEY
        }&q=${encodeURIComponent(query)}&image_type=photo`
      );
      const pixabayData = await pixabayRes.json();
      if (pixabayData?.hits?.length) {
        return pixabayData.hits[0].webformatURL;
      }
    } catch (pixabayErr) {
      console.error("Pixabay fallback failed:", pixabayErr);
    }
    // Final fallback
    return "https://via.placeholder.com/400x200?text=No+Image";
  }
}
