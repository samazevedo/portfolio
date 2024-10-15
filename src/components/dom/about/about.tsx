import Link from 'next/link';
import Image from 'next/image';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { Photo } from '@components/canvas/photo/photo';
import { CanvasConfig } from '@components/canvas/config/config';

const tools = [
	{ name: 'HTML', icon: '/icons/tech/html5.svg' },
	{ name: 'CSS', icon: '/icons/tech/css3.svg' },
	{ name: 'Sass', icon: '/icons/tech/sass.svg' },
	{ name: 'Bootstrap', icon: '/icons/tech/bootstrap.svg' },
	{ name: 'Styled Components', icon: '/icons/tech/styledcomponents.svg' },
	{ name: 'Tailwind CSS', icon: '/icons/tech/tailwindcss.svg' },
	{ name: 'JavaScript', icon: '/icons/tech/javascript.svg' },
	{ name: 'TypeScript', icon: '/icons/tech/typescript.svg' },
	{ name: 'React.js', icon: '/icons/tech/react.svg' },
	{ name: 'Next.js', icon: '/icons/tech/nextdotjs.svg' },
	{ name: 'Three.js', icon: '/icons/tech/threedotjs.svg' },
	{ name: 'webGL', icon: '/icons/tech/webgl.svg' },
	{ name: 'Node.js', icon: '/icons/tech/nodedotjs.svg' },
	{ name: 'MongoDB', icon: '/icons/tech/mongodb.svg' },
	{ name: 'Chakra UI', icon: '/icons/tech/chakraui.svg' },
	{ name: 'Corel Draw', icon: '/icons/tech/coreldraw.svg' }
	// bg-blue-100 dark:bg-blue-900
];
export default function About() {
	return (
		<section className="min-h-[100vh] bg-whiteT dark:bg-blackT" id="about w-full">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-start">
					<div className="space-y-2 mt-20">
						<h2>
							About <span className="text-lavanderT font-thin">Me</span>
						</h2>
						<p className="leading-5 md:leading-8">
							Hello! My name is <span className="text-lime-400">Samuel Azevedo</span>, and I am a passionate{' '}
							<span className="text-lime-400">Front-end Developer</span> and <span className="text-lime-400">Designer</span>. I
							specialize in creating modern, responsive, and interactive web applications that provide seamless user
							experiences.
						</p>
						<p className="leading-5 md:leading-8">
							With a keen eye for detail and a dedication to the craft, I bring ideas to life through code and design. Whether
							it's building from scratch or enhancing existing projects, I thrive on delivering high-quality results.
						</p>
						<p className="leading-5 md:leading-8">
							Currently, I am working as a freelancer, collaborating with clients to create web applications that not only look
							great but also function flawlessly. Let's build something amazing together!
						</p>
					</div>
					<div className="grid items-center rounded-full  w-60 h-60 md:w-96 md:h-96 bg-black overflow-hidden place-items-center"></div>
				</div>
			</div>
		</section>
	);
}
