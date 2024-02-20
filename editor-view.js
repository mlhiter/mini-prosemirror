class EditorView {
  constructor(dom, { state }) {
    this.dom = dom
    this.state = state

    this.dom.contentEditable = true
  }
}
