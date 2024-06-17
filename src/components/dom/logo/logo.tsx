import Link from "next/link"

export default function Logo() {
	return (
		<Link href="#" className="inline-flex items-center gap-2" prefetch={false}>
			<span className="text-xl font-bold">Sam Azevedo</span>
		</Link>
	)
}
