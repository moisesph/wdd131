
const regionUsed = document.getElementById('sub-region');



regionUsed.addEventListener('submit', function (event) {

    const actualRegion = new FormData(regionUsed);
    const selectedRegion = actualRegion.get('regionSelected')

    const infoData = {
        region: selectedRegion
    }

    const jsonString = JSON.stringify(infoData)

    localStorage.setItem('user_selection', jsonString);


})


// IA was used to help to know how to write parts of this code but all the logic was think by me
