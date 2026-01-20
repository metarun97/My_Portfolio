import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainRoutes from './routes/mainRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
};

export default App;
