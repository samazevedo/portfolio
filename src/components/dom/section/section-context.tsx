import { createContext, useContext, useState } from "react"

const SectionContext = createContext<any>(null)

export const useSection = () => {
	return useContext(SectionContext)
}

export const SectionProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [section, setSection] = useState<string | null>(null)
	return (
		<SectionContext.Provider value={{ section, setSection }}>
			{children}
		</SectionContext.Provider>
	)
}
