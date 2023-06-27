import * as d3 from "d3";
import rewind from "@turf/rewind";


/*
========================================================================================================================
1. Dessin SVG (15 points)
========================================================================================================================
Vous pouvez dessiner la figure soit à partir d'ici ou directement dans l'HTML (index.html).
*/


// Import des données
d3.json('../data/votations_vd.geojson')
    .then(data => {

        // Données
        console.log('Données brutes', data)

        /*
========================================================================================================================
2. Manipulation des données (20 points)
========================================================================================================================
        */

        // --- 2.1 Le pourcentage de oui pour chacune des communes ---


        // --- 2.2 La commune avec le pourcentage de non le plus elevé ---


        // --- 2.3 Le résultat de la votation sur l'ensemble du canton (moyenne pourcentage oui, moyenne pourcentage non dans tout le canton) ---



        /*
========================================================================================================================
3. Visualisations (45 points)
========================================================================================================================
        */

        // Constantes
        const margin = {top: 10, right: 40, bottom: 20, left: 40},
            width = 0.8 * window.innerWidth - margin.left - margin.right,
            height = 0.7 * window.innerHeight + margin.top + margin.bottom;


        // --- 3.1 Carte choroplète ---
        const mapSvg = d3.select('#map')
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        // Rewind data : pour que les données soient dessinées dans le bon ordre
        let reversed_data = data.features.map(function (feature) {
            return rewind(feature, {reverse: true});
        })

        // Données à utiliser pour la carte
        console.log('Données (features) à utiliser pour la carte', reversed_data)

        const projection = d3.geoMercator()
            .fitSize([width, height], {"type": "FeatureCollection", "features": reversed_data})

        const path = d3.geoPath()
            .projection(projection)



        // ---------------------------- Continuez ci-dessous -----------------------------------









        // --- 3.2 Barchart ---
        const barchartSvg = d3.select('#barchart')
            .append('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        // ---------------------------- Continuez ci-dessous -----------------------------------











    })
