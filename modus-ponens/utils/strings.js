export function getRoleAndName(displayName) {
  return displayName.split("/");
}

export function truncateName(name) {
  return name.length > 7 ? `${name.substring(0,7)}...` : name
}
