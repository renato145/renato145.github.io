var store = [{
        "title": "Plotting with altair",
        "excerpt":"This library has recently caught my attention: Altair. So here is a test check the interactive behavior on a post, can’t wait to use more of it :). Code for the plot: import altair as altfrom vega_datasets import dataalt.renderers.enable('notebook')d = data.iris()brush1 = alt.selection_interval()brush2 = alt.selection_interval()base = alt.Chart(d)p1 = base.mark_point().encode( x='petalLength',...","categories": [],
        "tags": ["dataviz","altair"],
        "url": "http://localhost:4000/plotting-with-altair/",
        "teaser":"http://localhost:4000/images/plotting-with-altair/altair_ico.png"},{
        "title": "INEI Crime Data",
        "excerpt":"In Perú, the Instituto Nacional de Estadística e Informática (INEN) is the government agency in charge of statistical information. In this post, we will be looking at crime data from http://criminalidad.inei.gob.pe. We can download the number of crime complaints by type and region. As we would like to compare different...","categories": [],
        "tags": ["dataviz","altair","inei"],
        "url": "http://localhost:4000/inei-crime-data/",
        "teaser":"http://localhost:4000/images/inei-criminality-data/delitos-ratio-map.png"},{
        "title": "Violence against women in Perú",
        "excerpt":"Peru has one of the highest rates of violence against women in the region1. How bad is the problem? let’s take a look at some public data. Public data The Demographic and Family Health Survey: ENDES2, is one of the most important statistical research carried out continuously in Perú. It...","categories": [],
        "tags": ["dataviz","altair","inei","vaw"],
        "url": "http://localhost:4000/slope-graphs-and-altair/",
        "teaser":"http://localhost:4000/images/inei-criminality-data/delitos-ratio-map.png"}]
