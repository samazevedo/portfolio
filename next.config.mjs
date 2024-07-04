/** @type {import('next').NextConfig} */
const nextConfig = {
	// add glsl modules
	webpack(config, { isServer }) {
		config.module.rules.push({
			test: /\.glsl$|\.vs|\.fs\.vert$|\.frag$/,
			exclude: /node_modules/,
			use: "raw-loader",
		})
		return config
	},
}
export default nextConfig
