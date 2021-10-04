import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdAddCircle } from 'react-icons/io'
import { ClipboardCopyButton } from './ClipboardCopyButton'
import { DiscordMarkdownParser } from './DiscordMarkdownParser'

const defaultMessage: string = `
1.
\`\`\`diff
- Red Highlighting
\`\`\`
2.
\`\`\`css
[ Orange Highlighting ]
\`\`\`
3.
\`\`\`diff
+ Light Green Highlighting
\`\`\`
4.
\`\`\`bash
" Light Blue Highlighting "
\`\`\`
5.
\`\`\`ini
[ Dark Blue Highlighting ]
\`\`\`
6.
\`\`\`fix
Yellow Highlighting
\`\`\``

export const MarkdownEditor: React.VFC = () => {
	const [message, setMessage] = useState<string>(defaultMessage)
	return (
		<section className="px-10 pt-5 mx-auto md:max-w-screen-xl bg-navy">
			<div className="flex flex-col justify-center md:flex-row">
				<div className="flex flex-1 max-w-5xl px-4 py-6 rounded-lg bg-navy-light">
					<IoMdAddCircle size={35} className="text-gray" />
					<TextareaAutosize
						className="w-full pt-1 mx-3 overflow-y-hidden text-xl text-white outline-none bg-navy-light placeholder-gray-light"
						placeholder="Message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<ClipboardCopyButton message={message} />
				</div>
				<div className="flex-1 max-w-5xl mt-5 md:ml-5 md:mt-0">
					<div className="flex p-4 text-white rounded-lg bg-navy-light ">
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
