import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./StartTrip.scss";
const EthereumTx = require('ethereumjs-tx').Transaction
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/76b350c099234a679772c47fc1d57c90"));
export class StartTrip extends Component {
componentDidMount = () => {
    const privateKey = Buffer.from(
      'e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109',
      'hex',
    )

    const txParams = {
      nonce: web3.utils.toHex(42),
      gasPrice: '0x09184e72a000',
      gasLimit: '0x2710',
      to: '0x9fd6c8d42023fe1801c6167e94f73d1251e86bb5',
      value: '0x00',
      data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
    }

    // The second parameter is not necessary if these values are used
    const tx = new EthereumTx(txParams, { chain: 'ropsten', hardfork: 'petersburg' })
    tx.sign(privateKey)
    const serializedTx = tx.serialize().toString('hex')
    console.log(tx)
    console.log(serializedTx)
    web3.eth.sendSignedTransaction('0x' + serializedTx, (...params)=>{
        console.log(params)

    })

}
  render() {
    return (
      <div className="start-trip flex flex-column">
        <div className="start-trip-text">
          <p className="start-trip-text__number">Device number 67685</p>
          <p className="start-trip-text__status">Enabled</p>
        </div>
        <Link to="/trip">
          <div className="start-trip-button flex">
            <p className="start-trip-button__text start-trip-text">Start a trip</p>
          </div>
        </Link>
      </div>
    )
  }
}
