import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Table from 'react-bootstrap/Table';


class SingleQuestion extends Component {

    constructor(props) {
        super(props);

        this.state = {
          threads: props.threads
        }
                
      }

    render() {
        return (
          // <BootstrapTable data={this.state.threads} striped hover bordered={ false }>
          //   <TableHeaderColumn isKey dataField='_id'>Id</TableHeaderColumn>
          //   <TableHeaderColumn dataField='header'>Question</TableHeaderColumn>
          // </BootstrapTable>
          <Table hover>
            <tbody>
              {this.state.threads.map((data) => {
                return (
                  <tr>
                    <td>Votes: {data.up.length - data.down.length} Answers: {data.answers.length}</td>
                    <td>{data.header}</td>
                  </tr>
                )
              })}
              
            </tbody>
          </Table>
        );
    }
}

export default SingleQuestion;
