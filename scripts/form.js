const products = ["Dyson V15", "PC Gamer Overprice", "Chair Gamer 16K"]

function showProducts(aProducts) {
    const option = document.querySelector("#allOptions")
    let rows = "";
    for (const product of aProducts) {
        rows += `
<option ${product}</option>
`
    }
}

showProducts(products)