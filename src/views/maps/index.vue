<template>
    <div class="app-container">
        <MglMap :accessToken="accessToken" :mapStyle="mapStyle"/>
    </div>
</template>

<script>
    import Mapbox from 'mapbox-gl'
    import {MglMap} from 'vue-mapbox'

    export default {
        name: 'Maps',
        components: {
            MglMap
        },
        data: () => {
            return {
                accessToken: process.env.VUE_APP_MAPBOX_TOKEN,
                mapStyle: 'mapbox://styles/mapbox/streets-v11'
            }
        },

        created() {
            this.mapbox = Mapbox;
        }
    }
</script>

<style scoped>
.app-container {
    padding: 0;
    height: 100vh;
}
</style>
