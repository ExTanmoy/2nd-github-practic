// 1. Wait for the webpage layout to fully load
document.addEventListener("DOMContentLoaded", function() {
    
    // 2. Select the elements we added in the HTML
    const trackingParagraphs = document.querySelectorAll(".tracked-edit");
    const statusBar = document.getElementById("status-bar");
    let editCount = 0;

    trackingParagraphs.forEach((p, index) => {
        editCount++;
        
        // Add interaction: flash when clicked!
        p.style.cursor = "pointer";
        p.title = "Click me!";
        
        p.addEventListener("click", function() {
            this.style.backgroundColor = "#bfffbf"; // Turns green momentarily
            alert(`You clicked edit trace #${index + 1}: "${this.textContent}"`);
            
            // Automatically reset the background color after a short delay
            setTimeout(() => {
                this.style.backgroundColor = ""; 
            }, 500);
        });
    });

    // 3. Update the UI status bar to prove JS is working
    if (statusBar) {
        statusBar.textContent = `✨ JS is active! Found ${editCount} manual edits. Click the yellow boxes below!`;
    }

    // 4. Log a little achievement message to browser console (F12 inspect)
    console.log(`✨ GitHub Practice Page Loaded! Found ${editCount} manual edits tracked.`);
});