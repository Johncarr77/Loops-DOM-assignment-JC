      
        // 1. For loop
        function runLoops() {
            for (let i = 1; i <= 5; i++) {
                console.log(`This is iteration ${i} of the for loop.`);
            }

            let count = 0;
            while (count < 3) {
                console.log(`This is iteration ${count} of the while loop.`);
                count++;
            }
        }

        // 2. Change CSS with JavaScript
        function changeBackgroundColor() {
    const container = document.querySelector('.container');
    container.style.backgroundColor = getRandomColor();
}

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // 3. Change CSS based upon a variable value
        let fontSizeIncreased = false;

        function toggleFontSize() {
            const body = document.body;
            if (!fontSizeIncreased) {
                body.style.fontSize = '20px';
            } else {
                body.style.fontSize = '16px';
            }
            fontSizeIncreased = !fontSizeIncreased;
        }