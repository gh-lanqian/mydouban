let Mock = require("mockjs")

Mock.mock("/mov", "get", require('./json/mov'))
Mock.mock("/nava", "get", require('./json/nava'))
Mock.mock("/book", "get", require('./json/book'))
Mock.mock("/shouye", "get", require('./json/shouye'))
Mock.mock("/xiaozua", "get", require('./json/xiaozua'))
Mock.mock("/xiaozub", "get", require('./json/xiaozub'))
Mock.mock("/xiaozuc", "get", require('./json/xiaozuc'))
Mock.mock("/goodBook", "get", require('./json/goodBook'))
Mock.mock("/faxianhaodianying", "get", require('./json/faxianhaodianying'))
Mock.mock("/bot", "get", require('./json/bot'))
Mock.mock("/toggle", "get", require('./json/toggle'))