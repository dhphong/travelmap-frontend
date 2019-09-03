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
                    let path = d3.geoPath(projection)


                    let test = d3.select(this.$refs.worldMap).selectAll("path")
                        .data(data.features)
                        .enter()
                        .append("path")
                        .attr("d", path)
                    // console.warn(path)
                    // console.log(projection)
                    console.log(test)

                    this.isLoading = false
                } catch (e) {
                    console.error(e)
                }
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