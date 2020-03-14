import {GetterTree} from 'vuex'
import {State} from './state'

const getters: GetterTree<State,any> = {
    getTest(state: any){
        return state.test
    }
}

export default getters