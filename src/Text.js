function Text(props) {
  return (
      <div>
          {
              props.text.map((a, index) => {
                return (
                  <div className="memo">
                    <div className="inputText">{index}. {a}</div>
                  </div>
                )
              })
            }
      </div>
  )
}

export default Text;