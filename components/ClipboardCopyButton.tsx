import { useState } from 'react'
import { FiClipboard, FiCheck } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'

type ClipboardCopyButtonProps = {
	message: string
}

export const ClipboardCopyButton: React.VFC<ClipboardCopyButtonProps> = ({ message }) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)
	const handleClipboardCopy = (message: string) => {
		navigator.clipboard.writeText(message)
		setIsClicked((isClicked) => !isClicked)
		toast('Copied!', {
			style: {
				backgroundColor: '#222222',
				color: '#fff',
			},
		})
		setTimeout(() => {
			setIsClicked((isClicked) => !isClicked)
		}, 4000)
	}
	return (
		<button
			onClick={() => handleClipboardCopy(message)}
			className={`relative px-1 py-1 border-2 rounded ${
				isClicked ? 'border-green' : 'border-gray-light'
			} hover:bg-gray-light max-h-content`}
			disabled={isClicked}
		>
			{isClicked ? (
				<FiCheck size={25} className="text-green" />
			) : (
				<FiClipboard size={25} className="text-gray" />
			)}
			<Toaster
				containerStyle={{
					position: 'absolute',
					top: 50,
				}}
			/>
		</button>
	)
}
