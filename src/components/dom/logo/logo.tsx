import { SmoothLink } from '../smooth-link/smooth-link';

export default function Logo() {
	return (
		<SmoothLink href="home" className=" text-xl inline-flex items-center gap-2" prefetch={false}>
			<span className="drop-shadow-xl text-greenT">Sam </span> <span className="font-thin text-lavanderT">Azevedo</span>
		</SmoothLink>
	);
}
