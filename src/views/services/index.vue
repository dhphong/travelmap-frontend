<template>
    <div class="app-container">
        <h1>Services</h1>
        <el-input
                placeholder="Your area"
                prefix-icon="el-icon-search"
                v-model="searchKeyword">
        </el-input>
        <div style="display: inline-block; margin-top: 15px">
            <el-select v-model="type" placeholder="Services Type">
                <el-option label="Hotels" value="hotels"></el-option>
                <el-option label="Restaurants" value="restaurants"></el-option>
                <el-option lavel="Bars" value="bars"></el-option>
            </el-select>
            <el-select v-model="sortOrders" placeholder="Sort by">
                <el-option label="Price" value="price"></el-option>
                <el-option label="Stars" value="stars"></el-option>
            </el-select>
        </div>
        <div class="list-services-result">
            <el-card v-for="res in searchData"  :key="res.name">
                <div :style="{display: 'flex', flexDirection: 'row', alignItems: 'center'}">
                    <div :style="{width: '70%'}">
                        <div style="font-size: 18px; font-weight: 500; margin-bottom: 5px">{{res.name}}</div>
                        <el-rate v-model="res.rate"></el-rate>
                        <div v-for="i in res.info" :key="i" style="font-size: 12px; color: #5a5e66; margin-top: 5px">{{i}}</div>
                    </div>
                    <div style="font-weight: bold; font-size: 20px; width: 20%">{{res.price}}</div>
                    <img :src="res.preview" :alt="res.name" height="100%" style="width: 10%">
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Services',
        data: () => {
            return {
                searchKeyword: '',
                type: '',
                sortOrders: '',
                searchData: [
                    {
                        name: 'Hoan Kiem Lake Hotel',
                        rate: 4,
                        price: '$12',
                        info: ['2-star hotel', 'Unpretentious hotel with free breakfast'],
                        preview: 'https://lh3.googleusercontent.com/proxy/S2rrq6_UJA6Vee7IqB_TBAzY6DtqPiw9GlRsWMhuBFdMMI1yS6E42xs8T7vh93AWcnHUPpRU9Tx2E0eC1TTGVxbrY7D1wkusjfQnO80ytCbVFGupRF9apvYfdJANqhmMrX39zb80sjPVnT1pz22korS_RuCqSg=w80-h92-p-k-no'
                    },
                    {
                        name: 'Hanoi Pearl Hotel',
                        rate: 4,
                        price: '$60',
                        info: ['4-star hotel', 'Polished property with a rooftop bar'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipOSUDcPpwHSBFft-hkKwT-IUM0nZKlL5YVoIZby=w80-h92-p-k-no'
                    },
                    {
                        name: 'hanoi lucky hotel 2',
                        rate: 4,
                        price: '$14',
                        info: ['2-star hotel', 'Unassuming property with free breakfast'],
                        preview: 'https://lh5.googleusercontent.com/proxy/t8jWXn0KFaI6I8IwR5gfXSC1JQVAaDs7ntxeorp_QtVQBbtbARkUePytS_nFC0p6bdJM-3ChoinjsQLWIPGfMwrtsC5-rlklUkjvFQeN7aHmbMRq1UJkEfVALft3QXRI-R_pSW6Tdsc3uy54Cn-KfAXYGwkwuQ=w80-h92-p-k-no'
                    },
                    {
                        name: 'Sao Mai Hotel',
                        rate: 4,
                        price: '$35',
                        info: ['4-star hotel', 'Informal lodging with a restaurant'],
                        preview: 'https://lh6.googleusercontent.com/proxy/HxOuju-M4slxSIuwaAWCjdudM9nTyjhKCKRb3UlEged4vhAdADggPO2STVW5YNAVSeIdfjQEj5CN-jVj9-9hBQypdpWbsDgQhWGGw2EJWCVhrKML7dXjc1-R9GgnDe8sSJthZF07F9-007PFda66hfQoTofGvg=w80-h92-p-k-no'
                    },
                    {
                        name: 'The Queen Hotel and Spa 2',
                        rate: 4,
                        price: '$15',
                        info: ['Hotel'],
                        preview: 'https://lh6.googleusercontent.com/proxy/5FJRdvONK64Ad9Tn0Ax1wPvpI2F8EHMSLDz-8scXG92-cqHbFJUbvjFrHsDG_qzhTMe6DFBExOCvtRrk7s5J9VZDhd_85qtdOMJicCcqic9nQzVbzW_g2dtFeG1HXeJuIMlORQ6DSP_FktPIUtWDGhsevV6DImo=w80-h92-p-k-no'
                    },
                    {
                        name: 'Pullman Hanoi',
                        rate: 4,
                        price: '$126',
                        info: ['5-star hotel', 'Upmarket hotel with a spa & dining'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipMoTKbcojynzIxISfrRFuX5sprs-bowHUvglKMA=w80-h92-p-k-no'
                    },
                    {
                        name: 'Hotel du Parc Hanoi',
                        rate: 4,
                        price: '$94',
                        info: ['5-star hotel', 'Polished lodging with dining & a day spa'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipMZGwo8Yysi5RIBevl3eghqW-fK_LPHP3RtmYgq=w80-h92-p-k-no'
                    },
                    {
                        name: 'Charming Hotel Hanoi',
                        rate: 4,
                        price: '$13',
                        info: ['2-star hotel', 'Casual lodging with international dining'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipNK73p7ar9LCU1zXOMgxhPARggnoT29pcThi1RQ=w80-h92-p-k-no'
                    },
                    {
                        name: 'Hilton Hanoi Opera',
                        rate: 4,
                        price: '$165',
                        info: ['5-star hotel', 'Chic hotel with 2 restaurants & a pool'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipOAm24sOghy3-Uz-b0R3fFp00ggvQerbZjelYhd=w80-h92-p-k-no'
                    },

                    {
                        name: 'Hotel LakeSide',
                        rate: 4,
                        price: '$52',
                        info: ['2-star hotel', 'Unpretentious hotel with free breakfast'],
                        preview: 'https://lh3.googleusercontent.com/proxy/S2rrq6_UJA6Vee7IqB_TBAzY6DtqPiw9GlRsWMhuBFdMMI1yS6E42xs8T7vh93AWcnHUPpRU9Tx2E0eC1TTGVxbrY7D1wkusjfQnO80ytCbVFGupRF9apvYfdJANqhmMrX39zb80sjPVnT1pz22korS_RuCqSg=w80-h92-p-k-no'
                    },
                    {
                        name: 'Hover House',
                        rate: 5,
                        price: '$19',
                        info: ['2-star hotel'],
                        preview: 'https://lh3.googleusercontent.com/proxy/a2sxAFHMf2nLKAYWnJXdSMppXYC-RgBBrdgQGlHcR7d9xeIfrFKt9wRuiV1SQkaU0_Heszk70W_8W1lQRvsRok63UPfZ3JBTjW5Eq06yDNUrsjaiYv_oTmfwf2l3UT57SjKhIg1KxJO3IZbFMbel9LtKih05q2k=w80-h92-p-k-no'
                    },
                    {
                        name: 'Hanoi Evergreen Hotel',
                        rate: 4,
                        price: '$5',
                        info: ['2-star hotel', 'Casual hotel with free breakfast'],
                        preview: 'https://lh6.googleusercontent.com/proxy/F_lnEtlf6Rb7r0kO8d9_v85ghvtYnrYub1r2SS8b-ac8VXhR2ScwPZuFeh7_t2M-_pXjDyXc47ei2_c0IwFHFmrYIjyXyC4PNfvfvGl0PpBZx7ydBfttC_fSVBQBVaqnlOkl_wJ2c4-4zxVt1o_REGyqLuArQcU=w80-h92-p-k-no'
                    },
                    {
                        name: 'Sofitel Legend Metropole Hanoi',
                        rate: 5,
                        price: '$333',
                        info: ['5-star hotel', 'Plush hotel with a spa & elegant dining'],
                        preview: 'https://lh5.googleusercontent.com/p/AF1QipN7Q7BsHhgMelg7FM0iSChTr2a70vutMMfIWzpm=w80-h92-p-k-no'
                    }
                ]
            }
        }
    }
</script>

<style>
    .list-services-result .el-card.is-always-shadow {
        width: 95%;
        min-width: 250px;
        min-height: 80px;
        margin-top: 20px;
        /*margin:  5px 200px 0 200px ;*/
    }
</style>

<style scoped>

    .list-services-result {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .app-container {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }

    .el-input--medium .el-input__inner {
        line-height: 36px;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
