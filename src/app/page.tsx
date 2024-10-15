'use client';
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import About from '@components/dom/about/about';
import Contact from '@components/dom/contact/contact';
import Hero from '@components/dom/hero/hero';
import Portfolio from '@components/dom/portfolio/portfolio';
import Header from '@components/dom/header/header';
import { useLenis } from '@hooks/useLenis';
import Footer from '@components/dom/footer/footer';
import { CanvasConfig } from '@components/canvas/config/config';
import { BG } from '@components/canvas/bg/bg';

export default function Home() {
	useLenis();

	const domRef = useRef<HTMLDivElement>(null!);

	return (
		<div ref={domRef} className="text-neutral-800 dark:text-neutral-100 w-full h-full bg-whiteT dark:bg-blackT">
			<Canvas
				eventSource={domRef}
				dpr={[1, 2]}
				gl={{ antialias: true }}
				style={{
					pointerEvents: 'none',
					position: 'absolute',
					display: 'grid',
					gridTemplateRows: '1fr ',
					gridTemplateColumns: '1fr',
					placeItems: 'center',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
			>
				<CanvasConfig />
				<Suspense fallback={null}>
					{/* <View.Port /> */}
					<BG />
				</Suspense>
			</Canvas>
			<main className="w-full h-full m-auto grid place-items-center">
				<Header />
				<Hero />
				<About />
				<Portfolio />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
