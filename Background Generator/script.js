document.addEventListener("DOMContentLoaded", () => {
    const color1Input = document.getElementById("color1");
    const color2Input = document.getElementById("color2");
    const gradientTypeSelect = document.getElementById("gradientType");
    const previewDiv = document.getElementById("preview");
    
    const generateBackground = () => {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const gradientType = gradientTypeSelect.value;

        let gradientStyle;

        switch (gradientType) {
            case "linear":
                gradientStyle = `linear-gradient(to right, ${color1}, ${color2})`;
                break;
            case "radial":
                gradientStyle = `radial-gradient(circle, ${color1}, ${color2})`;
                break;
            case "conic":
                gradientStyle = `conic-gradient(${color1}, ${color2})`;
                break;
            default:
                gradientStyle = `linear-gradient(to right, ${color1}, ${color2})`;
        }

        // Update both the preview and the body background
        previewDiv.style.background = gradientStyle;
        document.body.style.background = gradientStyle; // Change body background
    };

    // Event listeners
    color1Input.addEventListener("input", generateBackground);
    color2Input.addEventListener("input", generateBackground);
    gradientTypeSelect.addEventListener("change", generateBackground);
    
    // Generate initial background
    generateBackground();
});