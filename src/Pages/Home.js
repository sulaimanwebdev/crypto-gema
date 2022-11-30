import React from 'react'

const Home = () => {

  return (
    <>
      <div className="app">
        <header className="navigation">
            <div className="navigation-container">
                <img src="/img/logo.svg " alt=" " className="navigation-logo w-[80px]"/>
                <nav className="navigation-nav ">
                    <a href="#giveaway " className="active ">Giveaway</a>
                    <a href="#rules ">Info</a>
                    <a href="#rules ">Instruction</a>
                    <a href="#participate ">Participate</a>
                    <a href="#transaction ">Transaction</a>
                </nav>
                <a href="#participate " className="navigation-participate ">Participate →</a>
            </div>
        </header>
        <main className="main ">
            <section className="top " id="giveaway">
                <div className="top-container">
                    <div className="top-text ">
                        <div className="top-bage ">
                            <img src="/img/bage.png" alt=""/>
                            <p>Official event</p>
                        </div>
                        <h1 className="top-title">Biggest giveaway<br/> CRYPTO of <span>$100 000 000</span></h1>
                        <p className="top-subtitle">During this unique event we will give you a chance to win <span>5 000 BТC</span> or <span>50 000 ETH</span>, have a look at the rules and don’t miss on your chance! You can only participate once!</p>
                        <div className="top-buttons">
                            <a className="top-button participate" href="#participate">Participate →</a>
                            <a className="top-button qr" href="#participate"><img src="/img/qr.png" alt=""/></a>
                        </div>
                    </div>
                    <img src="/img/logo.svg " className="participate-creator " alt=" "/>
                </div>
            </section>
            <section className="instruction " id="rules ">
                <h4 className="section-title ">Instruction <span>for</span> participate</h4>
                <div className="instruction-container ">
                    <div className="instruction-row ">
                        <div className="instruction-item ">
                            <img src="/img/wallet.png" alt=""/>
                            <p>To participate, you must have a working wallet with the desired amount.</p>
                        </div>
                        <div className="instruction-item">
                            <img src="/img/transfer.png " alt=" "/>
                            <p>Send the allowed number of coins to the special address below.</p>
                        </div>
                    </div>
                    <div className="instruction-row ">
                        <div className="instruction-item ">
                            <img src="/img/checkmark.png" alt=""/>
                            <p>After receiving your funds, we will immediately send back according to the rules.</p>
                        </div>
                        <div className="instruction-item">
                            <img src="/img/bonus.png " alt=" "/>
                            <p>You can only take part in our giveaway once, hurry up!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rules ">
                <h4 className="section-title ">Rules <span>&amp;</span> Information</h4>
                <div className="rules-container ">
                    <div className="rules-row ">
                        <div className="rules-item ">
                            <p className="rules-title "><span>About</span> giveaway <img className='w-[35px] h-[35px] inline-block ml-[5px] align-middle' src="/img/popper.png" alt=""/></p>
                            <p className="rules-subtitle">We believe that <span>BТC</span> &amp; <span>ETH</span> will make the world more fair. To speed up the process of cryptocurrency mass adoption, we decided to run <span>5 000 BТC</span> &amp; <span>50 000 ETH</span> giveaway
                                for all crypto holders!
                            </p>
                        </div>
                        <div className="rules-item">
                            <p className="rules-title"><span>How</span> to participate ?</p>
                            <p className="rules-subtitle">To participate you just need to send from (<span>0.1 BТC</span> to <span>30 BТC</span>) or (<span>0.5 ETH</span> to <span>500 ETH</span>) to the contribution address and we will immediately send you back (<span>0.2 BТC</span>                                to <span>60 BТC</span>) or (<span>1 ETH</span> to <span>1 000 ETH</span>) (<span>x2</span>) to the address you sent it from</p>
                        </div>
                    </div>
                    <div className="rules-row">
                        <div className="rules-item">
                            <p className="rules-title"><span>Count</span> your prize</p>
                            <p className="rules-subtitle">In order to calculate your prize, you can use the built-in calculator on our website</p>
                        </div>
                        <div className="rules-item calculator">
                            <div className="calculator-block">
                                <div className="calculator-item">
                                    <p className="calculator-label">You will send <span>BТC</span><svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.68956 0.313455C1.55103 0.310408 1.41499 0.350568 1.30035 0.428412C1.18571 0.506257 1.09818 0.61794 1.04991 0.747833C1.00165 0.877726 0.995062 1.01941 1.03106 1.15322C1.06705 1.28703 1.14385 1.40625 1.25076 1.4944L5.33019 4.98919L1.25076 8.48275C1.1768 8.5371 1.11486 8.60611 1.06882 8.68552C1.02278 8.76492 0.993636 8.853 0.983203 8.94419C0.97277 9.03538 0.981278 9.12773 1.00819 9.21548C1.03511 9.30323 1.07985 9.3845 1.13963 9.45416C1.1994 9.52381 1.2729 9.58032 1.35555 9.62025C1.43819 9.66018 1.52819 9.68261 1.61991 9.68615C1.71163 9.68969 1.80309 9.6743 1.88856 9.64086C1.97404 9.60741 2.05169 9.55668 2.11665 9.49184L6.78722 5.4957C6.86057 5.4331 6.91946 5.35541 6.95985 5.26786C7.00023 5.1803 7.02115 5.085 7.02115 4.98857C7.02115 4.89215 7.00023 4.79685 6.95985 4.70929C6.91946 4.62174 6.86057 4.54397 6.78722 4.48138L2.11665 0.481393C1.99866 0.376594 1.84733 0.317014 1.68956 0.313301V0.313455Z" fill="#FF0039"></path>
                                </svg></p>
                                    <div className="calculator-input">
                                        <input type="text" name="input" placeholder="Enter Amount"/>
                                    </div>
                                </div>
                                <p className="calculator-delimiter">X</p>
                                <div className="calculator-item">
                                    <p className="calculator-label">Your profit</p>
                                    <div className="calculator-counter"><span>200%</span></div>
                                </div>
                                <p className="calculator-delimiter">=</p>
                                <div className="calculator-item red">
                                    <p className="calculator-label red">You receive</p>
                                    <div className="calculator-counter">
                                        <span id="calculator_number">0</span>
                                        <svg width="29" height="41" viewBox="0 0 29 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26.7618 12.8847C26.3296 8.5805 22.6068 7.15268 17.9123 6.7613L17.8872 0.788697L14.2517 0.804468L14.2764 6.61975C13.3205 6.62369 12.3438 6.64672 11.3731 6.67015L11.3491 0.816257L7.71569 0.831487L7.73956 6.80246C6.95269 6.82188 6.17958 6.83991 5.42597 6.84344L5.42545 6.82476L0.411259 6.84396L0.428522 10.7269C0.428522 10.7269 3.11297 10.6646 3.0686 10.7139C4.54095 10.7081 5.02397 11.5612 5.16677 12.2982L5.19555 19.1024C5.29704 19.1024 5.4296 19.1061 5.57999 19.1262C5.45872 19.1269 5.32948 19.1268 5.19587 19.1286L5.23489 28.6605C5.17244 29.1242 4.90315 29.8645 3.87423 29.8704C3.9211 29.9114 1.23159 29.881 1.23159 29.881L0.527292 34.2259L5.25854 34.2058C6.13902 34.2033 7.00535 34.2147 7.85605 34.2162L7.88302 40.2569L11.5146 40.2421L11.4893 34.2652C12.4866 34.2817 13.4514 34.2855 14.3937 34.2808L14.4171 40.23L18.0528 40.2142L18.0284 34.1842C24.1392 33.8079 28.4105 32.2504 28.9174 26.5081C29.3268 21.8847 27.1442 19.8317 23.6714 19.0131C25.7748 17.9308 27.0848 16.0342 26.7631 12.8848L26.7618 12.8847ZM21.7296 25.8224C21.7505 30.3367 14.0189 29.8557 11.5549 29.8684L11.5223 21.8647C13.9868 21.8551 21.71 21.1139 21.7296 25.8224ZM19.9912 14.5375C20.0074 18.6444 13.5592 18.1923 11.5069 18.201L11.4767 10.9423C13.529 10.9336 19.9727 10.2541 19.9912 14.5375Z" fill="#FF2D39"></path>
                                    </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="participate" id="participate">
                <h4 className="section-title">Participate <span>in</span> giveaway</h4>
                <div className="participate-container">
                    <div className="participate-item">
                        <img src="img/chart.png " alt=" " className="participate-qr"/>
                        <div className="participate-data ">
                            <p className="participate-title ">Send your <span>BТC</span> to the address for X2 back</p>
                            <div className="participate-address ">
                                <p>17oSZFuDzLVp29canbi2PW9qW5T7siQrjX</p>
                                <svg className="address-done hidden" width="14 " height="11 " viewBox="0 0 14 11 " fill="none " xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.36089 10.7881C5.22721 10.9241 5.04493 11 4.8555 11C4.66607 11 4.48379 10.9241 4.35011 10.7881L0.314169 6.70344C-0.104723 6.27957 -0.104723 5.5924 0.314169 5.16926L0.819556 4.65787C1.23845 4.234 1.91682 4.234
                    2.33572 4.65787L4.8555 7.20759L11.6643 0.317902C12.0832 -0.105967 12.7623 -0.105967 13.1804 0.317902L13.6858 0.829295C14.1047 1.25316 14.1047 1.94033 13.6858 2.36347L5.36089 10.7881Z " fill="#FF0039 "></path>
                            </svg>
                            </div>
                            <div className="participate-footer ">
                                <button type="button " className="participate-button " onclick="copy('17oSZFuDzLVp29canbi2PW9qW5T7siQrjX'); ">Copy address</button>
                                <div className="participate-status ">
                                    <svg width="16 " height="16 " viewBox="0 0 16 16 " fill="none " xmlns="http://www.w3.org/2000/svg ">
                                    <path d="M13.3333 3.21844V1.81456C13.7299 1.58334 14 1.15809 14 0.666656V0.333344C14 0.149094 13.8509 0 13.6667 0H2.33334C2.14909 0 2 0.149094 2 0.333344V0.666687C2 1.15809 2.27006 1.58334 2.66666 1.81459V3.21844C2.66666
                    4.53941 3.22981 5.80372 4.21159 6.68719L5.67025 8L4.21159 9.31281C3.22981 10.1963 2.66666 11.4606 2.66666 12.7816V14.1854C2.27006 14.4167 2 14.8419 2 15.3333V15.6667C2 15.8509 2.14909 16 2.33334 16H13.6667C13.8509 16 14 15.8509 14 15.6667V15.3333C14
                    14.8419 13.73 14.4167 13.3334 14.1854V12.7816C13.3334 11.4606 12.7702 10.1963 11.7884 9.31281L10.3298 8L11.7884 6.68719C12.7702 5.80372 13.3333 4.53937 13.3333 3.21844ZM10.8965 5.69628L8.88737 7.50456C8.74675 7.63087 8.66666 7.81087 8.66666
                    8C8.66666 8.18913 8.74675 8.36916 8.88737 8.49544L10.8965 10.3037C11.5977 10.9349 12 11.8382 12 12.7816V14H11.1665L8.26659 10.1335C8.14094 9.9655 7.85903 9.9655 7.73338 10.1335L4.8335 14H4V12.7816C4 11.8382 4.40234 10.9349 5.10353 10.3037L7.11266
                    8.49541C7.25328 8.36909 7.33337 8.18909 7.33337 7.99997C7.33337 7.81084 7.25328 7.63081 7.11266 7.50453L5.10353 5.69625C4.40234 5.06509 4 4.16178 4 3.21844V2H12V3.21844C12 4.16178 11.5977 5.06509 10.8965 5.69628Z " fill="#FF0039 "></path>
                                    <path d="M10.2976 4.66663H5.70219C5.57035 4.66663 5.45088 4.74444 5.3975 4.86488C5.34413 4.98566 5.36657 5.12628 5.45544 5.22394L7.7764 7.36522C7.83987 7.42285 7.91996 7.45147 8.00003 7.45147C8.08009 7.45147 8.16018
                    7.42281 8.22365 7.36522L10.5443 5.22394C10.6331 5.12628 10.6556 4.98566 10.6022 4.86488C10.5489 4.74444 10.4294 4.66663 10.2976 4.66663Z " fill="#FF0039 "></path>
                                </svg>
                                    <p>Waiting for payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="participate-item ">
                        <img src="img/chart-alt.png" alt="" className="participate-qr"/>
                        <div className="participate-data">
                            <p className="participate-title">Send your <span>ETH</span> to the address for X2 back</p>
                            <div className="participate-address">
                                <p>0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb</p>
                                <svg className="address-done" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.36089 10.7881C5.22721 10.9241 5.04493 11 4.8555 11C4.66607 11 4.48379 10.9241 4.35011 10.7881L0.314169 6.70344C-0.104723 6.27957 -0.104723 5.5924 0.314169 5.16926L0.819556 4.65787C1.23845 4.234 1.91682 4.234 2.33572 4.65787L4.8555 7.20759L11.6643 0.317902C12.0832 -0.105967 12.7623 -0.105967 13.1804 0.317902L13.6858 0.829295C14.1047 1.25316 14.1047 1.94033 13.6858 2.36347L5.36089 10.7881Z" fill="#FF0039"></path>
                            </svg>
                            </div>
                            <div className="participate-footer">
                                <button type="button" className="participate-button" onclick="copy('0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb');">Copy address</button>
                                <div className="participate-status">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 3.21844V1.81456C13.7299 1.58334 14 1.15809 14 0.666656V0.333344C14 0.149094 13.8509 0 13.6667 0H2.33334C2.14909 0 2 0.149094 2 0.333344V0.666687C2 1.15809 2.27006 1.58334 2.66666 1.81459V3.21844C2.66666 4.53941 3.22981 5.80372 4.21159 6.68719L5.67025 8L4.21159 9.31281C3.22981 10.1963 2.66666 11.4606 2.66666 12.7816V14.1854C2.27006 14.4167 2 14.8419 2 15.3333V15.6667C2 15.8509 2.14909 16 2.33334 16H13.6667C13.8509 16 14 15.8509 14 15.6667V15.3333C14 14.8419 13.73 14.4167 13.3334 14.1854V12.7816C13.3334 11.4606 12.7702 10.1963 11.7884 9.31281L10.3298 8L11.7884 6.68719C12.7702 5.80372 13.3333 4.53937 13.3333 3.21844ZM10.8965 5.69628L8.88737 7.50456C8.74675 7.63087 8.66666 7.81087 8.66666 8C8.66666 8.18913 8.74675 8.36916 8.88737 8.49544L10.8965 10.3037C11.5977 10.9349 12 11.8382 12 12.7816V14H11.1665L8.26659 10.1335C8.14094 9.9655 7.85903 9.9655 7.73338 10.1335L4.8335 14H4V12.7816C4 11.8382 4.40234 10.9349 5.10353 10.3037L7.11266 8.49541C7.25328 8.36909 7.33337 8.18909 7.33337 7.99997C7.33337 7.81084 7.25328 7.63081 7.11266 7.50453L5.10353 5.69625C4.40234 5.06509 4 4.16178 4 3.21844V2H12V3.21844C12 4.16178 11.5977 5.06509 10.8965 5.69628Z" fill="#FF0039"></path>
                                    <path d="M10.2976 4.66663H5.70219C5.57035 4.66663 5.45088 4.74444 5.3975 4.86488C5.34413 4.98566 5.36657 5.12628 5.45544 5.22394L7.7764 7.36522C7.83987 7.42285 7.91996 7.45147 8.00003 7.45147C8.08009 7.45147 8.16018 7.42281 8.22365 7.36522L10.5443 5.22394C10.6331 5.12628 10.6556 4.98566 10.6022 4.86488C10.5489 4.74444 10.4294 4.66663 10.2976 4.66663Z" fill="#FF0039"></path>
                                </svg>
                                    <p>Waiting for payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="transaction" id="transaction">
                <div className="transaction-title">
                    <div className="transaction-title_live">
                        <div className="dot">
                            <div></div>
                        </div>
                        <p>LIVE</p>
                    </div>
                </div>
                <div className="transaction-container">
                    <div className="transaction-header">
                        <p className="txhash">TxHash</p>
                        <p className="block">Block</p>
                        <p className="from">From</p>
                        <div className="arrow"></div>
                        <p className="to">To</p>
                        <p className="value">Value</p>
                        <p className="fee">Fee</p>
                        <p className="status">Status</p>
                    </div>
                    <div className="transaction-content"><div className="transaction-item">
                <p className="txhash">0xmVmCWRotBmQ47NUq0Vp5EcLSy...</p>
                <p className="block">284729</p>
                <p className="from">0xNXONGnoDnByn1ldArQvRYW5JX...<br/>0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb</p>
                <div className="arrow"><img src=".//img/check.svg" alt=""/></div>
                <p className="to">0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb<br/>0xlgWK6btnUzCPVwLPNbnS4ixpa...</p>
                <p className="value">2.31588 ETH<br/>1.15794 ETH</p>
                <p className="fee">0.00001</p>
                <p className="status">Completed</p>
            </div><div className="transaction-item">
        <p className="txhash">ptveLccCHwstIJwpzVozvKjXq...</p>
        <p className="block">669725</p>
        <p className="from">bc18QRIZRiaoIBu3HGOjqPVXvuqC...<br/>17oSZFuDzLVp29canbi2PW9qW5T7siQrjX</p>
        <div className="arrow"><img src=".//img/check.svg" alt=""/></div>
        <p className="to">17oSZFuDzLVp29canbi2PW9qW5T7siQrjX<br/>bc1sszNzkO9woT8QUUnEJoztkKgG...</p>
        <p className="value">5.93662 BТC<br/>2.96831 BТC</p>
        <p className="fee">0.00003</p>
        <p className="status">Completed</p>
    </div><div className="transaction-item">
        <p className="txhash">GjTcTgSj0uzKXVApXW8y9NFVj...</p>
        <p className="block">251663</p>
        <p className="from">bc1igpOlOb5S5WQroGAo38wRkqfW...<br/>17oSZFuDzLVp29canbi2PW9qW5T7siQrjX</p>
        <div className="arrow"><img src=".//img/check.svg" alt=""/></div>
        <p className="to">17oSZFuDzLVp29canbi2PW9qW5T7siQrjX<br/>bc16juNPHMkFSIDlItEhXf6uQMny...</p>
        <p className="value">12.68762 BТC<br/>6.34381 BТC</p>
        <p className="fee">0.00006</p>
        <p className="status">Completed</p>
    </div><div className="transaction-item">
        <p className="txhash">vM8Eon7lWK5rTxfZzJp0p3e0A...</p>
        <p className="block">887224</p>
        <p className="from">bc1XrrJFE0gARZRLiWmSlDD3l306...<br/>17oSZFuDzLVp29canbi2PW9qW5T7siQrjX</p>
        <div className="arrow"><img src=".//img/check.svg" alt=""/></div>
        <p className="to">17oSZFuDzLVp29canbi2PW9qW5T7siQrjX<br/>bc1iR9NICaWycmsBw0EfTPLJzn1T...</p>
        <p className="value">6.96346 BТC<br/>3.48173 BТC</p>
        <p className="fee">0.00003</p>
        <p className="status">Completed</p>
    </div><div className="transaction-item">
                <p className="txhash">0x7GkZPt4OCpBVThIJez1xKml2F...</p>
                <p className="block">524592</p>
                <p className="from">0x7oW08fSKzI8JzyJvZZCSUlyn2...<br/>0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb</p>
                <div className="arrow"><img src=".//img/check.svg" alt=""/></div>
                <p className="to">0x2F7D1C5BfE93CA3d688D8B8a22FfEEa8D2349ECb<br/>0xO61XTQ9BCdyVgMfgCjtoZuJwr...</p>
                <p className="value">20.37486 ETH<br/>10.18743 ETH</p>
                <p className="fee">0.0001</p>
                <p className="status">Completed</p>
            </div>
                        
                        
                        
                        
                        
                    </div>
                </div>
            </section>
        </main>
        <footer className="navigation ">
            <div className="navigation-container ">
                <img src="/img/logo.svg" alt="" className="navigation-logo w-[80px]"/>
                <a href="#participate" className="navigation-participate">Participate →</a>
            </div>
        </footer>
    </div>
    </>
  )
}

export default Home