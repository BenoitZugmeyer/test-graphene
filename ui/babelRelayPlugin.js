/*eslint no-console: 0*/
const getBabelRelayPlugin = require("babel-relay-plugin")
const child_process = require("child_process")
const path = require("path")

const bin = process.env.VIRTUAL_ENV ?
  path.join(process.env.VIRTUAL_ENV, "bin", "python") :
  "python"

const p = child_process.spawnSync(bin, [
  path.join(__dirname, "..", "test_graphene", "schema.py"),
  "--json",
])

const schema = p.stdout.toString("utf-8")

if (p.status !== 0) {
  console.log("Error in babelRelayPlugin while generating the graphql schema:")
  console.log(p.stderr.toString())
  process.exit(1)
}

module.exports = getBabelRelayPlugin(JSON.parse(schema), {
  abortOnError: true,
})
