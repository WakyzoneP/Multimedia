const populationData = {
    2013: [
        { tara: "Romania", populatie: 20000000 },
        { tara: "Ungaria", populatie: 21000000 },
        { tara: "Bulgaria", populatie: 19000000 },
    ],
    2014: [
        { tara: "Romania", populatie: 21000000 },
        { tara: "Ungaria", populatie: 22000000 },
        { tara: "Bulgaria", populatie: 20000000 },
    ],
    2015: [
        { tara: "Romania", populatie: 22000000 },
        { tara: "Ungaria", populatie: 23000000 },
        { tara: "Bulgaria", populatie: 21000000 },
    ],
    2016: [
        { tara: "Romania", populatie: 23000000 },
        { tara: "Ungaria", populatie: 24000000 },
        { tara: "Bulgaria", populatie: 22000000 },
    ],
    2017: [
        { tara: "Romania", populatie: 24000000 },
        { tara: "Ungaria", populatie: 25000000 },
        { tara: "Bulgaria", populatie: 23000000 },
    ],
    2018: [
        { tara: "Romania", populatie: 25000000 },
        { tara: "Ungaria", populatie: 26000000 },
        { tara: "Bulgaria", populatie: 24000000 },
    ],
};

window.onload = () => {
    const viewButton = document.getElementById("view_button");
    const maxButton = document.getElementById("max_button");
    const listElement = document.getElementById("data_list");

    function addElementToList(year, data) {
        const element = document.createElement("li");
        const text = document.createTextNode(`${year} - ${data.tara} - ${data.populatie} locuitori`);
        element.appendChild(text);
        listElement.appendChild(element);
    }

    function addData(year) {
        const data = populationData[year];
        data.forEach((element) => {
            addElementToList(year, element);
        });
    }

    viewButton.onclick = () => {
        const year = document.getElementById("year_select").value;
        addData(year);
    };

    // maxButton.addEventListener("click", () => {
    //     const maxim = Object.keys(populationData).reduce((a, b) => populationData[a].populatie > populationData[b].populatie ? a : b);
    //     const contentView = document.getElementById("content_view");
    //     const element = document.createElement("p");
    //     const text = document.createTextNode("Populatia maxima a fost atinsa in anul " + maxim + " in tara " + populationData[maxim].tara);
    //     element.appendChild(text);
    //     contentView.appendChild(element);
    // })

    maxButton.onclick = () => {

        let anMaxim = null;
        let maxim = {
            tara: null,
            populatie: 0,
        };
        for (const key in populationData) {
            const popArray = populationData[key];
            popArray.forEach((element) => {
                if (element.populatie > maxim.populatie) (maxim = element), (anMaxim = key);
            });
        }

        const contentView = document.getElementById("content_view");
        const element = document.createElement("p");
        const text = document.createTextNode("Populatia maxima a fost atinsa in anul " + anMaxim + " in tara " + maxim.tara);
        element.appendChild(text);
        contentView.appendChild(element);
    };
};
