import renderPets from './render-pets';

function sortPetsByName(e, pets, petsContent) {
  if (!pets || !petsContent) return;
  const { value } = e.target;
  const sortPets = [...pets];
  if (value === 'ASC') {
    sortPets.sort((a, b) => {
      const aName = a.name;
      const bName = b.name;
      return aName >= bName ? 1 : -1;
    });
  } else {
    sortPets.sort((a, b) => {
      const aName = a.name;
      const bName = b.name;
      return aName >= bName ? -1 : 1;
    });
  }
  renderPets(sortPets, petsContent);
}

export default sortPetsByName;
