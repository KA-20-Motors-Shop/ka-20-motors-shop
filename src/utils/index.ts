export const getInitials = (name: string) => {
  const fullName = name.split(" ");

  const firstNameInitial = fullName.shift()!.charAt(0);
  const lastNameInitial = fullName.pop()!.charAt(0);

  var result = firstNameInitial;
  if (lastNameInitial) result += lastNameInitial;

  return result.toUpperCase();
};

export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
