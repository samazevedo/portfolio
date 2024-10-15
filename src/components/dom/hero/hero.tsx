import Link from 'next/link';
import Image from 'next/image';
import { Ring } from '@components/canvas/ring/ring';

import Socials from '../socials/socials';
import { View, GradientTexture, Sparkles, Html } from '@react-three/drei';
import { BG } from '@components/canvas/bg/bg';

export default function Hero() {
	// const { theme } = useTheme()
	// const bg = theme === "dark" ? "#1C1C1C" : "#8d8b8e"

	return (
		<section className="relative w-[100vw] h-[100vh]">
			<View className="absolute top-0 left-0 w-full h-full -z-10">
				<BG />
			</View>
			<div className="grid grid-rows-[1fr_1fr_0.5fr] place-items-center gap-5 pt-80 text-center">
				<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-opacity-90 drop-shadow-xl ">
					<span className="drop-shadow-xl text-greenT">Sam </span> <span className="font-thin text-lavanderT ">Azevedo</span>
				</h1>
				<div className="text-center space-y-4 max-w-2xl px-4 md:px-6 place-self-center mt-1">
					<p className="text-sm text-whiteT dark:text-whiteT  md:text-xl lg:text-xl font-thin ">
						Front End Web Developer | Designer
					</p>
				</div>

				<div className="flex flex-col gap-2 min-[400px]:flex-row self-end justify-center">
					<Socials />
				</div>
			</div>
		</section>
	);
}
