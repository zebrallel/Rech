import * as React from 'react'
import axios from 'axios'
import SHA1 from '../../utils/sha1'

class RussellLogin extends React.Component {
  mobile = '18858307296'
  poolId = '63cdd526f304a254d742eb253e06c03e'
  timestampSec = parseInt(Date.now() / 1000)
  deviceId = SHA1.hex(Date.now())

  sendVCode = () => {
    axios
      .post(`http://dev-account.thellsapi.com/api/v2/initiate_auth`, {
        authFlow: 'SMS_CODE',
        poolId: this.poolId,
        smsCodeParams: {
          mobile: this.mobile,
          timestampSec: this.timestampSec,
          sig: SHA1.hex(`${this.mobile}${SHA1.hex(`${this.poolId}${this.timestampSec}`)}`)
        },
        clientPlatform: 'WECHAT_H5',
        deviceId: this.deviceId
      })
      .then(data => {
        console.log('success!')
        console.log(data)
        this.setState({
          session: data.data.session
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  login = () => {
    axios
      .post(`http://dev-account.thellsapi.com/api/v2/respond_to_auth_challenge`, {
        challengeType: 'SMS_CODE',
        poolId: this.poolId,
        smsResp: {
          code: this.state.vcode,
          mobile: this.mobile
        },
        clientPlatform: 'WECHAT_H5',
        deviceId: this.deviceId
      })
      .then(data => {
        console.log('login success!')
        console.log(data)
      })
  }
  state = {
    vcode: '',
    session: ''
  }
  render() {
    return (
      <div>
        <h1>Russell Login</h1>
        <div>
          <button onClick={this.sendVCode}>send vcode</button>
          <span>VCode:</span>
          <input
            type="text"
            value={this.state.vcode}
            onChange={eve => {
              this.setState({
                vcode: eve.target.value
              })
            }}
          />
        </div>
        <button onClick={this.login}>login</button>
      </div>
    )
  }
}

export default RussellLogin
