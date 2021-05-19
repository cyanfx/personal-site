import Head from "next/head"
import TextTransition, { presets } from "react-text-transition"
import { meta, twitter_url, github_url, vrc_url } from "../pages/index"

export function Header() {
  return (
    <Head>
      <title>cyanf</title>
      <meta name="description" content={meta} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/lambda.svg" />
    </Head>
  )
}

function VRCButton() {
  return (
    <a
      href={vrc_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={"Go to my VRChat Profile"}>
      <svg
        className={
          "stroke-0 filter grayscale brightness-200 hover:filter-none h-8 duration-100 transform sm:h-11 hover:scale-110 mt-0.5"
        }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="7 7 50 52">
        <linearGradient
          id="nSSoFG3zB8a4M7PmDE7i5a"
          x1="32"
          x2="32"
          y1="55.798"
          y2="4.365"
          gradientTransform="matrix(1 0 0 -1 0 64)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#1a6dff"></stop>
          <stop offset="1" stopColor="#c822ff"></stop>
        </linearGradient>
        <path
          fill="url(#nSSoFG3zB8a4M7PmDE7i5a)"
          d="M47.99,59c-0.928,0-1.819-0.438-2.386-1.174L36.508,46H12c-2.757,0-5-2.243-5-5V12 c0-2.757,2.243-5,5-5h40c2.757,0,5,2.243,5,5v29c0,2.757-2.243,5-5,5h-1v9.99C51,57.649,49.649,59,47.99,59z M12,9 c-1.654,0-3,1.346-3,3v29c0,1.654,1.346,3,3,3h25c0.311,0,0.604,0.145,0.793,0.391l9.396,12.216C47.382,56.856,47.674,57,47.99,57 c0.557,0,1.01-0.453,1.01-1.01V45c0-0.553,0.447-1,1-1h2c1.654,0,3-1.346,3-3V12c0-1.654-1.346-3-3-3H12z"></path>
        <linearGradient
          id="nSSoFG3zB8a4M7PmDE7i5b"
          x1="39.899"
          x2="40.598"
          y1="47.501"
          y2="27.366"
          gradientTransform="matrix(1 0 0 -1 0 64)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6dc7ff"></stop>
          <stop offset="1" stopColor="#e6abff"></stop>
        </linearGradient>
        <path
          fill="url(#nSSoFG3zB8a4M7PmDE7i5b)"
          d="M46.6,26.5v-6.3c0-2.32-1.88-4.2-4.2-4.2h-4.2c-2.32,0-4.2,1.88-4.2,4.2v15.75 c0,0.58,0.47,1.05,1.05,1.05h2.1c0.58,0,1.05-0.47,1.05-1.05V30.7h1.207l2.868,5.721C42.454,36.776,42.817,37,43.214,37h2.334 c0.781,0,1.289-0.822,0.939-1.52l-2.546-5.081C45.496,29.783,46.6,28.274,46.6,26.5z M38.2,25.45v-4.2c0-0.58,0.47-1.05,1.05-1.05 h2.1c0.58,0,1.05,0.47,1.05,1.05v4.2c0,0.58-0.47,1.05-1.05,1.05h-2.1C38.67,26.5,38.2,26.03,38.2,25.45z"></path>
        <linearGradient
          id="nSSoFG3zB8a4M7PmDE7i5c"
          x1="23.858"
          x2="24.557"
          y1="46.874"
          y2="26.739"
          gradientTransform="matrix(1 0 0 -1 0 64)"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6dc7ff"></stop>
          <stop offset="1" stopColor="#e6abff"></stop>
        </linearGradient>
        <path
          fill="url(#nSSoFG3zB8a4M7PmDE7i5c)"
          d="M31.872,17.327l-5.16,18.9C26.588,36.683,26.173,37,25.7,37h-3.688 c-0.473,0-0.888-0.317-1.013-0.773l-5.16-18.9C15.656,16.659,16.159,16,16.851,16h2.17c0.473,0,0.888,0.317,1.013,0.773l3.821,13.99 l3.821-13.99C27.801,16.317,28.216,16,28.689,16h2.17C31.552,16,32.055,16.659,31.872,17.327z"></path>
      </svg>
    </a>
  )
}
export function SocialButtons({ handleButtonClick }) {
  return (
    <div className="flex flex-row justify-center space-x-5 sm:space-x-10">
      {/*VRChat*/}
      <VRCButton />
      {/*Twitter*/}
      <a
        target="_blank"
        href={twitter_url}
        rel="noopener noreferrer"
        aria-label={"Go to my VRChat Profile"}>
        <svg
          className="h-8 text-gray-300 transition duration-100 transform fill-current sm:h-11 hover:text-blue-500 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </a>
      {/*Github*/}
      <a
        target="_blank"
        href={github_url}
        rel="noopener noreferrer"
        aria-label={"Go to my VRChat Profile"}>
        <svg
          className="h-8 mt-.5 text-gray-300 duration-100 transform fill-current sm:h-11 hover:text-gray-400 hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      {/*Using Tab index and focus:outline-none is a hacky way of
                  preserving the ability to tab while disabling outline on click*/}
      {/*Discord*/}
      <div id={"divButton"} className={"relative"} tabIndex="0">
        {/*Text copied notification*/}
        <div
          id={"copiedText"}
          className={
            "opacity-0 transition-opacity ease-out font-light text-gray-400 absolute left-10 top-2 text-xs sm:left-16 sm:top-2.5 sm:text-base"
          }>
          Copied!
        </div>
        <button
          onClick={handleButtonClick}
          tabIndex="-1"
          className={"focus:outline-none"}
          aria-label={"Copy Discord Info"}>
          <svg
            className={
              "h-8 sm:h-11 fill-current duration-100 text-gray-300 hover:text-indigo-400 transform hover:scale-110 mt-.7"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
export function Title() {
  return (
    <h1
      className={
        " select-none text-center mb-8 md:mb-12 text-8xl sm:text-9xl md:text-12xlc tracking-wider -mt-5 md:-mt-8 " +
        " font-black whitespace-nowrap font-inter antialiased text-gray-50"
      }>
      cyanf
    </h1>
  )
}
export function FlavorTextBar({ flavorText }) {
  return (
    <div className={"flex justify-center mt-6 md:mt-10"}>
      <TextTransition
        className={
          "  select-none text-gray-400 font-medium text-sm sm:text-lg font-inter"
        }
        text={flavorText}
        springConfig={presets.stiff}
      />
    </div>
  )
}
