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
    try {
      return await db.collection('users').where(_openid).remove()
    } catch(e) {
      console.log(e)
    }
  }