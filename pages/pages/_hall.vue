<template>
    <div>
        <h1>美食馆</h1>
        <div>{{$route.params.hall}}</div>
        <router-link to="/">Home</router-link>
        <div>{{JSON.stringify(cmsData)}}</div>
    </div>
</template>
<script>
import {mapState} from 'vuex';

export default {
    name: 'hall',
    metaInfo: {
        title: 'Snack',
        titleTemplate: '%s - Yamibuy',
        meta: [
            {name: 'keywords', content: 'Snack'},
            {name: 'description', content: '亚米网'}
        ]
    },
    async asyncData({store,route}) {
        await store.dispatch('hall/setCmsData', {name: 'snack'});
    },
    computed: {
        ...mapState('hall', [
            'cmsData'
        ])
    },
    created(){
        console.log(this.cmsData);
    }
};
</script>
<style>

</style>

