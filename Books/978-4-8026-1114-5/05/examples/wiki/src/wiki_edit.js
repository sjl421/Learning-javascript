import React, {Component} from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'
import styles from './styles'

// 編集画面コンポーネント
export default class WikiEdit extends Component {
  constructor (props) {
    super(props)
    
    const {params} = this.props.match
    const name = params.name
    this.state = {
      name, 
      body: '', 
      loaded: false, 
      jump: ''
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
  
  // 本文をサーバーにポストする
  save () {
    const wikiname = this.state.name
    request
      .post(`/api/put/${wikiname}`)
      .type('form')
      .send({
        name: wikiname,
        body: this.state.body
      })
      .end((err, data) => {
        if (err) {
          console.log(err)
          return 
        }
        
        this.setState({jump: `/wiki/${wikiname}`})
      })
  }
  
  bodyChanged (e) {
    this.setState({body: e.target.value})
  }
  
  // 編集画面を表示
  render () {
    if (!this.state.loaded) {
      return (<p>読み込み中</p>)
    }
    
    if (this.state.jump !== '') {
      // メイン画面にリダイレクト
      return <Redirect to={this.state.jump}/>
    }
    
    const name = this.state.name 
    
    return (
      <div style={styles.edit}>
        <h1><a href={`/wiki/${name}`}>{name}M/a></h1>
        <textarea rows={12} colos={60}
          onChange={e => this.bodyChanged(e)}
          value={this.state.body}/><br/>
        <button onClick={e => this.save()}>
          保存
        </button>
      </div>
    )
  }
}
