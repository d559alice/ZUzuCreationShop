import dotenv from 'dotenv'
import mongoose from 'mongoose'
import beautifulUnique from 'mongoose-beautiful-unique-validation'
import validator from 'validator'

dotenv.config()

const Schema = mongoose.Schema
mongoose.connect(process.env.DBURL, { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.plugin(beautifulUnique)

const userSchema = new Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須四個字以上'],
    maxlength: [20, '帳號必須二十個字以下'],
    unique: '帳號已使用',
    required: [true, '請輸入帳號']
  },
  password: {
    type: String,
    required: [true, '請輸入密碼']
  },
  name: {
    type: String
  },
  email: {
    type: String,
    validate: {
      // 驗證 function
      validator (value) {
        return validator.isEmail(value)
      },
      // 錯誤訊息
      message: '信箱格式錯誤'
    }
  },
  phone: {
    type: Number
  },
  address: {
    type: String
  },
  birth: {
    type: String
  },
  cart: {
    type: Array
  },
  wishlist: {
    type: Array
  }
}, {
  versionKey: false
})

const sortSchema = new Schema({
  sortTitle: {
    type: String
  },
  sortName: {
    type: String
  },
  sortsrc: {
    type: String
  }
}, {
  versionKey: false
}
)

const productSchema = new Schema({
  sortName: {
    type: String
  },
  productName: {
    type: String
  },
  productsrc: {
    type: String
  },
  productPrice: {
    type: Number
  },
  productDescription: {
    type: String
  },
  productStock: {
    type: Number
  }
})

const users = mongoose.model(process.env.COLLECTION_USER, userSchema)
const sorts = mongoose.model(process.env.COLLECTION_SORT, sortSchema)
const products = mongoose.model(process.env.COLLECTION_PRODUCT, productSchema)
const connection = mongoose.connection

export default {
  users,
  sorts,
  products,
  connection
}
