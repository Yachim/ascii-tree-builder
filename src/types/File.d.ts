import type { FileType } from ".";


type File = {
	name: string;
	type: FileType;
	children: File[];
}

export default File;
