import App from './App';
import { render } from "./config/jest/test-utils.tsx";

describe('renders <App /> component', () => {
	it("should be available in the document", function() {
		const { container } = render(<App />);
		expect(container).toBeInTheDocument();
		expect(container.firstChild).not.toBeEmptyDOMElement();
	});
});