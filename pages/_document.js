import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head>
				<meta name="application-name" content="Where to eat" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Where to eat" />
				<meta name="description" content="Best app to find the nearest food truck" />
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />

				<meta name="theme-color" content="#000000" />

				<link rel="apple-touch-icon" href="/icon-512x512.png" />
				<link rel="apple-touch-icon" sizes="384x384" href="/icon-384x384.png" />
				<link rel="apple-touch-icon" sizes="256x256" href="/icon-256x256.png" />
				<link rel="apple-touch-icon" sizes="192x192" href="/icon-192x192.png" />

				<meta name="msapplication-config" content="/icons/browserconfig.xml" />
				<meta name="msapplication-TileColor" content="#2B5797" />
				<meta name="msapplication-tap-highlight" content="no" />

				<link rel="manifest" href="/manifest.json" />

				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
