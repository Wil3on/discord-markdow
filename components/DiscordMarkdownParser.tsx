import { useState, useEffect } from 'react'
import parse from 'html-react-parser'

type DiscordMarkdownParserProps = {
	message: string
}

const convertDiscordMarkdown = (message: string) => {
	const markdownedMessage = message
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
		.replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
		.replace(
			/^\>(.*$)/gim,
			'<backquote className="inline-block pl-2 border-l-4 border-gray-light">$1</backquote>'
		) // blockquote
	console.log(markdownedMessage)
	return markdownedMessage
}

export const DiscordMarkdownParser: React.VFC<DiscordMarkdownParserProps> = ({ message }) => {
	const [convertedMessage, setConvertedMessage] = useState<string>('')
	useEffect(() => {
		setConvertedMessage(convertDiscordMarkdown(message))
	}, [message])
	return <> {parse(`${convertedMessage}`)} </>
}
