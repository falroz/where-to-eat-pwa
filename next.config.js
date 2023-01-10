const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	disable: false,
})

const nextConfig = {
	reactStrictMode: true,
}

module.exports = withPWA(nextConfig)
