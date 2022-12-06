import CardCatalog from '../../components/CardCatalog';
import Header from '../../components/Header';
import './styles.css';

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section className="ct-container">
          <h3 className='ct-title-section ct-mg-top-25 ct-mg-bottom-25'>Venha nos visitar</h3>
          <CardCatalog />
          <CardCatalog />
          

        </section>

        <section className="ClassName">

        </section>
      </main>
    </>
  );
}