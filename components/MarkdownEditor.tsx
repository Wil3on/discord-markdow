import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdAddCircle } from 'react-icons/io'
import { ClipboardCopyButton } from './ClipboardCopyButton'
import { DiscordMarkdownParser } from './DiscordMarkdownParser'

const defaultMessage: string = `1. *italics*
2. **bold**
3. ***bold italics***
4. __underline__
5. __*underline italics*__
6. __**underline bold**__
7. __***underline bold italics***__
8. ~~Strikethrough~~
9. \`one-line code blocks\`
10. 
\`\`\`multiline
code blocks\`\`\`
11. 
> single-line blockquote
12.
\`\`\`diff
- Red Heighlighting
\`\`\`
13. 
>>> multiline
blockquotes`

export const MarkdownEditor: React.VFC = () => {
	const [message, setMessage] = useState<string>(defaultMessage)
	return (
		<section className="mx-auto md:max-w-screen-xl bg-navy">
			<div className="flex flex-col justify-center md:flex-row">
				<div className="flex flex-1 max-w-5xl px-4 py-6 m-3 rounded-lg bg-navy-light">
					<IoMdAddCircle size={35} className="text-gray" />
					<TextareaAutosize
						className="w-full pt-1 mx-3 text-xl outline-none bg-navy-light text-while placeholder-gray-light"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<ClipboardCopyButton message={message} />
				</div>
				<div className="flex-1 max-w-5xl m-3">
					<div className="flex p-4 rounded-lg bg-navy-light text-while ">
						<FaUserCircle size={40} className="text-gray min-w-[40px]" />
						<div className="w-full ml-3">
							<h4 className="text-xl font-light">
								you
								<span className="ml-2 text-sm text-gray-light">Today at 11:30 PM</span>
							</h4>
							<p className="text-xl whitespace-pre-line">
								<DiscordMarkdownParser message={message} />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
