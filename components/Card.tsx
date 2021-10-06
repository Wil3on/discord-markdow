import { ClipboardCopyButton } from './ClipboardCopyButton'
import { DiscordMarkdownParser } from './DiscordMarkdownParser'

type CardProps = {
	input: string
}

export const Card: React.VFC<CardProps> = ({ input }) => {
	return (
		<div className="shadow-md h-[250px] w-[210px] rounded-lg overflow-hidden md:h-[270px] md:w-[250px]">
			<div className={`py-5 text-center md:py-7 md:text-xl bg-dark-light text-white `}>
				<DiscordMarkdownParser message={input} />
			</div>
			<div className="flex flex-col justify-between px-5 py-5 md:px-5 md:py-6">
				<ClipboardCopyButton type={'2'} message={input} />
				<p className="pt-3 text-white whitespace-pre-line text-md md:text-xl">{input}</p>
			</div>
		</div>
	)
}
