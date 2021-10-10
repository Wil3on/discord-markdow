import Head from 'next/head'
import type { NextPage } from 'next'
import { MarkdownEditor } from '../components/MarkdownEditor'
import { Section } from '../components/Section'
import { FaDiscord } from 'react-icons/fa'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'

const Home: NextPage = () => {
	return (
		<>
			<div className="px-2 pt-10 pb-10 md:px-4">
				<header>
					<h1 className="flex flex-col items-center justify-center mb-1 md:mb-3 md:flex-row">
						<FaDiscord size={40} className="text-blue" />
						<span className="mt-1 text-lg font-bold text-white md:mt-0 md:ml-3 md:text-2xl">
							Discord Markdown Live Previewer
						</span>
					</h1>
				</header>
				<MarkdownEditor />
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
						<Card input={'***Bold Italics***'} />
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
