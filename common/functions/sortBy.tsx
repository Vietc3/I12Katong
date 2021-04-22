import _ from 'lodash';

const sortBy= async (obj:[], filter:string,asc:string,callBack:any ) =>{
        const orderBy = await _.orderBy(obj, [filter], [asc==='asc'?'asc':'desc']);
        callBack(orderBy)
}


export default sortBy;