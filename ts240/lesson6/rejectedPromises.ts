/*
Promise.reject("rejected").catch((error: unknown) => {
  if (typeof error === "string") return error;
  else if (error instanceof Error) return error.message;
  else throw new Error("We can't handle that type of error");
})
*/

/*
async function handleError(): Promise<string> {
  try {
    const rejectedPromise: Promise<string> = Promise.reject("error");
    const result: string = await rejectedPromise;
    return result;
  } catch (error: unknown) {
    if (typeof error === "string") {
      return error;
    }

    throw new Error("We can't handle that type of error!");
  }
}
*/

async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log("An unknown error occurred");
    }
  }
}
