import Image from "next/image"
import { useEffect, useState } from "react"
import {
  Header,
  Title,
  SocialButtons,
  FlavorTextBar,
} from "../components/utility"

const flavorTextArr = [
  "Software Developer",
  "VRChat Sleeping Enthusiast",
  "Imposer of Cat Tax",
  "Probably Studying",
  "Sucks at Beat Saber",
  "Nightowl",
  "Runs Budget Rounds Late Wipe",
]

export const meta = "Ironic this site isn't cyaned themed"
export const twitter_url = "https://twitter.com/certainly_blue"
export const github_url = "https://github.com/cyanfx"
export const vrc_url =
  "https://vrchat.com/home/user/usr_7babfcf1-5c1e-4070-826d-98dff69822c4"

export default function Home() {
  const [flavorTextIndex, setFlavorTextIndex] = useState(0)

  //loop through the arr and loop back with modulus magic!
  const flavorText = flavorTextArr[flavorTextIndex % flavorTextArr.length]

  useEffect(() => {
    setTimeout(() => {
      setFlavorTextIndex(flavorTextIndex + 1)
    }, 4000)
  })

  //add enter key event listener to button
  useEffect(() => {
    document
      .getElementById("divButton")
      .addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          handleButtonClick()
        }
      })
    document.documentElement.lang = "en"
  }, [])

  function handleButtonClick() {
    navigator.clipboard.writeText("Phan#0001")
    document.getElementById("copiedText").style.opacity = "100"
    setTimeout(() => {
      document.getElementById("copiedText").style.opacity = "0"
    }, 1000)
  }

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen bg-warmGray-900">
        <main>
          <Title />
          <SocialButtons handleButtonClick={handleButtonClick} />
          <FlavorTextBar flavorText={flavorText} />
        </main>
        <div />
      </div>
    </div>
  )
}
