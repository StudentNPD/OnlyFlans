export function FlanCard({ flan }) {
  return (
    <div>
      <ul>
        <div className="cartita">
          <li> Nombre: {flan.name}</li>
          <li> Descripcion: {flan.description}</li>
          <li>
            <img
              src={flan.image_url}
              alt={flan.name}
              className="w-[300px] mx-auto"
            />
          </li>
          <li>
            {flan.is_private ? (
              <span>✅ {String(flan.is_private)}</span>
            ) : (
              <span>❌ {String(flan.is_private)}</span>
            )}
          </li>
        </div>
      </ul>
    </div>
  );
}
