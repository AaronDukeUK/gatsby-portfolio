import * as React from "react"

import me from "../images/me.jpg"
import logo from "../images/logo.png"

import "../sass/main.scss"

const IndexPage = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="" />
        <div className="header__email">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
          </svg>
        </div>
      </header>

      <main>
        <h2>Web Developer</h2>
        <h1>Aaron Duke</h1>
        <div className="profile">
          <img className="profile__image" src={me} alt="" />
          <div className="profile__circle"></div>
        </div>

        <div className="location">
          <div className="location__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
          </div>
          <div className="location__text">
            <p>Norfolk, UK</p>
          </div>
        </div>
        <div className="available">
          <div className="available__circle"></div>
          <span className="available__text">Available for work</span>
        </div>

        <h3>Connect</h3>
        <div className="connect">
          <div className="connect__icon">
            <img src="" alt="" />
          </div>
          <div className="connect__icon">
            <img src="" alt="" />
          </div>
          <div className="connect__icon">
            <img src="" alt="" />
          </div>
        </div>

        <h3>Main Skills</h3>
        <div className="skills"></div>
      </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home</title>
