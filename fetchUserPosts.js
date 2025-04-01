// Function 2: Async Data Fetching
export async function fetchUserPosts(userId) {
  try {
    // Log fetch request with timestamp
    const timestamp = new Date().toISOString();
    console.info(`[${timestamp}] Fetching posts for user ID: ${userId}`);
    
    const apiUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    console.debug(`Request URL: ${apiUrl}`);
    
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    const titles = posts.map((post) => post.title);
    
    // Log success with different styling
    console.log(
      `%cSuccessfully fetched ${titles.length} posts`,
      'color: green; font-weight: bold;'
    );
    
    return titles;
  } catch (error) {
    console.warn('Error fetching posts:', error);
    throw error;
  }
}
