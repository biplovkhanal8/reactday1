// Function 1: Data Transformation
export function processUserData(users) {
  // Log the transformation process using performance API
  performance.mark('processStart');
  
  const result = users
    .filter((user) => user.isActive)
    .map((user) => ({
      id: user.id,
      fullName: `${user.firstName} ${user.lastName}`,
      email: user.email,
    }))
    .sort((a, b) => a.fullName.localeCompare(b.fullName));
  
  performance.mark('processEnd');
  performance.measure('Process Duration', 'processStart', 'processEnd');
  
  // Use a table to display processed users
  console.table(result, ['id', 'fullName', 'email']);
  
  return result;
}
