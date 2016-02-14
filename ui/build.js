/*eslint no-console: 0*/
import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import pathModule from "path"

const path = (p) => pathModule.join(__dirname, "..", ...p.split("/"))

const config = {
  entry: path("ui/src/index.js"),

  output: {
    path: path("test_graphene/static"),
    publicPath: "/static/",
    filename: "bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Test Graphene",
    }),
  ],
}

const compiler = webpack(config)

function handleResults(error, stats) {
  if (error) {
    console.log(error.stack || error)
    return
  }
  console.log(stats.toString({ colors: true }))
}

if (process.argv[2] === "--watch") {
  compiler.watch({}, handleResults)
}
else {
  compiler.run(handleResults)
}
