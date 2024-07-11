import React, { useState, useEffect } from "react"
import { useTrail, animated, useSpring, useSpringRef } from "@react-spring/web"
export const Typewrite = ({ children }: { children: React.ReactNode }) => {
	// const items = text.split(" ")
	const [springs] = useSpring(() => ({
		from: { opacity: 0, x: 0 },
		to: { opacity: 1, x: 100 },
		config: { mass: 5, tension: 550, friction: 140, precision: 0.0001 },
	}))

	// useEffect(() => {
	// 	api.start({ from: { opacity: 0 }, to: { opacity: 1 } })
	// }, [api])

	return <animated.div style={{ ...springs }}>{children}</animated.div>
}
