import Container from "src/components/container/Container";
import React, { Component, FormEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction, ActionCreator } from 'redux';
import { CatFormInput } from 'typings';
import { CatPageState } from 'src/reducers/cat_page_reducer';
import { STORE_STATE } from 'src/reducers';
import { addCat, removeCat, AddCatAction, RemoveCatAction } from 'src/actions';
import Table from "src/components/table";

import * as _ from 'lodash';
import Row from 'src/components/container/Row';
import Cat from 'src/model/cat';

class CatList extends Component<CatPageState & CatDispatchProps> {
  constructor(props: any){
    super(props)
    // const { cats } = this.props
    this.handleSubmit = this.handleSubmit.bind(this)
    this.lastButtonOnClick = this.lastButtonOnClick.bind(this)
  }

  public handleSubmit(event: FormEvent) {
    event.preventDefault()
    const { addCat } = this.props
    const target = event.target as CatFormInput
    addCat(target!.name!.value)
  }

  public render(){
    const { cats } = this.props
    const headers = _.keys(cats[0])

    return (
      <Container fluid={true} className="main-content-container px-5 py-3">
        <h3 className="mb-3">Cat List</h3>
        <Row>
          <form onSubmit={this.handleSubmit} className="col-8">
            <div className="form-group">
              <label>
                Cat Name:
              </label>
              <input className="form-control" type='text' name='name' />
            </div>
            <br />
            <button className="btn btn-primary" type='submit'>Add Cat</button>
          </form>
        </Row>
        <Row className="mt-3">
          <Table 
            tableData={cats}
            tableHeaders={headers}
            caption="Here be Cats"
            lastButton={{
              text: "Remove",
              onClick: this.lastButtonOnClick
            }}/>
          </Row>
      </Container>
    )
  }

  public lastButtonOnClick(event: MouseEvent, catToRemove: Cat){
    const { removeCat } = this.props
    removeCat(catToRemove.name)
  }
}

type CatDispatchProps = {
  addCat: ActionCreator<AddCatAction>,
  removeCat: ActionCreator<RemoveCatAction>
}

const mapStateToProps = ({ catPage }: STORE_STATE) => {
  return {
    cats: catPage.cats
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators(
    {
      addCat,
      removeCat
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CatList)