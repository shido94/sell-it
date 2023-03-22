const config = require('../config/environment');

module.exports = {
  PORT: config.PORT,
  API_URI: config.API_URI,
  DATABASE: config.DATABASE,
  ACCESS_TOKEN_SECRET: config.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: config.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRATION: '7d',
  REFRESH_TOKEN_EXPIRATION: '30d',
  TOKEN_EXPIRATION: 5 /** In minutes */,

  RAZOR_PAY: {
    USERNAME: config.RAZOR_PAY_USERNAME,
    PASSWORD: config.RAZOR_PAY_PASSWORD,
    ACCOUNT: config.RAZOR_PAY_ACCOUNT,
    URI: 'https://api.razorpay.com/v1',
  },

  FAKE_OTP: '1234',

  TWILIO: {
    ACCOUNT_SID: '',
    AUTH_TOKEN: '',
    MOBILE_NUMBER: '',
  },
  COLLECTIONS: {
    USER: 'User',
    CATEGORY: 'Category',
    PRODUCT: 'Product',
    BID_HISTORY: 'ProductBidHistory',
    PAYMENT: 'Payment',
  },
  S3: {
    ACCESS_KEY: config.S3_ACCESS_KEY,
    SECRET_KEY: config.S3_SECRET_KEY,
    REGION: config.S3_REGION,
    BUCKET_NAME: config.S3_BUCKET_NAME,
    LOCATION: 'https://sell-it-bucket.s3.ap-northeast-1.amazonaws.com',
  },
};
