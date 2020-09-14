(() => {
    function eyeRolling(e) {
        e.preventDefault();
        const { clientX, clientY } = e;
        const eyes = Array.prototype.slice.call(document.getElementsByClassName("eye"));
        eyes.forEach(eye => {
            // get position of eye
            const { x, y, width, height } = eye.getBoundingClientRect();
            // get center position of eye
            const eyeCenter = { x: x + width/2, y: y + height/2 };
            // get slope -> slope = dy/dx = tan(theta)
            const slope = (clientX - eyeCenter.x) / (clientY - eyeCenter.y);
            // get theta (angle) -> angle = arctan(slope)
            const angle = Math.atan2(clientX - eyeCenter.x, clientY - eyeCenter.y) * 180 / Math.PI;
            eye.style.transform = `rotate(${-1 * angle}deg)`;    
        });
    }
    function eyeTouchRolling(e) {
        const { clientX, clientY } = e.touches[0];
        const eyes = Array.prototype.slice.call(document.getElementsByClassName("eye"));
        eyes.forEach(eye => {
            // get position of eye
            const { x, y, width, height } = eye.getBoundingClientRect();
            // get center position of eye
            const eyeCenter = { x: x + width/2, y: y + height/2 };
            // get slope -> slope = dy/dx = tan(theta)
            const slope = (clientX - eyeCenter.x) / (clientY - eyeCenter.y);
            // get theta (angle) -> angle = arctan(slope)
            const angle = Math.atan2(clientX - eyeCenter.x, clientY - eyeCenter.y) * 180 / Math.PI;
            eye.style.transform = `rotate(${-1 * angle}deg)`;    
        });
    }
    function App() {
        window.addEventListener('mousemove', eyeRolling);
        window.addEventListener('touchmove', eyeTouchRolling);
    }
    App();
    

})();