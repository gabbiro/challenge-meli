import './style.scss';

function Breadcrumb({ categories }) {
  return (
    <section className="breadcrumb-list">
      {categories?.map((category) => category.name).join(' > ')}
    </section>
  );
}

export default Breadcrumb;
