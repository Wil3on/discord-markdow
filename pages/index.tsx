import type { NextPage } from 'next'
import { MarkdownEditor } from '../components/MarkdownEditor'
import { FaDiscord } from 'react-icons/fa'

const Home: NextPage = () => {
	return (
		<div className="h-screen px-3 py-10">
			<h1 className="flex flex-col items-center justify-center mb-1 md:mb-3 md:flex-row">
				<FaDiscord size={40} className="text-blue" />
				<span className="mt-1 text-lg font-bold md:mt-0 md:ml-3 md:text-2xl text-while">
					Discord Markdown Live Previewer
				</span>
			</h1>
			<MarkdownEditor />
		</div>
	)
}

export default Home
