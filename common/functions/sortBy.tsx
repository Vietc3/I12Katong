import _ from 'lodash';

const sortBy= (obj:[], filter:string,asc:string,callBack:any ) =>{
        const orderBy = _.orderBy(obj, [filter], [asc==='asc'?'asc':'desc']);
        callBack(orderBy)
}


export default sortBy;