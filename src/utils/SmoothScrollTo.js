export default function SmoothScrollTo(elementId) {
	const element = document.getElementById(elementId);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
		});
	}
}
