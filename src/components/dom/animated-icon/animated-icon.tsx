import { useTheme } from 'next-themes';
import { useEffect, useMemo } from 'react';
import { animated, useSpring } from '@react-spring/web';

export const AnimatedIcon = () => {
	const { theme } = useTheme();

	// Define properties based on the theme
	const properties = useMemo(() => {
		return {
			transform: theme === 'light' ? 'rotate(40deg)' : 'rotate(90deg)',
			opacity: theme === 'light' ? 1 : 0,
			opacityLines: theme === 'light' ? 0 : 1,
			r: theme === 'light' ? 10 : 5,
			cx: 12, // Static value since it's the same for both themes
			cy: 12, // Static value
			fill: theme === 'light' ? '#ACECA1' : '#6A7FDB' // Color changes according to the theme
		};
	}, [theme]);

	// Set up spring animation based on the properties
	const [{ transform, opacity, opacityLines, r, cx, cy, fill }, api] = useSpring(() => ({
		transform: properties.transform,
		opacity: properties.opacity,
		opacityLines: properties.opacityLines,
		r: properties.r,
		cx: properties.cx,
		cy: properties.cy,
		fill: properties.fill,
		config: { mass: 5, tension: 570, friction: 100, precision: 0.0001 }
	}));

	// Update the animation when the theme changes
	useEffect(() => {
		api.start(properties);
	}, [theme, api, properties]);

	return (
		<animated.svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke={fill} // Dynamically set stroke color based on the theme
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			style={{
				transform: transform,
				position: 'relative',
				display: 'grid',
				placeItems: 'center'
			}}
		>
			{/* Define the mask to clip the moon shape */}
			<mask id="mask">
				<rect x="0" y="0" width="100%" height="100%" fill="white" />
				{/* moon mask*/}
				<animated.circle cx="12" cy="2" r={r} fill="black" />
			</mask>

			{/* Sun Circle with mask applied */}
			<animated.circle cx={cx} cy={cy} r={r} fill={fill} mask="url(#mask)" />

			{/* Rays for the Sun / Moon with animated opacity */}
			<animated.g stroke={fill} style={{ opacity: opacityLines }}>
				<line x1="12" y1="1" x2="12" y2="3" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
				<line x1="1" y1="12" x2="3" y2="12" />
				<line x1="21" y1="12" x2="23" y2="12" />
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
			</animated.g>
		</animated.svg>
	);
};
