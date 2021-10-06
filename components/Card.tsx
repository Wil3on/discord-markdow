import parse from 'html-react-parser'

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
					<button className="self-end px-2 py-1 text-sm text-white rounded md:py-2 md:px-3 md:text-md hover:opacity-80 bg-gray-exlight max-w-max">
						Copy
					</button>
					<p className="text-white text-md md:text-xl">{parse(`${input}`)}</p>
				</div>
			</div>
		</>
	)
}
