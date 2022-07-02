import { useStore } from '~/store';
import { Header, Container, Footer } from '~/layout';
function App() {
    const [state] = useStore();
    const { thermeColor } = state;
    return (
        <div className={thermeColor ? `app ${thermeColor}` : 'app Aqua'}>
            <Header />
            <Container />
            <Footer />
        </div>
    );
}

export default App;
