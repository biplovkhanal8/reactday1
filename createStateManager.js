// Function 4: State Management Helper
export function createStateManager(initialState) {
  let state = { ...initialState };
  const subscribers = [];
  
  // Track state changes in development
  const stateHistory = [{ ...initialState, timestamp: Date.now() }];
  
  // Log state creation with custom formatting
  console.log(
    '%cState Manager Initialized', 
    'background: #333; color: #bada55; padding: 2px 5px; border-radius: 2px;',
    initialState
  );

  return {
    // The getState() method
    getState: () => ({ ...state }),

    // The setState() method
    setState: (newState) => {
      const prevState = { ...state };
      state = { ...state, ...newState };
      
      // Track state history
      stateHistory.push({ 
        ...state, 
        timestamp: Date.now(),
        changedKeys: Object.keys(newState)
      });
      
      // Log state transition
      console.log('🔄 State Transition:', {
        previous: prevState,
        changes: newState,
        current: state
      });
      
      subscribers.forEach((callback) => callback(state));
    },

    // The subscribe callback function(method)
    subscribe: (callback) => {
      subscribers.push(callback);
      console.log(`📮 New subscriber added. Total subscribers: ${subscribers.length}`);
      
      // Return unsubscribe function
      return () => {
        const index = subscribers.indexOf(callback);
        if (index !== -1) {
          subscribers.splice(index, 1);
          console.log(`🗑️ Subscriber removed. Remaining subscribers: ${subscribers.length}`);
        }
      };
    },
    
    // Debug method to inspect state history
    __DEBUG_getHistory: () => [...stateHistory]
  };
}
