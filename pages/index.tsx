import Head from 'next/head'
import type { NextPage } from 'next'
import { MarkdownEditor } from '../components/MarkdownEditor'
import { Section } from '../components/Section'
import { FaDiscord } from 'react-icons/fa'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'
import { useRef, MutableRefObject } from 'react'

const Home: NextPage = () => {
	const editorRef = useRef<MutableRefObject<HTMLTextAreaElement | null>>(null);

	const insertCode = () => {
		if (editorRef.current && editorRef.current.value !== undefined) {
			editorRef.current.value += '\n```\nYour code here\n```\n';
		}
	};

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<title>Discord Markdown Live Previewer</title>

				{/* Search Engine */}
				<meta name="description" content="This is the Discord markdown editor with live preview." />
				{/* Schema.org for Google */}
				<meta itemProp="name" content="Discord Markdown Live Previewer" />
				<meta itemProp="description" content="This is the Discord markdown editor with live preview." />
				{/* Twitter */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Discord Markdown Live Previewer" />
				<meta name="twitter:description" content="This is the Discord markdown editor with live preview." />
				<meta name="twitter:image" content="/open-graph-logo.png" />
				{/* Open Graph general (Facebook, Pinterest & Google+) */}
				<meta property="og:title" content="Discord Markdown Live Previewer" />
				<meta property="og:description" content="This is the Discord markdown editor with live preview." />
				<meta property="og:url" content="https://discord-markdown-live-previewer.vercel.app/" />
				<meta property="og:site_name" content="Discord Markdown Live Previewer" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/open-graph-logo.png" />
				<meta property="og:image:type" content="image/png" />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />

				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			</Head>

			<div className="px-2 pt-10 pb-10 md:px-4">
				<header>
					<h1 className="flex flex-col items-center justify-center mb-1 md:mb-3 md:flex-row">
						<FaDiscord size={40} className="text-blue" />
						<span className="mt-1 text-lg font-bold text-white md:mt-0 md:ml-3 md:text-2xl">
							Discord Markdown Live Previewer
						</span>
					</h1>
				</header>
				<MarkdownEditor ref={editorRef} />
				<Section heading="About">
					<p className="pt-2 text-base text-white">
						This app will allow you to see the actual message you&apos;ll send on discord. The reason behind creating
						this app is whenever I want to format my text on discord, such as making the text bold or colorized. I am
						not always 100% sure if the markdown will output the way I want it to be. So, I needed something to preview
						my markdown before submitting it.
					</p>
				</Section>
				<Section heading="Feature">
					<div className="pt-7" />
					<button onClick={insertCode} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
						Insert Code
					</button>
					<CardGrid>
						<Card input={'*Italics*'} />
						<Card input={'**Bold**'} />
						<Card input={'***Bold Italics***'} />
						<Card input={'__Underline__'} />
						<Card input={'__*Underline Italics*__'} />
						<Card input={'__**Underline Bold**__'} />
						<Card input={'__***Underline Bold Italics***__'} />
						<Card input={'~~Strikethrough~~'} />
						<Card input={`>Block Quotes`} />
						<Card
							input={`>>>Multiline
Block Quotes`}
						/>
						<Card input={'`Code Blocks`'} />
						<Card
							input={`\`\`\`MultiLine
Code Blocks\`\`\``}
						/>
						<Card
							input={`\`\`\`diff
- Red 
\`\`\``}
						/>
						<Card
							input={`\`\`\`fix
Yellow
\`\`\``}
						/>
						<Card
							input={`\`\`\`css
[ Orange ]
\`\`\``}
						/>
						<Card
							input={`\`\`\`diff
+ Light Green 
\`\`\``}
						/>
						<Card
							input={`\`\`\`bash
"Light Blue"
\`\`\``}
						/>
						<Card
							input={`\`\`\`ini
[ Dark Blue ]
\`\`\``}
						/>
					</CardGrid>
				</Section>
			</div>
		</>
	)
}

export default Home
