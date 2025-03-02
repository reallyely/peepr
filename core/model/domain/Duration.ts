export class Duration {
	/**
	 * Creates a Duration from a human-readable string (e.g. "1d 2h 3m 4s")
	 */
	static fromHumanReadable(humanReadable: string): Duration {
		let totalMs = 0;

		// Parse format: "1d 2h 3m 4s"
		const dayMatch = humanReadable.match(/(\d+)d/);
		if (dayMatch) {
			totalMs += Number.parseInt(dayMatch[1], 10) * 24 * 60 * 60 * 1000;
		}

		const hourMatch = humanReadable.match(/(\d+)h/);
		if (hourMatch) {
			totalMs += Number.parseInt(hourMatch[1], 10) * 60 * 60 * 1000;
		}

		const minuteMatch = humanReadable.match(/(\d+)m/);
		if (minuteMatch) {
			totalMs += Number.parseInt(minuteMatch[1], 10) * 60 * 1000;
		}

		const secondMatch = humanReadable.match(/(\d+)s/);
		if (secondMatch) {
			totalMs += Number.parseInt(secondMatch[1], 10) * 1000;
		}

		return new Duration(totalMs);
	}
	private readonly milliseconds: number;

	constructor(milliseconds = 0) {
		this.milliseconds = Math.max(0, milliseconds);
	}

	static fromMilliseconds(ms: number): Duration {
		return new Duration(ms);
	}

	static fromSeconds(seconds: number): Duration {
		return new Duration(seconds * 1000);
	}

	static fromMinutes(minutes: number): Duration {
		return new Duration(minutes * 60 * 1000);
	}

	static fromHours(hours: number): Duration {
		return new Duration(hours * 60 * 60 * 1000);
	}

	get inMilliseconds(): number {
		return this.milliseconds;
	}

	get inSeconds(): number {
		return Math.floor(this.milliseconds / 1000);
	}

	get inMinutes(): number {
		return Math.floor(this.inSeconds / 60);
	}

	get inHours(): number {
		return Math.floor(this.inMinutes / 60);
	}

	add(duration: Duration): Duration {
		return new Duration(this.milliseconds + duration.milliseconds);
	}
	subtract(duration: Duration): Duration {
		return new Duration(this.milliseconds - duration.milliseconds);
	}
	toHumanReadable(): string {
		const days = Math.floor(this.inHours / 24);
		const hours = this.inHours % 24;
		const minutes = this.inMinutes % 60;
		const seconds = this.inSeconds % 60;

		const parts: string[] = [];
		if (days > 0) parts.push(`${days}d`);
		if (hours > 0) parts.push(`${hours}h`);
		if (minutes > 0) parts.push(`${minutes}m`);
		if (seconds > 0) parts.push(`${seconds}s`);

		return parts.join(" ") || "0s";
	}
	toISO(): string {
		const hours = String(this.inHours).padStart(2, "0");
		const minutes = String(this.inMinutes % 60).padStart(2, "0");
		const seconds = String(this.inSeconds % 60).padStart(2, "0");
		return `PT${hours}H${minutes}M${seconds}S`;
	}
}
