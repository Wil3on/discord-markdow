import { useState, useEffect } from 'react'
import parse from 'html-react-parser'

type DiscordMarkdownParserProps = {
	message: string
}

const convertDiscordMarkdown = (message: string) => {
	const markdownedMessage = message
		.replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>') // bold text
		.replace(/\*(.*?)\*/gim, '<i>$1</i>') // italic text_1
		.replace(/\_\_(.*?)\_\_/gim, '<u>$1</u>') // underline text
		.replace(/\_(.*?)\_/gim, '<i>$1</i>') // italic text_2
		.replace(/\~\~(.*?)\~\~/gim, '<del>$1</del>') // strikethrough
		.replace(
			/\`\`\`diff\n((^-.*|\n)*)\n\`\`\`/gm,
			'<span className="inline-block w-full px-3 py-2 rounded border-3 text-red bg-dark-light border-dark">$1</span>'
		) // Red Highlighting 🟥
		.replace(
			/\`\`\`fix\n((.*|\n)*)\n\`\`\`/gm,
			'<span className="inline-block w-full px-3 py-2 rounded border-3 text-yellow bg-dark-light border-dark">$1</span>'
		) // Yellow Highlighting 🟨
		.replace(
			/\`\`\`((.|\n)*)\`\`\`/gim,
			'<span className="inline-block w-full px-3 py-2 rounded border-3 bg-dark-light border-dark ">$1</span>'
		) // multi-line blockcode
		.replace(/\`(.*?)\`/gim, '<span className="p-1 rounded bg-dark-light">$1</span>') // blockcode
		.replace(
			/\>\>\>((.|\n)*)/gim,
			'<backquote className="inline-block px-3 py-2 pl-2 border-l-4 border-gray-light ">$1</backquote>'
		) // multi-line blockquote
		.replace(/^\>(.*$)/gim, '<backquote className="inline-block pl-2 border-l-4 border-gray-light">$1</backquote>') // single-line blockquote
	return markdownedMessage
}

export const DiscordMarkdownParser: React.VFC<DiscordMarkdownParserProps> = ({ message }) => {
	const [convertedMessage, setConvertedMessage] = useState<string>('')
	useEffect(() => {
		setConvertedMessage(convertDiscordMarkdown(message))
	}, [message])
	return <> {parse(`${convertedMessage}`)} </>
}
