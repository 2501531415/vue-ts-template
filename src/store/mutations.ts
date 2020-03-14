import {MutationTree} from 'vuex' 


const mutations: MutationTree<any> = {
    changeTest(state: any,payload: any): void{
        state.test = payload
    }
}
export default mutations