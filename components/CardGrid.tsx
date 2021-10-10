type CardGrid = {
	children: React.ReactNode
}

export const CardGrid: React.VFC<CardGrid> = ({ children }) => {
	return <div className="grid gap-16 grid-cols-auto-fill">{children}</div>
}
