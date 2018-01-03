import React, {Component} from 'react'
import request from 'superagent'
import {Redirect} from 'react-router-dom'
import styles from './styles'

// ログイン画面を定義したコンポーネント
export default class SNSLogin extends Component {
  constructor (props) {
    super(props)
    this.state = { userid: '', passwd: '', jump: '', msg: '' }
  }
  
  // API を呼び出し, トークンを得て localStorage に保存する
  api (command) {
    request
      .get('/api/' + command)
      .query({
        userid: this.state.userid,
        passwd: this.state.passwd
      })
      .end((err, res) => {
        if (err) return 
        
        const r = res.body 
        console.log(r)
        if (r.status && r.token) {
          // 認証トークンを localStorage に保存
          window.localStorage['sns_id'] = this.state.userid
          window.localStorage['sns_auto_token'] = r.token
          this.setState({jump: '/timeline'})
        }
        this.setState({msg: r.msg})
      })
  }
  
  render () {
    if (this.state.jump) {
      return <Redirect to={this.state.jump}/>
    }
    
    const changed = (name, e) => this.setState({[name]: e.target.value})
    
    return (
      <div>
        <h1>ログイン</h1>
        <div style={styles.login}>
          ユーザーID:<br/>
          <input value={this.state.userid}
            onChange={e => changed('userid', e)}/><br/>
          パスワード:<br/>
          <input type='password' value={this.state.passwd}/
            onChange={e => changed('passwd', e)}/><br/>
          <button onClick={e = this.api('login')}>
            ログイン
          </button><br/>
          <p style={styles.error}>
            {this.state.msg}
          </p>
          <p>
            <button onClick={e => this.api('addUser')}>
              ユーザー登録（初回）
            </button>
          </p>
        </div>
      </div>
    )
  }
}
