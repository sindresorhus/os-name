/// <reference types="node"/>

/**
Get the name of the current operating system.

By default, the name of the current operating system is returned.

@param platform - Custom platform name.
@param release - Custom release name.
*/
export default function osName(): string;
export default function osName(
	platform: NodeJS.Platform,
	release: string
): string;
