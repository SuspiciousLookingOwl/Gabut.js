import { Message } from "discord.js";


export = {
	name: "google",
	description: "GOOGLE IT!!!",
	async execute(message: Message, args: string[]): Promise<string> {
		const url = `https://google.com/search?q=${encodeURIComponent(args.join(" "))}`;
		await message.channel.send(url);
		return url;
	}
};