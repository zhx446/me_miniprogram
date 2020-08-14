// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
const _ = db.command

cloud.init({
    env: 'program-0vkep'
})

// 云函数入口函数
exports.main = async (event, context) => {
  var _openid = event._openid
  console.log(_openid)
    try {
      return await db.collection('users').where({_openid:_openid}).remove().then(res=>{console.log('云函数成功')})
    } catch(e) {
      console.log(e)
    }
  }