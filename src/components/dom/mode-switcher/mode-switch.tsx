"use client"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { AnimatedIcon } from "../animated-icon/animated-icon"

export function ModeSwitch() {
	const { theme, setTheme } = useTheme()
	return (
		<Button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			variant="ghost"
			className="w-9 h-9 p-0 justify-self-end hidden md:grid "
		>
			<AnimatedIcon />
		</Button>
	)
}
