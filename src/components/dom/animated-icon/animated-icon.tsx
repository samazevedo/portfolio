import { useTheme } from "next-themes"
import { useEffect, useMemo } from "react"
import { animated, useSpring, useSprings } from "@react-spring/web"
import { debug } from "console"

export const AnimatedIcon = () => {
	const { theme } = useTheme()

	const properties = useMemo(() => {
		return {
			transform: theme === "light" ? "rotate(40deg)" : "rotate(90deg)",
			opacity: theme === "light" ? 1 : 0,
			opacityLines: theme === "light" ? 0 : 1,
			r: theme === "light" ? 10 : 5,
			cx: theme === "light" ? 12 : 12,
			cy: theme === "light" ? 12 : 12,
			fill: theme === "light" ? "black" : "white",
		}
	}, [theme])

	const [{ transform, opacity, opacityLines, r, cx, cy, fill }, api] = useSpring(
		() => ({
			transform: properties.transform,
			opacity: properties.opacity,
			opacityLines: properties.opacityLines,
			r: properties.r,
			cx: properties.cx,
			cy: properties.cy,
			fill: properties.fill,
			config: { mass: 5, tension: 570, friction: 100, precision: 0.0001 },
		})
	)

	// const [spring, api] = useSpring(() => ({
	// 	tranform: properties.dark.transform,
	// }))

	useEffect(() => {
		if (theme === "dark") {
			api.start(properties)
		} else {
			api.start(properties)
		}
	}, [theme, api, properties])

	return (
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{
				transform: transform,
			}}
		>
			<mask id="mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white" />
				{/* moon */}
				<animated.circle cx="11" cy="2" r={r} fill={fill} />
			</mask>
			<animated.circle cx="12" cy="12" r={r} fill={fill} mask="url(#mask)" />

			<animated.g stroke="currentColor" style={{ opacity: opacityLines }}>
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
			</animated.g>
		</animated.svg>
	)
}
