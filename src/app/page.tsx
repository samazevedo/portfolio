"use client"
import Scene from "@components/canvas/scene"
import About from "@components/dom/about/about"
import Contact from "@components/dom/contact/contact"
import Hero from "@components/dom/hero/hero"
import Main from "@components/dom/main/main"
import { ModeSwitch } from "@components/dom/mode-switcher/mode-switch"
import Portfolio from "@components/dom/portfolio/portfolio"

import Image from "next/image"

export default function Home() {
	return (
		<Main>
			<Hero />
			<About />
			<Portfolio />
			<Contact />
			<Scene />
		</Main>
	)
}
