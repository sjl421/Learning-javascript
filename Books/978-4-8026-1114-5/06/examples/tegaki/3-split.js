const fs = require('fs')
const path = require('path')
// CSVファイルを開く
const csv = fs.readFileSync(
  path.join(__dirname, 'database', 'images.csv'),
  'utf-8'
)

// 改行で区切ってシャッフル
const a = csv.split('\n')
const shuffle = () => Math.random() - 0.5
const b = a.sort(shuffle)
// 2000件と500件に分割
const c1 = b.slice(0, 2000)
cosnt c2 = b.slice(2000, 500)
// ファイルに保存
fs.writeFileSync('image-train.csv', c1.join('\n'))
fs.writeFileSync('image-test.csv', c2.join('\n'))
console.log('ok')