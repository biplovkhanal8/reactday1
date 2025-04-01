// Export all necessary users details
export const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    isActive: true,
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    isActive: false,
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    email: 'bob@example.com',
    isActive: true,
  },
  {
    id: 4,
    firstName: 'Sara',
    lastName: 'Williams',
    email: 'sara@example.com',
    isActive: true,
  },
];

export const sampleUser = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  isActive: true,
  role: 'Admin',
};

// Test functionality
const logUsers = () => {
  users.forEach(user => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const status = user.isActive ? 'Active' : 'Inactive';
    console.group(`User: ${fullName}`);
    console.log(`ID: ${user.id}`);
    console.log(`Email: ${user.email}`);
    console.log(`Status: ${status}`);
    console.groupEnd();
  });
};

// Run test on module import
logUsers();
