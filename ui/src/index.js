import ReactDOM from "react-dom"
import Relay from "react-relay"

class AppHomeRoute extends Relay.Route {
}

AppHomeRoute.path = "/"
AppHomeRoute.queries = {
  notes: () => Relay.QL`query { allNotes }`,
}
AppHomeRoute.routeName = "AppHomeRoute"

const Note = ({ note }) => (
  <li>
    { note.text }
  </li>
)

const NoteContainer = Relay.createContainer(Note, {
  fragments: {
    note: () => Relay.QL`
      fragment on Note {
        text
      }
    `,
  },
})

const HelloWorld = ({ notes: { edges } }) => (
  <ul>
    {edges.map((edge) => <NoteContainer key={edge.node.id} note={edge.node} />)}
  </ul>
)

const HelloWorldContainer = Relay.createContainer(HelloWorld, {
  fragments: {
    notes: () => Relay.QL`
      fragment on NoteDefaultConnection {
        edges {
          node {
            id
            ${NoteContainer.getFragment("note")}
          }
        }
      }`,
  },
})


const app = document.createElement("div")
document.body.appendChild(app)
ReactDOM.render(
  <Relay.RootContainer
    Component={HelloWorldContainer}
    route={new AppHomeRoute()}
  />, app)
