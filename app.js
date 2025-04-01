import { processUserData } from './processUserData.js';
import { fetchUserPosts } from './fetchUserPosts.js';
import { createUserProfileHTML } from './createUserProfileHTML.js';
import { createStateManager } from './createStateManager.js';
import { users, sampleUser } from './userProfile.js';

// Display processed users
const processedUsers = processUserData(users);
const processedUsersTable = document.getElementById('processed-users');
processedUsers.forEach((user) => {
  const row = document.createElement('tr');
  row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.fullName}</td>
                <td>${user.email}</td>
            `;
  processedUsersTable.appendChild(row);
});

// Display user posts
const userPostsList = document.getElementById('user-posts');
fetchUserPosts(1).then((titles) => {
  titles.forEach((title) => {
    const li = document.createElement('li');
    li.textContent = title;
    userPostsList.appendChild(li);
  });
});

// Display user profile
document.getElementById('user-profile').innerHTML =
  createUserProfileHTML(sampleUser);

// State management processes
const initialStateElement = document.getElementById('initial-state');
const currentStateElement = document.getElementById('current-state');

const userState = createStateManager({ name: 'John', online: false });
initialStateElement.textContent = JSON.stringify(userState.getState(), null, 2);
currentStateElement.textContent = JSON.stringify(userState.getState(), null, 2);

userState.subscribe((state) => {
  currentStateElement.textContent = JSON.stringify(state, null, 2);
});

// Simulate state changes
setTimeout(() => userState.setState({ online: true }), 1000);
setTimeout(() => userState.setState({ lastActive: '2023-05-01' }), 2000);

// Console output
const consoleOutput = document.getElementById('console-output');
function logToScreen(message) {
  const timestamp = new Date().toLocaleTimeString();
  consoleOutput.textContent += `[${timestamp}] ${message}\n`;
}

logToScreen('📊 User Data Processed: ' + processedUsers.length + ' active users');
fetchUserPosts(1)
  .then((titles) => logToScreen('📝 Post Titles Retrieved: ' + titles.length))
  .catch((error) => logToScreen('❌ Error: Failed to fetch posts'));
logToScreen('🧑 User Profile Generated for: ' + sampleUser.firstName + ' ' + sampleUser.lastName);
logToScreen('⚙️ State Manager Initialized');
userState.subscribe((state) => {
  const changes = Object.keys(state).join(', ');
  logToScreen(`🔄 State Updated: ${changes}`);
});
