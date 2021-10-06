import { useState } from 'react'
import { FiClipboard, FiCheck } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'

type ButtonType = '1' | '2'

type ClipboardCopyButtonProps = {
	type?: ButtonType
	message: string
}

export const ClipboardCopyButton: React.VFC<ClipboardCopyButtonProps> = ({ type, message }) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)
	const handleClipboardCopy = (message: string) => {
		navigator.clipboard.writeText(message.replaceAll('<br>', ''))
		setIsClicked((isClicked) => !isClicked)
		if (type === '1') {
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
		if (type === '2') {
			setTimeout(() => {
				setIsClicked((isClicked) => !isClicked)
			}, 1000)
		}
	}
	switch (type) {
		case '1': {
			return (
				<button
					onClick={() => handleClipboardCopy(message)}
					className={`h-content relative px-1 py-1 border-2 rounded ${
						isClicked ? 'border-green' : 'border-gray-light'
					} hover:bg-gray-light max-h-content`}
					disabled={isClicked}
				>
					{isClicked ? <FiCheck size={25} className="text-green" /> : <FiClipboard size={25} className="text-gray" />}
					<Toaster
						containerStyle={{
							position: 'absolute',
							top: 50,
						}}
					/>
				</button>
			)
		}
		case '2': {
			return (
				<button
					onClick={() => handleClipboardCopy(message)}
					disabled={isClicked}
					className="self-end px-2 py-1 text-sm text-white rounded md:py-2 md:px-3 md:text-md hover:opacity-80 bg-gray-exlight max-w-max"
				>
					{isClicked ? 'Copied!' : 'Copy'}
				</button>
			)
		}
		default: {
			return null
		}
	}
}

ClipboardCopyButton.defaultProps = {
	type: '1',
}
