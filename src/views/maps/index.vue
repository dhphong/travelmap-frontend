<template>
    <div class="app-container">
        <loading :active.sync="isLoading"
                 :can-cancel="false"
        ></loading>
        <div style="display: flex; flex-direction: row; height: 100%;">
            <MglMap :accessToken="accessToken"
                    :mapStyle.sync="mapStyle"
                    @load="onMapLoad"
            >
                <!--            <MglGeojsonLayer-->
                <!--                    type="fill"-->
                <!--                    :sourceId="sourceId"-->
                <!--                    :layerId="layerId"-->
                <!--                    :source="geojson"-->
                <!--            >-->
                <!--            </MglGeojsonLayer>-->
                <MglFullscreenControl></MglFullscreenControl>
                <MglNavigationControl position="top-right"></MglNavigationControl>
                <MglGeolocateControl position="top-right"></MglGeolocateControl>

                <MglMarker v-for="location in travelData" :coordinates="location.coordinates" color="blue"
                           :key="location.name">
                    <el-card slot="marker" :body-style="{ padding: '0px' }">
                        <img :src="location.preview"
                             class="image"
                             :alt="location.name"
                             width="80px"
                        >
                    </el-card>
                    <MglPopup>
                        <el-card style="background-image: url('https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/29-south-walton-florida.adapt.1900.1.jpg'); background-repeat: no-repeat; background-size: cover">
                            <h3 style="color: #f8f8f8">{{location.name}}</h3>
                        </el-card>
                    </MglPopup>
                </MglMarker>
            </MglMap>
            <div class="info-sidebar">
                <img src="https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/29-south-walton-florida.adapt.1900.1.jpg" alt="Belize" width="100%">
                <div class="info-body">
                    <h1>Belize</h1>
                    <div class="info-content">One of Central America’s smallest countries (roughly the size of Massachusetts) is making big waves in marine conservation. In June 2018 the Belize Barrier Reef System, which Charles Darwin deemed “the most remarkable reef in the West Indies,” was removed from the UNESCO World Heritage site danger list. The turnaround is due to extraordinary ocean protection and restoration measures, such as a moratorium on maritime oil exploration, tougher regulations to safeguard mangrove forests, and a planned government ban on single-use plastic-foam cups and plastic products by Earth Day 2019. One of the most biodiverse reefs on the planet, the Belize barrier reef is home to several rare and threatened species, such as the red-footed booby, West Indian manatee, and loggerhead turtle. Back on land, head to Belize’s largest Maya site, Caracol, which is bigger than its famous neighbor, Tikal, in Guatemala—but with a fraction of its visitors. The Belizean government plans to pave the road to Caracol in 2019, making the archaeological site more accessible.</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Mapbox from 'mapbox-gl'
    import {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglFullscreenControl,
        MglMarker,
        MglPopup,
        // MglGeojsonLayer
    } from 'vue-mapbox'
    import Loading from 'vue-loading-overlay'
    import 'vue-loading-overlay/dist/vue-loading.css'

    export default {
        name: 'Maps',
        components: {
            MglMap,
            Loading,
            MglNavigationControl,
            MglGeolocateControl,
            MglFullscreenControl,
            MglMarker,
            MglPopup,
            // MglGeojsonLayer
        },
        data: () => {
            return {
                accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
                mapStyle: 'mapbox://styles/mapbox/streets-v11',
                isLoading: true,
                layerId: 'firstLayer',
                sourceId: 'firstSource',
                geojson: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson',
                travelData: [
                    {
                        name: 'Nha Trang',
                        coordinates: [109.19432, 12.24507],
                        preview: 'https://pix10.agoda.net/geo/city/2679/1_2679_02.jpg?s=1920x822'
                    },
                    {
                        name: 'Mexico City',
                        coordinates: [-99.1332, 19.4326],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/02-mexico-city-mexico.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Peruvian Amazonia',
                        coordinates: [-62.2159, -3.4653],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/03-amazon-peru.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Fanjingshan, China',
                        coordinates: [108.6903, 27.9203],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/04-fanjingshan-china.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Dakar, Senegal',
                        coordinates: [-17.4677, 14.7167],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/05-dakar-senegal.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Dordogne, France',
                        coordinates: [0.7572, 45.1469],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/06-dordogne-france.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Canterbury Region, New Zealand',
                        coordinates: [171.1637, -43.7542],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/07-canterbury-region-new-zealand.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Hoang Lien Son, Vietnam',
                        coordinates: [103.7500, 22.3333],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/08-hoang-lien-national-park-vietnam.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Greenland',
                        coordinates: [-42.6043, 71.7069],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/09-nuuk-greenland.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Oman',
                        coordinates: [55.9754, 21.4735],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/10-oman.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Kansas City, Missouri',
                        coordinates: [-94.5786, 39.0997],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/11-kansas-city-missouri.adapt.1900.1.jpg'
                    },
                    {
                        name: 'French Polynesia',
                        coordinates: [-149.4068, -17.6797],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/01-opener-french-polynesia.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Bisti/De-Na-Zin Wilderness, New Mexico',
                        coordinates: [-108.1298, 36.2921],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/14-bisti-de-na-zin-wilderness-navajo-nation-new-mexico.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Belize',
                        coordinates: [-88.4976, 17.1899],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/15-coral-reef-blue-hole-belize.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Matera, Italy',
                        coordinates: [16.6043, 40.6664],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/16-matera-italy.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Caño Cristales River, Colombia',
                        coordinates: [-56.6638, 8.9383],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/17-rainbow-river-colombia.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Cairo, Egypt',
                        coordinates: [31.2357, 30.0444],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/18-cairo-egypt.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Toronto, Canada',
                        coordinates: [-79.3832, 43.6532],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/19-toronto-canada.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Galway, Ireland',
                        coordinates: [-9.0568, 53.2707],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/20-galway-ireland.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Gorongosa National Park, Mozambique',
                        coordinates: [34.4959, -18.8163],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/21-gorongosa-national-park-mozambique.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Oakland, California',
                        coordinates: [-122.2712, 37.8044],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/22-oakland-california.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Salvador, Brazil',
                        coordinates: [-38.5016, -12.9777],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/23-salvador-brazil.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Isla de los Estados, Argentina',
                        coordinates: [-64.4268, -54.7998],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/24-isla-de-los-estados-argentina.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Macedonia',
                        coordinates: [21.7453, 41.6086],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/26-macedonia.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Perth, Australia',
                        coordinates: [115.8605, -31.9505],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/27-perth-australia.adapt.1900.1.jpg'
                    },
                    {
                        name: 'Montenegro',
                        coordinates: [19.3744, 42.7087],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/28-montenegro.adapt.1900.1.jpg'
                    },
                    {
                        name: 'South Walton County, Florida',
                        coordinates: [-86.6170, 30.4201],
                        preview: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/best-trips-2019/29-south-walton-florida.adapt.1900.1.jpg'
                    }
                ]
            }
        },

        created() {
            this.mapbox = Mapbox;
        },
        methods: {
            async onMapLoad(event) {
                // Here we cathing 'load' map event
                const asyncActions = event.component.actions

                const newParams = await asyncActions.flyTo({
                    center: [30, 30],
                    zoom: 1.8,
                    speed: 1
                })
                console.log(newParams)
                this.isLoading = false
            }
        }
    }
</script>

<style scoped lang="scss">
.app-container {
    padding: 0;
    height: 100vh;
    overflow: hidden;
}

.info-sidebar {
    min-width: 200px;
    width: 35%;
    height: 100vh;
    background-color: white;
    /*padding-left: 20px;*/
    border-left: 2px solid #cccccc;
    border-radius: 10px;
    margin-left: -10px;
    .info-body {
        margin-left: 30px;

        .info-content {
            line-height: 1.5;
            font-family: 'Open Sans', sans-serif;
        }
    }
}

</style>
