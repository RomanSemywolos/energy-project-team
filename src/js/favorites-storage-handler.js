export function removeExerciseFromFavorites(exerciseID) {
    let data = getFavoritesData();
    const exercise = data.find(e => e._id === exerciseID);
    if (!exercise) return false;
    const updatedFavorites = data.filter(e => e._id !== exerciseID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    return true;
  }
  
  export function getFavoritesData() {
    // 1. Retrieve the data from localStorage
    const retrievedData = localStorage.getItem('favorites');
    // 2. Convert the retrieved data back to an array
    return JSON.parse(retrievedData) || [];
  }