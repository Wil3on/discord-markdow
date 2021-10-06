import type { NextPage } from 'next'
import { MarkdownEditor } from '../components/MarkdownEditor'
import { Section } from '../components/Section'
import { FaDiscord } from 'react-icons/fa'
import { Card } from '../components/Card'
import { CardGrid } from '../components/CardGrid'

const Home: NextPage = () => {
	return (
		<>
			<header className="pt-10">
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
					This app will allow you to see the actual message you&apos;ll send on discord. The reason behind creating this
					app is whenever I want to format my text on discord, such as making the text bold or colorized. I am not
					always 100% sure if the markdown will output the way I want it to be. So, I needed something to preview my
					markdown before submitting it.
				</p>
			</Section>
			<Section heading="Feature">
				<div className="pt-5" />
				<CardGrid>
					<Card
						output="- Red Highlighting"
						outputStyle="text-red"
						input={`\`\`\`diff<br>
- Red Highlighting<br>
\`\`\``}
					/>
					<Card output="- Red Highlighting" outputStyle="text-red" input="```diff<br>- Red Highlighting<br> ```" />
					<Card output="- Red Highlighting" outputStyle="text-red" input="```diff<br>- Red Highlighting<br> ```" />
					<Card output="- Red Highlighting" outputStyle="text-red" input="```diff<br>- Red Highlighting<br> ```" />
				</CardGrid>
			</Section>
		</>
	)
}

export default Home
