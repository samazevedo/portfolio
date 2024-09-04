"use client"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { AnimatedIcon } from "../animated-icon/animated-icon"

export function ModeSwitch() {
	const { theme, setTheme } = useTheme()
	return (
		<div
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="cursor-pointer grid place-items-center"
		>
			<AnimatedIcon />
		</div>
	)
}
