//your JS code here. If required.
const ALL_SQUARES = ['square1', 'square2', 'square3']; // Store IDs instead of NodeList
        const DEFAULT_COLOR = '#E6E6FA'; // Lavender
        const FOCUS_COLOR = '#6F4E37';   // Coffee

        /**
         * Resets all squares to the default (Lavender) color.
         */
        function resetColors() {
            ALL_SQUARES.forEach(id => {
                document.getElementById(id).style.backgroundColor = DEFAULT_COLOR;
            });
        }

        /**
         * Handles the mouseover event: explicitly sets the color of the other two squares.
         * This approach avoids querying all elements every time.
         * @param {string} activeId The ID of the square currently under the cursor.
         */
        function handleMouseOver(activeId) {
            // Find the IDs of the squares that should change color (the 'rest')
            const restIds = ALL_SQUARES.filter(id => id !== activeId);

            // Change the color of the rest
            restIds.forEach(id => {
                document.getElementById(id).style.backgroundColor = FOCUS_COLOR;
            });
            
            // The active square (activeId) is left unchanged, keeping its Lavender color.
        }

        // --- Event Listener Setup ---
        
        // Loop through the stored IDs and attach the listeners
        ALL_SQUARES.forEach(id => {
            const square = document.getElementById(id);

            // 1. Mouse Over (Focus event)
            square.addEventListener('mouseover', () => {
                handleMouseOver(id);
            });

            // 2. Mouse Out (Reset event)
            square.addEventListener('mouseout', resetColors);
        });

        // Initialize colors when the page loads
        resetColors();
