import type { IDocument } from './document'

export interface IUser extends IDocument {
	displayName: string
	email: string
	photoURL: string | null
}
