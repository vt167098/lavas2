import axios from "axios";

const SET_CMS_DATA = 'SET_CMS_DATA';

export const state = () => ({
    cmsData: {}
});

export const mutations = {
    [SET_CMS_DATA](state, data) {
        state.cmsData = data;
    }
};

export const actions = {
    async setCmsData({commit}, params){
        try {
            let url = '/ec-content/cms/yamibuy/pc/cn/yamibuy_pc_cn_index';
            let result = await axios(url);

            let data = result.data.body;

            commit(SET_CMS_DATA, data);
        } catch (error) {
            console.log(e);
        }
    }
};