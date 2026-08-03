/*
function calculateRectangleArea(
  width: number,
  height: number,
  options: { unit?: string } = {}
): string {
  const area = width * height;
  return `${area} ${options.unit ?? "sq. units"}`
}
*/

/*
function calculateRectangleArea(
  width: number,
  height: number,
  { unit = "sq. units" }: { unit?: string } = {}
): string {
  const area = width * height;
  return `${area} ${unit}`;
}
*/

/*
interface RectangleOptions {
  unit?: string;
}

function calculateRectangleArea(
  width: number,
  height: number,
  options: RectangleOptions = {}
): string {
  const unit = options.unit ?? "sq. units";
  const area = width * height;
  return `${area} ${unit}`;
}
*/

type NameOptions = {
  firstName?: string;
  lastName?: string;
  title?: string;
}

function formatName({
  firstName = "John",
  lastName = "Doe"
}: NameOptions): string {
  const firstName = options.firstName;
  const lastName = options.lastName;
  const title = options.title ? `${options.title}` : "";
  return `${title}${title ? ' ' : ''}${firstName} ${lastName}`;
}

const formattedName = formatName({
  firstName: "Jane",
  lastName: "Smith",
  title: "Dr.",
})

console.log(formattedName); // "Dr. Jane Smith"
console.log(formatName({})); // John Doe