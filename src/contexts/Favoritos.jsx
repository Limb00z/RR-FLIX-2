import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "MeusFavoritos";

export default function FavoritosProvider({ children }) {
  const [favorito, setFavorito] = useState([]);

  return (
    <FavoritosContext.Provider value={{ favorito, setFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

//Hook personalizado
export function useFavoritoContext() {
  const { favorito, setFavorito } = useContext(FavoritosContext);

  function addFavorito(novoFavorito) {
    //Verificar se tem item favorito repetido
    const repetidoFavorito = favorito.some(
      (item) => item.id === novoFavorito.id
    );

    //nova lista recebe lista anterior
    let novaLista = [...favorito];

    //verificar se não tem repetido e adicionar o item na lista de favoritos
    if (!repetidoFavorito) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    //se for repetido, ele será retirado da lista
    novaLista = favorito.filter((item) => item.id !== novoFavorito.id);

    return setFavorito(novaLista);
  }
    return {
        favorito,
        addFavorito
  }
}
