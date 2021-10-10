import { ClipboardCopyButton } from './ClipboardCopyButton'
import { DiscordMarkdownParser } from './DiscordMarkdownParser'

type CardProps = {
	input: string
}

export const Card: React.VFC<CardProps> = ({ input }) => {
	return (
		<div className="overflow-hidden rounded-lg shadow-md h-[250px]">
			<div
				className={` text-center md:text-xl bg-dark-light text-white h-[85px] flex justify-center items-center px-5 py-3`}
			>
				<DiscordMarkdownParser message={input} />
			</div>
			<div className="flex flex-col justify-between px-5 py-5 md:px-5 md:py-6">
				<ClipboardCopyButton type={'2'} message={input} />
				<p className="pt-3 text-white whitespace-pre-line text-md md:text-xl">{input}</p>
			</div>
		</div>
	)
}
