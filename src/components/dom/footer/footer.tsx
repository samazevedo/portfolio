import Link from "next/link"
export default function Footer() {
	const currentYear = new Date().getFullYear()
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
			<p className="text-xs text-gray-500 dark:text-gray-400">
				&copy; {currentYear} Sam Azevedo - Portfolio | All rights reserved.
			</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<ul>
					<li> github.com/samazevedo </li>
				</ul>
			</nav>
		</footer>
	)
}
