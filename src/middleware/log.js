export function log({ next, to }) {
  console.log(to)
  return next()
}
