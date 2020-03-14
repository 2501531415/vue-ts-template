import {ActionTree} from 'vuex'
import {State} from './state'
import axios from 'axios'

const actions: ActionTree<State,any> = {
    get({commit,state: any},data: any){
        axios.get('/api').then(res=>{
            commit('changeTest',res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
} 

export default actions