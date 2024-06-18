/** @type {import('next').NextConfig} */
const nextConfig = {
	// add glsl modules
	webpack(config) {
		config.module.rules.push({
			test: /\.glsl$|\.vert$|\.frag$/,
			use: "raw-loader",
		})
		return config
	},
}
export default nextConfig
