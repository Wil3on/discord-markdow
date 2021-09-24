import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { FaUserCircle } from 'react-icons/fa'

export const MarkdownEditor: React.VFC = () => {
	const [text, setText] = useState<string>('')
	return (
		<section className="bg-navy">
			<div className="flex justify-center flex-col md:flex-row">
				<div className="flex-1 m-3 max-w-5xl">
					<TextareaAutosize
						className="bg-navy-light w-full px-4 py-6 rounded-lg text-while placeholder-gray-light outline-none"
						placeholder="Message"
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="flex-1 m-3 max-w-5xl">
					<div className="bg-navy-light p-4 rounded-lg text-while flex  ">
						<FaUserCircle size={40} className="text-gray min-w-[40px]" />
						<div className="ml-3">
							<h4 className="text-xl font-light">
								you
								<span className="ml-2 text-sm text-gray-light">Today at 11:30 PM</span>
							</h4>
							<p className="whitespace-pre-line">{text}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
