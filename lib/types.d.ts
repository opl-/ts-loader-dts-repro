import {Compiler} from 'webpack';

declare module 'webpack' {
	interface Compiler {
		extraMethod(): void;
	}
}
