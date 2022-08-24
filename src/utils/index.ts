export const getInitials = (name: string) => {
  const fullName = name.split(" ");

  const firstNameInitial = fullName.shift()!.charAt(0);
  const lastNameInitial = fullName.pop()!.charAt(0);

  var result = firstNameInitial;
  if (lastNameInitial) result += lastNameInitial;

  return result.toUpperCase();
};
