import React, { Component } from 'react'
import { connect } from 'react-redux'
import { STORE_STATE } from 'src/reducers';
import Container from 'src/components/container/Container';
import CatGraph from './cat-graph/chartjs-graph'

class CatStats extends Component {

  public render() {
    return (
      <Container
        fluid={true}
        className="cat-graphs-container px-5 py-3">
        <h3>
          Graphs
        </h3>
        <CatGraph />
      </Container>
    )
  }
}

const mapStateToProps = (state: STORE_STATE) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CatStats)
