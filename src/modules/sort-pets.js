import renderPets from '../modules/render-pets';

function sortPetsByName(e, pets, petsContent)  {
  if (!petsContent) return;
  if (e.target.options.selectedIndex == "1") {
    const sortPets = [...pets].sort(function(a,b) {
      const aName = a.name;
      const bName = b.name;
      return aName >= bName ? 1: -1;
    });
    renderPets(sortPets, petsContent);
  };
  if (e.target.options.selectedIndex  == "2") {
    const sortPets = [...pets].sort(function(a,b) {
      const aName = a.name;
      const bName = b.name;
      return aName >= bName ? -1: 1;
    });
    renderPets(sortPets, petsContent);
  };
}

export default sortPetsByName;
