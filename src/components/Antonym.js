const Antonym = ({ mean }) => {
    return (
      <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms?.map((ant) => <li>{ant}</li>)
        )
      )}
    </div>
    );
  };
  
  export default Antonym;