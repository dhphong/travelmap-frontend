<template>
    <div class="app-container">
        <h1>Search</h1>
        <el-input
                placeholder="Search"
                prefix-icon="el-icon-search"
                v-model="searchKeyword">
        </el-input>
        <div class="list-result">
            <el-card v-for="res in searchData" :body-style="{ padding: '0px'}" :key="res.name">
                <img :src="res.preview" class="image">
                <div style="padding: 14px;">
                    <span>{{res.name}}</span>
                    <div class="bottom clearfix">
                        <time class="time">{{res.location}}</time>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data: () => {
            return {
                searchKeyword: '',
                currentDate: new Date(),
                searchData: [
                    {
                        name: 'Hanover',
                        location: 'Massachusetts, United States of America',
                        preview: 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
                    },
                    {
                        name: 'Hanson',
                        location: 'Massachusetts, United States of America',
                        preview: 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
                    },
                    {
                        name: 'Hanover Wine & Spirits',
                        location: '363 Hanover St, Boston, Massachusetts 02113, United States of America',
                        preview: 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
                    },
                    {
                        name: 'Hanscom Federal Credit Union',
                        location: '427 Commercial St, Boston, Massachusetts 02109, United States of America',
                        preview: 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
                    },
                    {
                        name: 'Hanover Dry Cleaners',
                        location: '306 Hanover St, Boston, Massachusetts 02113, United States of America',
                        preview: 'https://icon-library.net/images/no-image-available-icon/no-image-available-icon-6.jpg'
                    }
                ]
            }
        }
    }
</script>

<style>
    .list-result .el-card.is-always-shadow {
        max-width: 250px;
        margin-left: 25px;
    }
</style>

<style scoped>
    .list-result {
        margin-top: 30px;
        display: flex;
        flex-direction: row;

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
