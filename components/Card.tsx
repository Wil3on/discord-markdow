import parse from 'html-react-parser'
import { ClipboardCopyButton } from './ClipboardCopyButton'

type CardProps = {
	output: string
	outputStyle: string
	input: string
}

export const Card: React.VFC<CardProps> = ({ output, outputStyle, input }) => {
	return (
		<>
			<div className="shadow-md h-[200px] w-[200px] rounded-lg overflow-hidden md:h-[270px] md:w-[250px]">
				<p className={`py-5 text-center md:py-7 md:text-xl bg-dark-light ${outputStyle}`}>{output}</p>
				<div className="flex flex-col justify-between px-5 py-5 md:px-5 md:py-6">
					<ClipboardCopyButton type={'2'} message={input} />
					<p className="text-white text-md md:text-xl">{parse(`${input}`)}</p>
				</div>
			</div>
		</>
	)
}
