import { SetStateAction, useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdAddCircle } from 'react-icons/io'
import { ClipboardCopyButton } from './ClipboardCopyButton'
import { DiscordMarkdownParser } from './DiscordMarkdownParser'
import AutoTextarea from 'react-textarea-autosize'
import ReactTextareaAutocomplete from '@webscopeio/react-textarea-autocomplete'
import TextareaAutosize from 'react-autosize-textarea'

import React from 'react'

const defaultMessage: string = `hello`

type ItemProps = {
	entity: {
		name: string
		char: string
	}
}

type LoadingProps = {
	data: Array<{ name: string; char: string }>
}

const Loading = ({ data }: LoadingProps) => <div>Loading</div>

const Item = ({ entity: { name, char } }: ItemProps) => <div className="bg-white ">{`${name}: ${char}`}</div>

export const MarkdownEditor: React.VFC = () => {
	const [message, setMessage] = useState<string>(defaultMessage)
	return (
		<section className="px-10 pt-5 mx-auto md:max-w-screen-xl bg-navy">
			<div className="flex flex-col justify-center md:flex-row">
				<div className="flex flex-1 max-w-5xl px-4 py-6 rounded-lg bg-navy-light">
					<IoMdAddCircle size={35} className="text-gray" />
					<ReactTextareaAutocomplete
						onChange={(e) => setMessage(e.target.value)}
						placeholder="Message"
						className="w-full pt-1 mx-3 overflow-y-hidden text-xl text-white outline-none bg-navy-light placeholder-gray-light"
						// textAreaComponent={{ component: AutoTextarea, ref: `${message}` }}
						loadingComponent={Loading}
						containerStyle={{ flexGrow: 1, height: 600 }}
						trigger={{
							'*': {
								dataProvider: (token) => {
									return [
										{ name: 'italic', char: `*${token}*` },
										{ name: 'bold', char: `**${token}**` },
									]
								},
								component: Item,
								output: (item: { char }, trigger) => item.char,
							},
						}}
					/>
					<ClipboardCopyButton message={message} />
				</div>
				<div className="flex-1 max-w-5xl mt-5 md:ml-5 md:mt-0">
					<div className="flex p-4 text-white rounded-lg bg-navy-light ">
						<FaUserCircle size={40} className="text-gray min-w-[40px]" />
						<div className="w-full ml-3">
							<h4 className="text-xl font-light">
								you
								<span className="ml-2 text-sm text-gray-light">Today at 11:30 PM</span>
							</h4>
							<p className="text-xl whitespace-pre-line">
								<DiscordMarkdownParser message={message} />
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
