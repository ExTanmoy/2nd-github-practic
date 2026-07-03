<script>
    // 1. Wait for the webpage layout to fully load
    document.addEventListener("DOMContentLoaded", function() {
        
        // 2. Select your modification paragraphs using their text content
        const paragraphs = document.querySelectorAll("p");
        let editCount = 0;

        paragraphs.forEach(p => {
            // Check if the paragraph text contains our tracking words
            if (p.textContent.toLowerCase().includes("modify") || p.textContent.toLowerCase().includes("again")) {
                editCount++;
                
                // Add a little interaction: flash when clicked!
                p.style.cursor = "pointer";
                p.addEventListener("click", function() {
                    this.style.backgroundColor = "#bfffbf"; // Turns green momentarily
                    alert(`You clicked edit trace #${editCount}: "${this.textContent}"`);
                    this.style.backgroundColor = "#fff3cd"; // Resets to CSS yellow
                });
            }
        });

        // 3. Log a little achievement message to your browser console (F12 inspect)
        console.log(`✨ GitHub Practice Page Loaded! Found ${editCount} manual edits tracked.`);
    });
</script>