type CardGrid = {
	children: React.ReactNode
}

export const CardGrid: React.VFC<CardGrid> = ({ children }) => {
	return (
		<div className="grid grid-cols-1 gap-5 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{children}
		</div>
	)
}
