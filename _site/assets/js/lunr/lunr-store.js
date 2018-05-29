var store = [{
        "title": "Some post test",
        "excerpt":"Hello kasdasdasdadssadasd.asdasdasdasdsdasd.     import numpy as np    np.arange(2)asd asd x+t The end :) ","categories": [],
        "tags": ["machine learning","neural networks"],
        "url": "http://localhost:4000/test/",
        "teaser":null},{
        "title": "Altair plot test",
        "excerpt":"Code for plot: import altair as altfrom vega_datasets import dataalt.renderers.enable('notebook')d = data.iris()brush1 = alt.selection_interval()brush2 = alt.selection_interval()base = alt.Chart(d)p1 = base.mark_point().encode( x='petalLength', y='petalWidth', color=alt.condition(brush2, 'species', alt.value('lightgray'))).properties( selection=brush1, width=300, height=300)p2 = base.mark_point().encode( x='sepalLength', y='sepalWidth', color=alt.condition(brush1, 'species', alt.value('lightgray'))).properties( selection=brush2, width=300, height=300)bars = base.mark_bar().encode( y='species', x='count(species)', color='species').transform_filter( {'and': [brush1.ref(), brush2.ref()]}).properties( width=660)chart = (p1 |...","categories": [],
        "tags": ["dataviz","altair"],
        "url": "http://localhost:4000/altair-test/",
        "teaser":null}]
