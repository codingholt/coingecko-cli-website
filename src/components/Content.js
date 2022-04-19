import React from 'react'
import ReactTerminalCommand from 'react-terminal-command'
import '../App.css'


const Content = () => {
  return (
    <div className='wrapper'>

  <section className="hero is-fullheight header-image">
  <nav className="navbar">
  <div className="container">
    <div id="navMenu" className="navbar-menu">

      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a href='https://github.com/codingholt/CoinGecko-CLI' className="button is-dark">Github</a>
          </div>
        </div>
      </div>
    </div>
</nav>
  <div className="hero-body">
  <div className="">
    <p className="title has-text-white">
    CoinGecko-Cli, a new way to get data from coingecko
    </p>
    <p className="subtitle has-text-white">
    To get started run the commmand:
    </p>
  </div>
    <div className='column is-offset-2'>
    <ReactTerminalCommand command='npm install -g coingecko-cli' className='i is-pulled-right'/>
</div>
    </div>
    </section>
  </div>


)
}

export default Content