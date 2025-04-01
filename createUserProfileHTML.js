// Function 3: User Component Generator
export function createUserProfileHTML(user) {
  // Log component creation with user info
  console.dir({
    componentType: 'UserProfile',
    userId: user.id,
    username: `${user.firstName} ${user.lastName}`
  });
  
  const activeBadge = user.isActive
    ? '<span class="badge active">Active</span>'
    : '';

  return `
    <div class="user-card" id="user-${user.id}">
      <img src="${user.avatar}" alt="${user.firstName} ${user.lastName}" class="avatar" />
      <div class="user-info">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Email: ${user.email}</p>
        <p>Role: ${user.role}</p>
        ${activeBadge}
      </div>
    </div>
  `;
}
