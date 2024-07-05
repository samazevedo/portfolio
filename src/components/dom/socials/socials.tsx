import Image from "next/image"
import { useTheme } from "next-themes"
export default function Socials() {
	const { theme } = useTheme()
	return (
		<div className="grid grid-cols-4 place-items-center gap-4 text-center ">
			{SocialIcons.map((social) => (
				<a key={social.name} href={social.link} target="_blank" rel="noreferrer">
					<Image
						src={social.src}
						alt={social.name}
						color={theme === "dark" ? "white" : "black"}
						width={35}
						height={35}
					/>
				</a>
			))}
		</div>
	)
}

const SocialIcons = [
	{
		name: "twitter",
		src: "/icons/socials/x.svg",
		link: "https://twitter.com/SamAzevedo4",
	},
	{
		name: "github",
		src: "/icons/socials/github.svg",
		link: "https://github.com/samazevedo",
	},
	{
		name: "linkedin",
		src: "/icons/socials/linkedin.svg",
		link: "https://www.linkedin.com/in/samuel-azevedo-908a5b53/",
	},
	{
		name: "behance",
		src: "/icons/socials/behance.svg",
		link: "https://www.behance.net/samazevedo",
	},
]
