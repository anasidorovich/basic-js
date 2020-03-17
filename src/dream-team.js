module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .filter(member => typeof member === 'string')
      .map(member => member.trim().charAt(0).toUpperCase())
      .sort()
      .join('');
  }
  return false;
};
