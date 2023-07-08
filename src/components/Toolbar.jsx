const Toolbar = ({ filters, selected, onSelectFilter }) => (
    <div className="toolbar"> 
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onSelectFilter(filter)}
          style={{ fontWeight: filter === selected ? 'bold' : 'normal' }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
  
export default Toolbar;
  