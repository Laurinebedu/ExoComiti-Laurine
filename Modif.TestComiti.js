function doDevis(memberNumber, federation, sectionNumber) {
    console.log("Nombre d'adhérent: " + memberNumber)
    console.log("Fédération: " + federation)
    console.log("Nombre de section: " + sectionNumber)

    let memberPrice = 0;
    if (memberNumber <= 100) {
        memberPrice = 10
    } else if (memberNumber <= 200) {
        memberPrice = memberNumber * 0.1
    } else if (memberNumber <= 500) {
        memberPrice = memberNumber * 0.09
    } else if (memberNumber <= 1000) {
        memberPrice = memberNumber * 0.08
    } else if (memberNumber >= 10000) {
        memberPrice = 1000
    } else {
        memberPrice = Math.ceil(memberNumber  /1000) * 70
    }

    if (federation === "G") {
        memberPrice *= 0.85
    } else if (federation === "N") {
        sectionFreeNumber = 3
    } else if (federation === "B") {
        memberPrice *= 0.7
    }

    if(memberNumber >= 1000){
        sectionFreeNumber++
    }

    let sectionPrice = 0
    let sectionToPay = sectionNumber

    let discountedSectionNumber = 0

    const month = new Date().getMonth() + 1 
    for (let i=1; i<=sectionNumber; i++){
        if (i % month === 0){
            discountedSectionNumber++
        }
    }

    sectionPrice = (sectionToPay - discountedSectionNumber) * 5 + discountedSectionNumber * 3

    let fullPrice = memberPrice + sectionPrice
    let priceTTC = fullPrice * 1.2

    console.log("-------------------------------------")
    console.log("Prix HT adhérent: " + memberPrice + "€/mois")
    console.log("Prix HT section: " + sectionPrice + "€/mois")
    console.log("Prix HT: " + fullPrice + "€/mois")
    console.log("Prix HT: " + fullPrice*12 + "€/an")
    console.log("Prix TTC: " + priceTTC*12 + "€/an")
}