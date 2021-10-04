type SectionProps = {
	heading: string
	children: React.ReactNode
}

export const Section: React.VFC<SectionProps> = ({ heading, children }) => {
	return (
		<section className="px-10 pt-10 mx-auto md:max-w-screen-xl ">
			<div className="py-6 mx-auto rounded-lg px-7 bg-navy-light">
				<h2 className="text-2xl text-left text-white">{heading}</h2>
				{children}
			</div>
		</section>
	)
}
