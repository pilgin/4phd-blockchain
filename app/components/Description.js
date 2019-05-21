import React, {Component} from 'react'

class Description extends Component {
  render() {
    return (
      <article className='page-container'>
        <div className='description'>
          <p>Glad to see you at our little loic party! Nowadays you can make a living by
            ddosing city portal (<a href='https://city-f.phd'>https://city-f.phd</a>).
            Hack machines and run miner everywhere!
          </p>
          win miner: <a href='http://crypto.phd/static/phd_ddosCoin.exe'>http://crypto.phd/static/phd_ddosCoin.exe</a><br/>
          nix miner: <a href='http://crypto.phd/static/phd_ddosCoin'>http://crypto.phd/static/phd_ddosCoin</a>
          <p>Start miner:</p>
          <pre>{` phd_ddosCoin -cmd "<command_id>" -addr <target_ip_addr> -port <port> `}</pre>
        </div>

      </article>
    )
  }
}

export default Description
