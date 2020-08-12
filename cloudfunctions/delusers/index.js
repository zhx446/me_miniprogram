// 云函数入口文件
const cloud = require('wx-server-sdk')
const db = cloud.database()
const _ = db.command

cloud.init({
    env: 'program-0vkep'
})

// 云函数入口函数
exports.main = async (event, context) => {
    try {
      return await db.collection('users').where({
        _openid: 'o5Bj84tF2bD54h6SNYVoIa7bHt6o'
      }).remove()
    } catch(e) {
      console.error(e)
    }
  }