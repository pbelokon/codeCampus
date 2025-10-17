const ContentHero = ({ title, abstract }) => {
  return (
    <header>
      <div className="content-header">
        <h1>{title}</h1>
        <p>{abstract}</p>
      </div>
    </header>
  );
};

export default ContentHero;
