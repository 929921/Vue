
import request from "./http"
import mock from  "@/mock"

class Apis {
    // 获取首页数据
    // json1811.ashx?v=1562741893374&c=NewIndexController&m=index
    // https://m.hua.com
    // 
    
	getTest(){
		var fromData=new FormData();
		fromData.append('itemcodes',`9010966,9092149,9012154,9012243,9012177,9012175,9012009,9010969,9012189,9012201,9010736,9012204,1073038,1073247,1073254,1073249,5302015,5602022,5301105,5302019,1076062,1060009,1076072,1070071,1204050,1207010,1201003,1207068`)
		return request({
			method:"post",
			url:"/home/GetProductListPrice",
			data:fromData
		})
	}
}
export default new Apis();
