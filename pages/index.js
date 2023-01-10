import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Where to eat</title>
				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover" />
			</Head>
			<main className="grid place-content-center">
				<h1 className="text-white">Hello Where to eat PWA!!!</h1>
			</main>
		</>
	)
}
