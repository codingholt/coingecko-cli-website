import React from 'react'
import ReactTerminalCommand from 'react-terminal-command'
import '../App.css'


const Content = () => {
  return (
    <div className='wrapper'>

<section class="hero is-large header-image">
  <div class="hero-body">
    <p class="title is-white">
    CoinGecko-Cli, a new way to get data from coingecko
    </p>
    <p class="subtitle">
    To get started run the commmand:
    </p>
    <div className='column is-half is-offset-6'>
    <ReactTerminalCommand command='npm install -g coingecko-cli' className='i is-pulled-right'/>
    </div>
  </div>
   
</section>
</div>
)
}

export default Content