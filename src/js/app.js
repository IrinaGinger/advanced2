export default function caracterSpecial({special}) {
  const result = [];
  for (let i = 0; i < special.length; i++) {
    let {id, name, description = 'Описание недоступно', icon} = special[i];
    result.push({id, name, description, icon});
  }
  return result;
}