<template>
    <div>
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
        ></loading>
        <svg :width="width" :height="height" ref="worldMap">
<!--            <g style="transform: translate(0, 10px)">-->
<!--                <path :d="line" />-->
<!--            </g>-->
        </svg>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    import Loading from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'

    export default {
        name: "PackChart",
        props: ["tweetData"],
        data() {
            return {
                height: 800,
                width: 850,
                centered: null,
                path: null,
                color: null,
                layer: {
                    g: null,
                    effectLayer: null,
                    mapLayer: null,

                },
                isLoading: false
            };
        },
        components: {
            Loading
        },
        mounted() {
            // this.calculatePath();
            this.fetchWorldData()
        },
        methods: {
            async fetchWorldData() {
                try {
                    this.isLoading = true
                    let data = await d3.json('http://localhost:5000/api/countries')

                    let projection = d3.geoMercator()
                        .scale((this.width + 1) / 2 / Math.PI)
                        .translate([this.width/2, this.height/2])
                        // .precision(.1)
                        // .scale(100).translate([-500, 750])
                    this.path = d3.geoPath(projection)

                    // test area

                    this.color = d3.scaleLinear().domain([1,20]).clamp(true).range(['#fff', '#409A99'])

                    let svg = d3.select(this.$refs.worldMap)

                    svg.append('rect')
                        .attr('class', 'background')
                        .attr('width', this.width)
                        .attr('height', this.height)
                        .on('click', this.clicked)

                    this.layer.g = svg.append('g')

                    this.layer.effectLayer = this.layer.g.append('g').classed('effect-layer', true)

                    this.layer.mapLayer = this.layer.g.append('g').classed('map-layer', true)

                    let dummyText = this.layer.g.append('text')
                        .classed('dummy-text', true)
                        .attr('x', 10)
                        .attr('y', 30)
                        .style('opacity', 0)

                    let bigText = this.layer.g.append('text')
                        .classed('big-text', true)
                        .attr('x', 20)
                        .attr('y', 45)

                    let features = data.features

                    this.color.domain([0, d3.max(features, this.nameLength)])

                    this.layer.mapLayer.selectAll('path')
                        .data(features)
                        .enter()
                        .append('path')
                        .attr('d', this.path)
                        .attr('vector-effect', 'non-scaling-stroke')
                        .style('fill', this.fillFn)
                        // .on('mouseover', this.mouseover)
                        // .on('mouseout', this.mouseout)
                        .on('click', this.clicked)
                    ///////////////////

                    // let test = d3.select(this.$refs.worldMap).selectAll("path")
                    //     .data(data.features)
                    //     .enter()
                    //     .append("path")
                    //     .attr("d", path)
                    //     .style('fill', getRandomColor())
                    // console.warn(path)
                    // console.log(projection)
                    // console.log(test)

                    this.isLoading = false
                } catch (e) {
                    console.error(e)
                }
            },
            nameFn(d) {
                return d && d.properties ? d.properties.NOMBRE_DPT : null
            },
            nameLength(d) {
                let n = this.nameFn(d)
                return n ? n.length : 0
            },
            fillFn(d) {
                return this.color(this.nameLength(d))
            },
            clicked(d) {
                let x = 0, y = 0, k = 0

                if (d && this.centered !== d) {
                    let centroid = this.path.centroid(d)
                    x = centroid[0]
                    y = centroid[1]
                    k = 4
                    this.centered = d
                } else {
                    x = this.width / 2
                    y = this.height / 2
                    k = 1
                    this.centered = null
                }

                this.layer.mapLayer.selectAll('path')
                    .style('fill', (d) => (this.centered && d === this.centered) ? '#d5708b': this.fillFn(d))

                this.layer.g.transition()
                    .duration(750)
                    .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')scale(' + k + ')translate(' + -x +',' + -y + ')')
            }
        },
    }
</script>

<style scoped>
    svg {
        margin: 25px;
    }
    path {
        fill: none;
        stroke: #76BF8A;
        stroke-width: 3px;
    }
</style>