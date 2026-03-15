/**Swap image
 * @param {*} imageId 
 * @param {*} image1 initial image
 * @param {*} image2 image to be swapped
 */
function swapImage(imageId, image1, image2) {
    var imageDisplayed = document.getElementById(imageId);
    if (imageDisplayed.src.includes(image1)) {
        imageDisplayed.src = image2;
    }
    else {
        imageDisplayed.src = image1;
    }
}

function showFact() {
    alert("I started in QA for plastics and now I do QA for software");
}