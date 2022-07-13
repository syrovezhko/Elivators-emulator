export async function delay (t) {
  await new Promise(resolve => setTimeout(resolve, t));
}