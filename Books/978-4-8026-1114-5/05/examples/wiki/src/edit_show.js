import React from 'react'
import request from 'superagent'
import WikiParser from './wiki_parser'
import styles from './styles'

// Wiki メイン画面表示コンポーネント
class WikiShow extends React.Component {
  constructor (props) {
    super(props)

    const {params} = this.props.match
    
    this.state = {
      name: params.name,
      body: '',
      loaded: false
    }
  }
  
  // Wiki の内容を読み込む
  componentWillMount () {
    request
      .get(`/api/get/${this.state.name}`)
      .end((err, res) => {
        if (err) return 
        
        this.setState({
          body: res.body.data.body,
          loaded: true
        })
      })
  }
  
  // 画面の表示処理
  render () {
    if (!this.state.loaded) return (<p>読み込み中</p>)
    
    const name = this.state.name 
    const body = this.state.body 
    const html = this.convertText(body)
    
    return (
      <div>
        <h1>{this.state.name}</h1>
        <div style={styles.body}>{html}</div>
        <p style={styles.right}>
          <a href={`/edit/${name}`}>→このページを編集</a>
        </p>
      </div>
    )
  }
  
  // Wiki記法をReactオブジェクトに変換する
  convertText (src) {
    // Wiki記法をパースして配列データに変換
    const nodes = WikiParser.parse(src)
    
    // 各要素を React の要素に変換
    const lines = nodes.map((e, i) => {
      if (e.tag === 'ul') { // リスト
        const lis = e.target.map((s, j) => <li key={`node${i}_${j}`}>{s}</li>)
      }
      
      if (e.tag === 'a') {
        return (
          <div key={`node${i}`}>
            <a href={`/wiki/${e.label}`}>→{e.label}</a>
          </div>
        )
      }
      
      return React.createElement(e.tag, {key: 'node' + i}, e.label)
    })
    
    return lines
  }
}

export default WikiShow
