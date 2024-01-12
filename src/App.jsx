import {
	Academics,
	Container,
	Footer,
	Header,
	Hero,
	Projects,
	Skills,
} from "./components/index";

function App() {
	return (
		<Container className="min-h-screen bg-[#001429] font-poppins overflow-clip">
			<Header />
			<Hero />
			<Skills />
			<Academics />
			<Projects />
			<Footer />
		</Container>
	);
}

export default App;
