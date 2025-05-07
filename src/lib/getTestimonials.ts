const getTestimonials = async () => {
  try {
    const baseUrl = process.env.API_URL;
    const res = await fetch(`${baseUrl}/users?limit=8`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error("Error fetching:", error);
    return [];
  }
};

export default getTestimonials;
