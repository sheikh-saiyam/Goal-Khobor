export async function authenticateUser(credentials) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/authenticateUser`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Authentication failed");
    }

    return data.user;
  } catch (error) {
    throw new Error(error.message || "Authentication failed");
  }
}
