const imgCollection = ['img1Hyperlink', 'img2Hyperlink', 'img3Hyperlink', 'img4Hyperlink', 'img5Hyperlink', 'img6Hyperlink', 'img7Hyperlink', 'img8Hyperlink', 'img9Hyperlink', 'img10Hyperlink', 'img11Hyperlink', 'img12Hyperlink', 'img13Hyperlink', 'img14Hyperlink', 'img15Hyperlink', 'img16Hyperlink', 'img17Hyperlink', 'img18Hyperlink', 'img19Hyperlink', 'img20Hyperlink', 'img21Hyperlink'] // sample array

for (let i = 0; i < 10; i++) { // start at 0 index, + 1 increment
    console.log(imgCollection[i]); // prints hyperlink 1 - 10
}

console.log('\n'); // line break

for (let i = 0; i < imgCollection.length; i += 5) { // start at 0 index, + 5 increment
    console.log(imgCollection[i]) // prints hyperlink 1, 6, 11, 16, 21
}
