import { useThree } from "@react-three/fiber"
import { Text } from "@react-three/drei"

interface TextProps {
	children: React.ReactNode
}
export const ResponsiveText = ({ children }: TextProps) => {
	const { viewport } = useThree()
	const color = "#ffffff"
	const fontSize = 0.08
	const maxWidth = 150
	const lineHeight = 1
	const letterSpacing = 0.2
	const textAlign = "center"
	return (
		<Text
			color={color}
			fontSize={fontSize}
			maxWidth={(viewport.width / 100) * maxWidth}
			lineHeight={lineHeight}
			letterSpacing={letterSpacing}
			textAlign={textAlign}
			anchorX="center"
			anchorY="middle"
			// position={[0, 0, 0]}
		>
			{children}
		</Text>
	)
}
