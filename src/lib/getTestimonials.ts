const getTestimonials = async () => {
  try {
    const res = await fetch(`https://dummyjson.com/users?limit=8`, {
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
