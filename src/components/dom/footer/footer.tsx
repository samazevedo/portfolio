import Link from 'next/link';
import Socials from '../socials/socials';
export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="grid grid-rows-2 gap-2 sm:grid-cols-2 py-6 w-full shrink-0 place-items-center px-4 md:px-6 border-t">
			<p className="text-xs">&copy; {currentYear} Sam Azevedo - Portfolio | All rights reserved.</p>
			<nav className="grid place-items-center ">
				<ul className="w-2/3 sm:w-3/4">
					<Socials />
				</ul>
			</nav>
		</footer>
	);
}
